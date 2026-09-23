/* =========================================================
   Manju Tools and Machines — Shared UI rendering
   ========================================================= */

function starRow(rating) {
  return `<span style="display:inline-flex;gap:1px;color:var(--gold);">${ICONS.star.repeat(0)}</span>`;
}

function renderStars(rating) {
  const full = Math.round(rating);
  let html = '<span style="display:inline-flex;gap:1px;">';
  for (let i = 0; i < 5; i++) {
    html += `<span style="color:${i < full ? 'var(--gold)' : 'var(--line)'};width:12px;height:12px;display:inline-flex;">${ICONS.star}</span>`;
  }
  html += '</span>';
  return html;
}

function productCardHTML(p) {
  const off = discountPct(p.price, p.mrp);
  const brand = getBrand(p.brand);
  const specEntries = Object.entries(p.specs).slice(0, 2);
  const wished = Store.isWishlisted(p.id);
  return `
  <article class="product-card" data-product-id="${p.id}">
    <a href="product.html?id=${p.id}" class="product-card-media" aria-label="${p.name}">
      ${p.badge ? `<span class="badge badge--gold product-card-badge">${p.badge}</span>` : ""}
      ${productIcon(p)}
    </a>
    <button class="wishlist-btn ${wished ? "active" : ""}" data-wish-toggle="${p.id}" aria-label="Toggle wishlist" aria-pressed="${wished}">
      ${ICONS.heart}
    </button>
    <div class="product-card-body">
      <div class="product-card-brand">${brand ? brand.name : ""}</div>
      <a href="product.html?id=${p.id}" class="product-card-name">${p.name}</a>
      <div class="product-card-specs">
        ${specEntries.map(([k, v]) => `<span class="spec-chip">${v}</span>`).join("")}
      </div>
      <div class="product-card-rating">
        <span class="rating-pill">${p.rating} ${ICONS.star.replace('viewBox="0 0 24 24"', 'viewBox="0 0 24 24" width="10" height="10"')}</span>
        <span>${p.reviews} reviews</span>
      </div>
      <div class="product-card-price-row">
        <span class="price-now nums">${formatINR(p.price)}</span>
        ${p.mrp ? `<span class="price-mrp nums">${formatINR(p.mrp)}</span>` : ""}
        ${off ? `<span class="price-off">${off}% off</span>` : ""}
      </div>
      <div class="product-card-actions">
        <button class="btn btn--dark btn--full btn--sm" data-add-to-cart="${p.id}">Add to Cart</button>
      </div>
    </div>
  </article>`;
}

function renderProductGrid(container, products) {
  if (!container) return;
  if (!products.length) {
    container.innerHTML = `
      <div class="empty-state">
        ${ICONS.info}
        <h3>No products match these filters</h3>
        <p>Try clearing a filter or searching a different term.</p>
      </div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
}

function renderCategoryChips(catId, subLabel) {
  // used on category page toolbar breadcrumbs, filled per-page
}

/* ---------- Mega menu build ---------- */
function buildMegaMenu() {
  const menu = document.getElementById("megaMenu");
  if (!menu) return;
  const cols = CATEGORIES.map(cat => `
    <div class="mega-col">
      <div class="mega-col-title"><a href="category.html?cat=${cat.id}">${cat.name}</a></div>
      <ul>
        ${cat.sub.slice(0, 7).map(s => `<li><a href="category.html?cat=${cat.id}&sub=${encodeURIComponent(s)}">${s}</a></li>`).join("")}
      </ul>
    </div>
  `).join("");
  menu.innerHTML = `<div class="mega-menu-inner">${cols}</div>`;
}

function buildMobileDrawer() {
  const wrap = document.getElementById("mobileDrawerBody");
  if (!wrap) return;
  wrap.innerHTML = CATEGORIES.map(cat => `
    <div class="mobile-cat-group">
      <div class="mobile-cat-title">
        <a href="category.html?cat=${cat.id}">${cat.name}</a>
      </div>
      <div class="mobile-cat-sub">
        ${cat.sub.map(s => `<a href="category.html?cat=${cat.id}&sub=${encodeURIComponent(s)}">${s}</a>`).join("")}
      </div>
    </div>
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

/* ---------- Global event delegation (works on every page) ---------- */
document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add-to-cart]");
  if (addBtn) {
    e.preventDefault();
    Store.addToCart(addBtn.dataset.addToCart, 1);
    return;
  }
  const wishBtn = e.target.closest("[data-wish-toggle]");
  if (wishBtn) {
    e.preventDefault();
    Store.toggleWishlist(wishBtn.dataset.wishToggle);
    wishBtn.classList.toggle("active");
    return;
  }
});

/* ---------- Header interactivity: mega menu trigger, mobile drawer, search ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildMegaMenu();
  buildMobileDrawer();
  buildCategoryBar();
  buildFooterCategories();
  refreshHeaderBadges();

  const allCatsTrigger = document.getElementById("allCatsTrigger");
  const megaMenu = document.getElementById("megaMenu");
  if (allCatsTrigger && megaMenu) {
    allCatsTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      megaMenu.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!megaMenu.contains(e.target) && !allCatsTrigger.contains(e.target)) {
        megaMenu.classList.remove("open");
      }
    });
  }

  const navToggle = document.getElementById("navToggle");
  const drawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("mobileDrawerClose");
  const drawerBackdrop = drawer ? drawer.querySelector(".mobile-drawer-backdrop") : null;
  if (navToggle && drawer) {
    navToggle.addEventListener("click", () => drawer.classList.add("open"));
  }
  if (drawerClose) drawerClose.addEventListener("click", () => drawer.classList.remove("open"));
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", () => drawer.classList.remove("open"));

  const searchForm = document.getElementById("siteSearchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = searchForm.querySelector(".search-input").value.trim();
      window.location.href = "category.html" + (q ? `?q=${encodeURIComponent(q)}` : "");
    });
  }
});
