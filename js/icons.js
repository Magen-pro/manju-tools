/* =========================================================
   Manju Tools and Machines — Icon set (inline SVG, currentColor)
   Simple line-icon set used for category tiles and product
   placeholder art so every product has a distinct, on-brand
   graphic instead of a generic box icon.
   ========================================================= */

const ICONS = {
  drill: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 26h16v6H6z"/><path d="M22 27h10l6 5v-9l-6 4"/><path d="M6 26v6"/><path d="M38 26v6"/><circle cx="34" cy="32" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  grinder: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="20" width="18" height="10" rx="2"/><path d="M24 22h9a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5h-9"/><circle cx="38" cy="27" r="3"/></svg>`,
  wrench: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M32 10a8 8 0 0 0-10.9 9.3L8 32.4V40h7.6l13.1-13.1A8 8 0 0 0 38 16l-6 6-4-4 6-6Z"/></svg>`,
  tape: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="4"/><path d="M30 30 40 40"/></svg>`,
  weld: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 34 24 18l6 6-16 16z"/><path d="M28 14l6-6 4 4-6 6z"/><path d="M32 32c3 1 5 3 6 6"/></svg>`,
  safety: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6 10 11v11c0 10 6 17 14 20 8-3 14-10 14-20V11z"/><path d="M18 24l4 4 8-8"/></svg>`,
  trimmer: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 40 30 18"/><circle cx="34" cy="14" r="5"/><path d="M30 18l4 4"/></svg>`,
  combo: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="36" height="20" rx="2"/><path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/></svg>`,
  saw: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="24" r="10"/><path d="M26 24h14"/><path d="M28 20l4 4-4 4"/></svg>`,
  hammer: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M28 12l8 8-5 5-8-8z"/><path d="M27 17 10 34l4 4 17-17"/></svg>`,
  gloves: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 22v-8a3 3 0 0 1 6 0v6M22 20v-9a3 3 0 0 1 6 0v9M28 20v-7a3 3 0 0 1 6 0v13c0 8-5 13-11 13s-11-5-11-13v-4a3 3 0 0 1 6 0"/></svg>`,
  scale: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="26" width="32" height="14" rx="2"/><path d="M24 26V12"/><path d="M14 12h20"/></svg>`,
  caliper: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 30h34"/><path d="M6 24v12M14 24v12M22 24v6M40 24v12"/></svg>`,
  soldering: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 38 28 20"/><path d="M26 18l4-4 4 4-4 4z"/><circle cx="14" cy="34" r="2" fill="currentColor" stroke="none"/></svg>`,
  blower: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h14a6 6 0 1 0-6-6"/><path d="M22 22h12l6 6-6 6H22"/></svg>`,
  level: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="20" width="36" height="8" rx="2"/><circle cx="24" cy="24" r="3"/></svg>`,
  goggles: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="24" r="8"/><circle cx="34" cy="24" r="8"/><path d="M22 24h4"/></svg>`,
  toolkit: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="36" height="20" rx="2"/><path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/><path d="M6 26h36"/></svg>`,

  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0-3-2.4-5.4-5.4-5.4-1.7 0-3.2.8-4.2 2.1A5.4 5.4 0 0 0 6.8 3.2c-3 0-5.4 2.4-5.4 5.4 0 6 8.9 11.2 9.8 11.7.9-.5 9.6-5.7 9.6-11.7Z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6L2.5 9.3l6.6-.7z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="13" height="10"/><path d="M14 10h4l4 4v2h-8z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13v-1a9 9 0 0 1 18 0v1"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.3 6.4L3 16m0 5v-5h5"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m2 0-1 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 6"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
};

const CATEGORY_ICONS = {
  "cordless-power-tools": "drill",
  "corded-power-tools": "grinder",
  "hand-tools": "wrench",
  "measuring-tools": "tape",
  "welding-soldering": "weld",
  "safety-gear": "safety",
  "garden-outdoor": "trimmer",
  "combo-kits": "combo",
};

// Per-product icon overrides (falls back to category icon)
const PRODUCT_ICONS = {
  "ingco-ccs1601": "saw", "ingco-cs1855": "saw",
  "taparia-1102n": "wrench", "taparia-260": "wrench", "taparia-hammer": "hammer",
  "taparia-screwdriver-set": "toolkit", "taparia-toolkit-45": "toolkit",
  "stanley-tape-5m": "tape", "stanley-level": "level", "stanley-hacksaw": "saw",
  "jadever-scale": "scale", "jadever-caliper": "caliper",
  "ingco-welder-200": "weld", "ingco-solder-iron": "soldering",
  "ingco-gloves": "gloves", "ingco-goggles": "goggles",
  "ingco-blower": "blower", "ingco-trimmer": "trimmer",
  "ingco-combo-6pc": "combo",
};

function productIcon(product) {
  const key = PRODUCT_ICONS[product.id] || CATEGORY_ICONS[product.category] || "drill";
  return ICONS[key];
}
function categoryIcon(catId) {
  return ICONS[CATEGORY_ICONS[catId] || "drill"];
}
