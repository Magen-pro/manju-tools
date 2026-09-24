/* =========================================================
   Manju Tools and Machines — Store (cart / wishlist / toast)
   Client-side only. Persists to localStorage for a working
   concept demo (no backend).
   ========================================================= */

const Store = (() => {
  const CART_KEY = "mtm_cart_v1";
  const WISH_KEY = "mtm_wishlist_v1";

  function read(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function write(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
  }

  let cart = read(CART_KEY);       // { productId: qty }
  let wishlist = read(WISH_KEY);   // { productId: true }

  const listeners = [];
  function notify() { listeners.forEach(fn => fn()); }
  function onChange(fn) { listeners.push(fn); }

  function cartCount() {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  }
  function cartTotal() {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = getProduct(id);
      return sum + (p ? p.price * qty : 0);
    }, 0);
  }
  function cartItems() {
    return Object.entries(cart)
      .map(([id, qty]) => ({ product: getProduct(id), qty }))
      .filter(item => item.product);
  }
  function cartQty(id) {
    return cart[id] || 0;
  }

  function addToCart(id, qty = 1) {
    cart[id] = (cart[id] || 0) + qty;
    write(CART_KEY, cart);
    notify();
    Toast.show("Added to cart");
  }
  function setQty(id, qty) {
    if (qty <= 0) { delete cart[id]; }
    else { cart[id] = qty; }
    write(CART_KEY, cart);
    notify();
  }
  function removeFromCart(id) {
    delete cart[id];
    write(CART_KEY, cart);
    notify();
    Toast.show("Removed from cart");
  }
  function clearCart() {
    cart = {};
    write(CART_KEY, cart);
    notify();
  }

  function isWishlisted(id) {
    return !!wishlist[id];
  }
  function toggleWishlist(id) {
    if (wishlist[id]) {
      delete wishlist[id];
      Toast.show("Removed from wishlist");
    } else {
      wishlist[id] = true;
      Toast.show("Added to wishlist");
    }
    write(WISH_KEY, wishlist);
    notify();
  }
  function wishlistItems() {
    return Object.keys(wishlist).map(getProduct).filter(Boolean);
  }
  function wishlistCount() {
    return Object.keys(wishlist).length;
  }

  return {
    onChange,
    cartCount, cartTotal, cartItems, cartQty, addToCart, setQty, removeFromCart, clearCart,
    isWishlisted, toggleWishlist, wishlistItems, wishlistCount,
  };
})();

/* ---------- Toast ---------- */
const Toast = (() => {
  let el = null;
  function ensure() {
    if (el) return el;
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
    return el;
  }
  let timer = null;
  function show(msg) {
    const node = ensure();
    node.textContent = msg;
    node.classList.add("toast--visible");
    clearTimeout(timer);
    timer = setTimeout(() => node.classList.remove("toast--visible"), 2200);
  }
  return { show };
})();

/* ---------- Header badge sync (cart/wishlist counts) ---------- */
function refreshHeaderBadges() {
  const cartBadge = document.querySelector("[data-cart-count]");
  const wishBadge = document.querySelector("[data-wishlist-count]");
  if (cartBadge) {
    const n = Store.cartCount();
    cartBadge.textContent = n;
    cartBadge.style.display = n > 0 ? "flex" : "none";
  }
  if (wishBadge) {
    const n = Store.wishlistCount();
    wishBadge.textContent = n;
    wishBadge.style.display = n > 0 ? "flex" : "none";
  }
}
Store.onChange(refreshHeaderBadges);
document.addEventListener("DOMContentLoaded", refreshHeaderBadges);
