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

/* ---------- Cart control on product cards ----------
   Every cart control on the page carries data-cart-control="<id>".
   It renders as either an "Add to cart" button or a compact +/-
   stepper depending on whether the product is already in the cart.
   After the cart changes, syncCartButtons() rebuilds each one from
   scratch, so state stays correct across cards, the product page,
   and anything rendered later.
------------------------------------------------------ */

function cartControlHTML(id) {
  const qty = Store.cartQty(id);
  if (qty > 0) {
    return `
      <div class="cart-stepper" data-cart-control="${id}">
        <button type="button" class="cart-stepper-btn" data-cart-dec="${id}" aria-label="Reduce quantity">&#8722;</button>
        <span class="cart-stepper-qty nums" aria-live="polite">${qty} in cart</span>
        <button type="button" class="cart-stepper-btn" data-cart-inc="${id}" aria-label="Add another">+</button>
      </div>`;
  }
  return `
    <div class="cart-stepper" data-cart-control="${id}">
      <button type="button" class="btn btn--dark btn--full btn--sm" data-add-to-cart="${id}">Add to cart</button>
    </div>`;
}

function applyCartControlState(wrap) {
  const id = wrap.dataset.cartControl;
  wrap.outerHTML = cartControlHTML(id);
}

function syncCartButtons(root) {
  (root || document).querySelectorAll("[data-cart-control]").forEach(applyCartControlState);
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
        ${cartControlHTML(p.id)}
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

/* ---------- Custom dropdown component ----------
   Replaces a native <select> with a button + panel so the open list
   can actually be styled (a native select's open list is OS chrome
   that CSS can't touch). Renders into an existing element (keeps its
   classes, so .search-select / .sort-select CSS still applies) and
   calls onChange(value) whenever the selection changes.
------------------------------------------------------------------ */
function buildDropdown(container, { options, value, onChange }) {
  container.classList.add("dd");
  container.innerHTML = `
    <button type="button" class="dd-trigger" aria-haspopup="listbox" aria-expanded="false">
      <span class="dd-trigger-label"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  `;
  const trigger = container.querySelector(".dd-trigger");
  const label = container.querySelector(".dd-trigger-label");

  // The panel is appended to <body> rather than left inside `container`,
  // because some triggers (the search-bar scope picker) sit inside an
  // ancestor with overflow:hidden — an absolutely-positioned child there
  // gets silently clipped. Fixed positioning computed from the trigger's
  // own bounding box sidesteps that entirely.
  const panel = document.createElement("div");
  panel.className = "dd-panel dd-panel--portal";
  panel.setAttribute("role", "listbox");
  document.body.appendChild(panel);

  let current = value;

  function renderOptions() {
    panel.innerHTML = options.map(opt => `
      <button type="button" class="dd-option ${opt.value === current ? "selected" : ""}"
              role="option" aria-selected="${opt.value === current}" data-value="${opt.value}">
        ${opt.label}
      </button>
    `).join("");
    const selected = options.find(o => o.value === current);
    label.textContent = selected ? selected.label : "";
  }
  renderOptions();

  function positionPanel() {
    const r = trigger.getBoundingClientRect();
    const alignRight = container.classList.contains("sort-select");
    panel.style.top = (r.bottom + 6) + "px";
    if (alignRight) {
      panel.style.left = "auto";
      panel.style.right = (window.innerWidth - r.right) + "px";
      panel.style.minWidth = "190px";
    } else {
      panel.style.left = r.left + "px";
      panel.style.right = "auto";
      panel.style.minWidth = Math.max(r.width, 170) + "px";
    }
  }

  function close() {
    container.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.remove("open");
  }
  function open() {
    positionPanel();
    container.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
    panel.classList.add("open");
  }

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.contains("open") ? close() : open();
  });
  panel.addEventListener("click", (e) => {
    const btn = e.target.closest(".dd-option");
    if (!btn) return;
    current = btn.dataset.value;
    renderOptions();
    close();
    onChange(current);
  });
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target) && !panel.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) { close(); trigger.focus(); }
  });
  window.addEventListener("scroll", () => { if (panel.classList.contains("open")) positionPanel(); }, true);
  window.addEventListener("resize", () => { if (panel.classList.contains("open")) positionPanel(); });

  return {
    setValue(v) { current = v; renderOptions(); },
    getValue() { return current; },
  };
}

