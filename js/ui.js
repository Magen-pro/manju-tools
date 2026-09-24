/* =========================================================
   Manju Tools and Machines — Shared UI rendering
   ========================================================= */

function renderStars(rating) {
  const full = Math.round(rating);
  let html = '<span class="stars" aria-hidden="true">';
  for (let i = 0; i < 5; i++) {
    html += `<span class="${i < full ? "on" : "off"}">${ICONS.star}</span>`;
  }
  html += "</span>";
  return html;
}

/* ---------- Cart button markup & syncing ----------
   Every "add to cart" control on the page carries
   data-add-to-cart="<id>". After the cart changes, syncCartButtons()
   rewrites each one to reflect whether that product is already in
   the cart, so the state is consistent across cards, the product
   page and anything rendered later.
------------------------------------------------------ */

function cartButtonInner(id) {
  const qty = Store.cartQty(id);
  if (qty > 0) {
    return `<span class="btn-ico">${ICONS.check}</span> In cart · ${qty}`;
  }
  return "Add to cart";
}

function applyCartButtonState(btn) {
  const id = btn.dataset.addToCart;
  const qty = Store.cartQty(id);
  btn.innerHTML = cartButtonInner(id);
  btn.classList.toggle("is-in-cart", qty > 0);
  btn.setAttribute("aria-label", qty > 0
    ? `${qty} in cart. Add another`
    : "Add to cart");
}

function syncCartButtons(root) {
  (root || document).querySelectorAll("[data-add-to-cart]").forEach(applyCartButtonState);
}

function syncWishlistButtons(root) {
  (root || document).querySelectorAll("[data-wish-toggle]").forEach(btn => {
    const on = Store.isWishlisted(btn.dataset.wishToggle);
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute("aria-label", on ? "Remove from wishlist" : "Save to wishlist");
  });
}

/* ---------- Product card ---------- */
function productCardHTML(p) {
  const off = discountPct(p.price, p.mrp);
  const brand = getBrand(p.brand);
  const specEntries = Object.entries(p.specs).slice(0, 2);
  const inCart = Store.cartQty(p.id);
  const wished = Store.isWishlisted(p.id);
  const lowStock = p.stock > 0 && p.stock <= 15;

  return `
  <article class="product-card" data-product-id="${p.id}">
    <a href="product.html?id=${p.id}" class="product-card-media" aria-label="${p.name}">
      ${p.badge ? `<span class="tag tag--badge">${p.badge}</span>` : ""}
      ${off ? `<span class="tag tag--off">${off}% off</span>` : ""}
      ${productArt(p)}
    </a>
    <button class="wishlist-btn ${wished ? "active" : ""}" data-wish-toggle="${p.id}"
            aria-pressed="${wished}" aria-label="${wished ? "Remove from wishlist" : "Save to wishlist"}">
      ${ICONS.heart}
    </button>
    <div class="product-card-body">
      <div class="product-card-brand">${brand ? brand.name : ""}</div>
      <a href="product.html?id=${p.id}" class="product-card-name">${p.name}</a>
      <div class="product-card-specs">
        ${specEntries.map(([, v]) => `<span class="spec-chip">${v}</span>`).join("")}
      </div>
      <div class="product-card-rating">
        ${renderStars(p.rating)}
        <span class="rating-num nums">${p.rating}</span>
        <span class="rating-count nums">(${p.reviews})</span>
      </div>
      <div class="product-card-price-row">
        <span class="price-now nums">${formatINR(p.price)}</span>
        ${p.mrp ? `<span class="price-mrp nums">${formatINR(p.mrp)}</span>` : ""}
      </div>
      ${lowStock ? `<div class="stock-note low">Only ${p.stock} left</div>` : ""}
      <div class="product-card-actions">
        <button class="btn btn--dark btn--full btn--sm cart-btn ${inCart ? "is-in-cart" : ""}"
                data-add-to-cart="${p.id}">${cartButtonInner(p.id)}</button>
      </div>
    </div>
  </article>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML = `
      <div class="empty-state">
        ${ICONS.box}
        <h3>Nothing matches these filters</h3>
        <p>Clear a filter or try a different search term.</p>
      </div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
  syncCartButtons(container);
  syncWishlistButtons(container);
}