/* ---------- Theme toggle ----------
   The actual theme is applied inline in <head> (see partials.py) to
   avoid a flash of the wrong theme before this script loads. This
   function only wires the button: reflects the current state, flips
   it on click, and persists the choice.
------------------------------------------------------------------ */
function initThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function reflectState() {
    const dark = currentTheme() === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  reflectState();

  btn.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("mtm_theme", next); } catch (e) {}
    reflectState();
  });
}

/* ---------- Rail scroll buttons ----------
   Wires up any .rail-nav buttons on the page (data-rail-prev /
   data-rail-next hold the id of the .rail they control), scrolling
   by roughly one card-width per click and hiding a button once its
   end of the rail is reached.
------------------------------------------------------------------ */
function wireRailNav() {
  document.querySelectorAll("[data-rail-prev], [data-rail-next]").forEach(btn => {
    const railId = btn.dataset.railPrev || btn.dataset.railNext;
    const rail = document.getElementById(railId);
    if (!rail || btn.dataset.railWired) return;
    btn.dataset.railWired = "1";
    const dir = btn.dataset.railPrev ? -1 : 1;
    btn.addEventListener("click", () => {
      const cardWidth = rail.querySelector(".product-card")?.offsetWidth || 244;
      rail.scrollBy({ left: dir * (cardWidth + 16) * 2, behavior: "smooth" });
    });
  });

  document.querySelectorAll(".rail-wrap").forEach(wrap => {
    const rail = wrap.querySelector(".rail");
    const prev = wrap.querySelector("[data-rail-prev]");
    const next = wrap.querySelector("[data-rail-next]");
    if (!rail) return;
    function updateVisibility() {
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      if (prev) prev.hidden = rail.scrollLeft <= 4;
      if (next) next.hidden = maxScroll <= 4 || rail.scrollLeft >= maxScroll - 4;
    }
    rail.addEventListener("scroll", updateVisibility);
    window.addEventListener("resize", updateVisibility);
    // Rail content is filled in by the page script after this runs,
    // so re-check shortly after load once cards have rendered.
    updateVisibility();
    setTimeout(updateVisibility, 300);
  });
}

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest("[data-add-to-cart]");
  if (addBtn) {
    e.preventDefault();
    Store.addToCart(addBtn.dataset.addToCart, 1);
    return;
  }
  const incBtn = e.target.closest("[data-cart-inc]");
  if (incBtn) {
    e.preventDefault();
    const id = incBtn.dataset.cartInc;
    Store.setQty(id, Store.cartQty(id) + 1);
    return;
  }
  const decBtn = e.target.closest("[data-cart-dec]");
  if (decBtn) {
    e.preventDefault();
    const id = decBtn.dataset.cartDec;
    const next = Store.cartQty(id) - 1;
    if (next <= 0) Store.removeFromCart(id);
    else Store.setQty(id, next);
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
  initThemeToggle();
  buildMegaMenu();
  buildMobileDrawer();
  buildCategoryBar();
  buildFooterCategories();
  refreshHeaderBadges();
  syncCartButtons();
  syncWishlistButtons();

  const searchScopeEl = document.getElementById("searchScopeSelect");
  if (searchScopeEl) {
    buildDropdown(searchScopeEl, {
      options: [
        { value: "all", label: "All categories" },
        { value: "power", label: "Power tools" },
        { value: "hand", label: "Hand tools" },
        { value: "measuring", label: "Measuring" },
        { value: "safety", label: "Safety gear" },
      ],
      value: "all",
      onChange: () => {}, // cosmetic scope only — search already spans the full catalog
    });
  }

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