/* ---------- Navigation construction ---------- */
function buildMegaMenu() {
  const menu = document.getElementById("megaMenu");
  if (!menu) return;
  const cols = CATEGORIES.map(cat => `
    <div class="mega-col">
      <a class="mega-col-title" href="category.html?cat=${cat.id}">${cat.name}</a>
      <ul>
        ${cat.sub.slice(0, 7).map(s => `<li><a href="category.html?cat=${cat.id}&sub=${encodeURIComponent(s)}">${s}</a></li>`).join("")}
        ${cat.sub.length > 7 ? `<li><a class="mega-more" href="category.html?cat=${cat.id}">All ${cat.sub.length} types</a></li>` : ""}
      </ul>
    </div>
  `).join("");
  menu.innerHTML = `<div class="mega-menu-inner">${cols}</div>`;
}

function buildMobileDrawer() {
  const wrap = document.getElementById("mobileDrawerBody");
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(cat => `
    <details class="mobile-cat-group">
      <summary class="mobile-cat-title">
        ${cat.name}
        <span class="mobile-cat-chev">${ICONS.chevronDown}</span>
      </summary>
      <div class="mobile-cat-sub">
        <a href="category.html?cat=${cat.id}" class="mobile-cat-all">All ${cat.name}</a>
        ${cat.sub.map(s => `<a href="category.html?cat=${cat.id}&sub=${encodeURIComponent(s)}">${s}</a>`).join("")}
      </div>
    </details>
  `).join("");
}

function buildCategoryBar() {
  const bar = document.getElementById("categoryBarLinks");
  if (!bar) return;
  const params = new URLSearchParams(location.search);
  const activeCat = params.get("cat");
  bar.innerHTML = CATEGORIES.slice(0, 7).map(cat => `
    <a href="category.html?cat=${cat.id}" class="cat-link ${cat.id === activeCat ? "active" : ""}">${cat.name}</a>
  `).join("");
}

function buildFooterCategories() {
  const el = document.getElementById("footerCatList");
  if (!el) return;
  el.innerHTML = CATEGORIES.slice(0, 6).map(c => `<li><a href="category.html?cat=${c.id}">${c.name}</a></li>`).join("");
}

/* ---------- Global interactions ---------- */
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add-to-cart]");
  if (addBtn) {
    e.preventDefault();
    Store.addToCart(addBtn.dataset.addToCart, 1);
    addBtn.classList.add("just-added");
    setTimeout(() => addBtn.classList.remove("just-added"), 320);
    return;
  }
  const wishBtn = e.target.closest("[data-wish-toggle]");
  if (wishBtn) {
    e.preventDefault();
    Store.toggleWishlist(wishBtn.dataset.wishToggle);
    return;
  }
});

/* Keep every cart/wishlist control in sync with the store */
Store.onChange(() => {
  syncCartButtons();
  syncWishlistButtons();
});

document.addEventListener("DOMContentLoaded", () => {
  buildMegaMenu();
  buildMobileDrawer();
  buildCategoryBar();
  buildFooterCategories();
  refreshHeaderBadges();
  syncCartButtons();
  syncWishlistButtons();

  const allCatsTrigger = document.getElementById("allCatsTrigger");
  const megaMenu = document.getElementById("megaMenu");
  if (allCatsTrigger && megaMenu) {
    allCatsTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      const open = megaMenu.classList.toggle("open");
      allCatsTrigger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (e) => {
      if (!megaMenu.contains(e.target) && !allCatsTrigger.contains(e.target)) {
        megaMenu.classList.remove("open");
        allCatsTrigger.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        megaMenu.classList.remove("open");
        allCatsTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  const navToggle = document.getElementById("navToggle");
  const drawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("mobileDrawerClose");
  const drawerBackdrop = drawer ? drawer.querySelector(".mobile-drawer-backdrop") : null;
  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (navToggle && drawer) {
    navToggle.addEventListener("click", () => {
      drawer.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  }
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  const searchForm = document.getElementById("siteSearchForm");
  if (searchForm && !searchForm.dataset.localSearch) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchForm.querySelector(".search-input").value.trim();
      window.location.href = "category.html" + (q ? `?q=${encodeURIComponent(q)}` : "");
    });
  }
});
