/* =========================================================
   Manju Tools and Machines — Product illustrations
   Flat multi-tone vector tools drawn in a consistent
   side-profile style. Palette classes:
     .g  gold body      .d  charcoal detail
     .m  steel grey     .l  light metal
     .k  black accent   .w  white highlight
   All drawn on a 160x160 viewBox.
   ========================================================= */

const SVG_OPEN = '<svg class="tool-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">';
const SVG_CLOSE = "</svg>";

function svg(inner) {
  return SVG_OPEN + inner + SVG_CLOSE;
}

const ART = {};

/* ---------- Cordless drill / driver ---------- */
ART.cordlessDrill = svg(`
  <rect class="d" x="104" y="58" width="12" height="20" rx="2"/>
  <rect class="m" x="114" y="60" width="22" height="16" rx="3"/>
  <path class="l" d="M136 63h9l4 5-4 5h-9z"/>
  <rect class="g" x="46" y="48" width="62" height="34" rx="12"/>
  <circle class="d" cx="58" cy="65" r="7"/>
  <circle class="w" cx="58" cy="65" r="2.6"/>
  <path class="g" d="M62 80h26l-5 34H60z"/>
  <path class="d" d="M58 82h9v11h-9z"/>
  <rect class="d" x="50" y="110" width="40" height="22" rx="5"/>
  <rect class="k" x="56" y="116" width="28" height="4" rx="2"/>
  <rect class="m" x="86" y="52" width="16" height="6" rx="3"/>
`);

/* ---------- Impact / hammer drill ---------- */
ART.hammerDrill = svg(`
  <rect class="d" x="102" y="56" width="10" height="24" rx="2"/>
  <rect class="m" x="110" y="58" width="20" height="20" rx="3"/>
  <rect class="l" x="128" y="62" width="18" height="12" rx="2"/>
  <path class="d" d="M146 65h6v6h-6z"/>
  <rect class="g" x="44" y="46" width="60" height="38" rx="13"/>
  <circle class="m" cx="98" cy="65" r="11"/>
  <circle class="d" cx="98" cy="65" r="6"/>
  <path class="g" d="M60 82h26l-6 34H57z"/>
  <path class="d" d="M55 84h10v12h-10z"/>
  <rect class="d" x="47" y="112" width="42" height="23" rx="5"/>
  <rect class="k" x="54" y="119" width="28" height="4" rx="2"/>
  <rect class="k" x="52" y="52" width="26" height="5" rx="2.5"/>
`);

/* ---------- Angle grinder ---------- */
ART.grinder = svg(`
  <rect class="g" x="38" y="62" width="66" height="30" rx="13"/>
  <rect class="d" x="48" y="68" width="30" height="8" rx="4"/>
  <path class="d" d="M104 60h14a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6h-14z"/>
  <circle class="l" cx="124" cy="77" r="22"/>
  <circle class="m" cx="124" cy="77" r="15"/>
  <circle class="d" cx="124" cy="77" r="5"/>
  <rect class="d" x="30" y="70" width="12" height="14" rx="3"/>
  <rect class="g" x="60" y="44" width="10" height="20" rx="4"/>
`);

/* ---------- Circular saw ---------- */
ART.circularSaw = svg(`
  <circle class="l" cx="98" cy="76" r="33"/>
  <circle class="m" cx="98" cy="76" r="23"/>
  <circle class="d" cx="98" cy="76" r="6"/>
  <path class="m" d="M98 43a33 33 0 0 1 33 33h-9a24 24 0 0 0-24-24z"/>
  <path class="d" d="M62 40h44a8 8 0 0 1 8 8v18H62z"/>
  <rect class="g" x="26" y="46" width="52" height="38" rx="12"/>
  <rect class="d" x="34" y="54" width="22" height="8" rx="4"/>
  <path class="g" d="M56 26h30a7 7 0 0 1 7 7v9H49v-9a7 7 0 0 1 7-7z"/>
  <rect class="d" x="24" y="106" width="112" height="10" rx="3"/>
  <rect class="m" x="24" y="106" width="112" height="4" rx="2"/>
`);

/* ---------- Jig saw ---------- */
ART.jigSaw = svg(`
  <path class="g" d="M48 30h44a10 10 0 0 1 10 10v10H38V40a10 10 0 0 1 10-10z"/>
  <rect class="d" x="52" y="36" width="36" height="8" rx="4"/>
  <rect class="g" x="38" y="48" width="70" height="46" rx="10"/>
  <rect class="d" x="46" y="58" width="26" height="9" rx="4"/>
  <circle class="m" cx="94" cy="70" r="10"/>
  <rect class="m" x="30" y="96" width="94" height="10" rx="3"/>
  <rect class="l" x="30" y="96" width="94" height="4" rx="2"/>
  <rect class="l" x="92" y="106" width="8" height="30" rx="1"/>
  <path class="d" d="M92 112h8M92 119h8M92 126h8" stroke="currentColor" stroke-width="2"/>
`);

/* ---------- Rotary hammer (SDS) ---------- */
ART.rotaryHammer = svg(`
  <rect class="g" x="36" y="52" width="66" height="32" rx="12"/>
  <rect class="d" x="44" y="58" width="26" height="8" rx="4"/>
  <rect class="m" x="100" y="58" width="24" height="20" rx="4"/>
  <rect class="l" x="122" y="63" width="24" height="10" rx="2"/>
  <path class="d" d="M146 65h6l2 3-2 3h-6z"/>
  <path class="g" d="M46 82h24l-4 32H44z"/>
  <path class="d" d="M40 86h9v12h-9z"/>
  <rect class="d" x="38" y="110" width="34" height="10" rx="4"/>
  <circle class="m" cx="96" cy="68" r="12"/>
  <circle class="d" cx="96" cy="68" r="6"/>
`);

/* ---------- Combination plier ---------- */
ART.plier = svg(`
  <path class="m" d="M74 20l12 10-8 34-10-4z"/>
  <path class="m" d="M96 20L84 30l8 34 10-4z"/>
  <circle class="d" cx="85" cy="66" r="7"/>
  <path class="g" d="M78 72l-14 62a5 5 0 0 0 9 3l16-58z"/>
  <path class="g" d="M92 72l14 62a5 5 0 0 1-9 3L81 79z"/>
`);

/* ---------- Adjustable wrench ---------- */
ART.wrench = svg(`
  <rect class="m" x="52" y="20" width="12" height="46" rx="3"/>
  <rect class="m" x="52" y="20" width="44" height="13" rx="3"/>
  <rect class="m" x="52" y="53" width="38" height="13" rx="3"/>
  <rect class="l" x="64" y="33" width="10" height="20"/>
  <rect class="m" x="56" y="62" width="24" height="14" rx="4"/>
  <rect class="g" x="58" y="72" width="20" height="66" rx="9"/>
  <rect class="d" x="61" y="80" width="14" height="4" rx="2"/>
  <rect class="d" x="61" y="89" width="14" height="4" rx="2"/>
  <rect class="d" x="61" y="98" width="14" height="4" rx="2"/>
`);

/* ---------- Claw hammer ---------- */
ART.hammer = svg(`
  <path class="m" d="M48 30h44v20H48z"/>
  <path class="d" d="M92 30h14v20H92z"/>
  <path class="m" d="M48 30c-12 2-18 10-20 20l10 4c3-8 6-12 10-14z"/>
  <rect class="g" x="62" y="50" width="16" height="84" rx="7"/>
`);

/* ---------- Screwdriver set ---------- */
ART.screwdriver = svg(`
  <rect class="g" x="40" y="46" width="16" height="44" rx="7"/>
  <rect class="m" x="45" y="88" width="6" height="34" rx="2"/>
  <path class="d" d="M44 122h8v8h-8z"/>
  <rect class="g" x="72" y="38" width="17" height="48" rx="7"/>
  <rect class="m" x="77" y="84" width="7" height="40" rx="2"/>
  <path class="d" d="M76 124h9v8h-9z"/>
  <rect class="g" x="105" y="50" width="15" height="40" rx="6"/>
  <rect class="m" x="110" y="88" width="6" height="30" rx="2"/>
  <path class="d" d="M109 118h8v7h-8z"/>
`);

/* ---------- Hacksaw ---------- */
ART.hacksaw = svg(`
  <rect class="d" x="40" y="40" width="88" height="11" rx="4"/>
  <rect class="d" x="117" y="40" width="11" height="56" rx="4"/>
  <rect class="d" x="40" y="40" width="11" height="52" rx="4"/>
  <rect class="l" x="44" y="88" width="80" height="10" rx="2"/>
  <path class="m" d="M46 98h76l-3 5H49z"/>
  <path class="g" d="M40 78h16a8 8 0 0 1 8 8v4a8 8 0 0 1-8 8H40a12 12 0 0 1-12-12 8 8 0 0 1 12-8z"/>
  <rect class="g" x="22" y="84" width="20" height="40" rx="9"/>
`);

/* ---------- Measuring tape ---------- */
ART.tape = svg(`
  <rect class="g" x="34" y="40" width="70" height="72" rx="16"/>
  <circle class="d" cx="69" cy="76" r="22"/>
  <circle class="m" cx="69" cy="76" r="13"/>
  <circle class="w" cx="69" cy="76" r="5"/>
  <rect class="l" x="100" y="94" width="42" height="12" rx="2"/>
  <path class="d" d="M138 94h8v12h-8z"/>
`);

/* ---------- Spirit level ---------- */
ART.level = svg(`
  <rect class="g" x="18" y="62" width="124" height="34" rx="6"/>
  <rect class="d" x="26" y="70" width="108" height="18" rx="4"/>
  <rect class="l" x="60" y="72" width="40" height="14" rx="7"/>
  <circle class="m" cx="80" cy="79" r="5"/>
  <rect class="l" x="32" y="74" width="16" height="10" rx="5"/>
  <rect class="l" x="112" y="74" width="16" height="10" rx="5"/>
`);

/* ---------- Digital caliper ---------- */
ART.caliper = svg(`
  <rect class="m" x="18" y="74" width="126" height="11" rx="3"/>
  <path class="d" d="M30 74v6M42 74v6M54 74v6M66 74v6M90 74v6M102 74v6M114 74v6"
        stroke="currentColor" stroke-width="2" opacity=".35"/>
  <path class="m" d="M24 40h13v34H24z"/>
  <path class="l" d="M24 36h13v8H24z"/>
  <path class="m" d="M24 85h13v26H24z"/>
  <path class="l" d="M24 107h13v8H24z"/>
  <path class="m" d="M62 44h13v30H62z"/>
  <path class="l" d="M62 40h13v8H62z"/>
  <path class="m" d="M62 85h13v22H62z"/>
  <path class="l" d="M62 103h13v8H62z"/>
  <rect class="g" x="72" y="26" width="52" height="36" rx="5"/>
  <rect class="d" x="79" y="33" width="38" height="20" rx="2"/>
  <rect class="w" x="85" y="38" width="26" height="9" rx="1"/>
`);

/* ---------- Inverter welder ---------- */
ART.welder = svg(`
  <rect class="g" x="28" y="52" width="104" height="66" rx="8"/>
  <rect class="d" x="38" y="64" width="46" height="30" rx="4"/>
  <circle class="m" cx="61" cy="79" r="10"/>
  <circle class="d" cx="104" cy="72" r="9"/>
  <circle class="d" cx="104" cy="98" r="9"/>
  <circle class="m" cx="104" cy="72" r="4"/>
  <circle class="m" cx="104" cy="98" r="4"/>
  <rect class="d" x="56" y="36" width="48" height="8" rx="4"/>
`);

/* ---------- Soldering iron ---------- */
ART.soldering = svg(`
  <rect class="g" x="52" y="40" width="20" height="52" rx="9" transform="rotate(35 62 66)"/>
  <rect class="d" x="56" y="30" width="14" height="16" rx="5" transform="rotate(35 63 38)"/>
  <path class="m" d="M86 84l18 18-6 6-18-18z"/>
  <path class="l" d="M104 102l14 14-7 7-14-14z"/>
  <path class="k" d="M118 116l8 8-4 4-8-8z"/>
`);

/* ---------- Safety gloves ---------- */
ART.gloves = svg(`
  <path class="g" d="M46 70V46a7 7 0 0 1 14 0v22z"/>
  <path class="g" d="M60 64V38a7 7 0 0 1 14 0v26z"/>
  <path class="g" d="M74 64V42a7 7 0 0 1 14 0v22z"/>
  <path class="g" d="M88 66V50a7 7 0 0 1 14 0v30c0 22-13 34-28 34s-28-12-28-34V70z"/>
  <rect class="d" x="44" y="112" width="60" height="14" rx="5"/>
`);

/* ---------- Safety goggles ---------- */
ART.goggles = svg(`
  <path class="d" d="M28 62h104v30a14 14 0 0 1-14 14H42a14 14 0 0 1-14-14z"/>
  <path class="l" d="M38 70h34v26H38z"/>
  <path class="l" d="M88 70h34v26H88z"/>
  <rect class="g" x="26" y="54" width="108" height="12" rx="6"/>
  <path class="g" d="M20 58h10v10H20zM130 58h10v10h-10z"/>
`);

/* ---------- Grass trimmer ---------- */
ART.trimmer = svg(`
  <path class="m" d="M46 40L112 112l-11 10L35 50z"/>
  <rect class="g" x="26" y="22" width="36" height="30" rx="12"/>
  <rect class="d" x="33" y="30" width="18" height="10" rx="5"/>
  <rect class="d" x="66" y="64" width="20" height="12" rx="5" transform="rotate(48 76 70)"/>
  <circle class="g" cx="112" cy="120" r="21"/>
  <circle class="d" cx="112" cy="120" r="9"/>
  <path class="m" d="M133 120h12M79 120h12" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
`);

/* ---------- Blower ---------- */
ART.blower = svg(`
  <rect class="g" x="34" y="52" width="58" height="42" rx="14"/>
  <circle class="d" cx="58" cy="73" r="14"/>
  <circle class="m" cx="58" cy="73" r="7"/>
  <path class="g" d="M92 60h22l24 10-24 10H92z"/>
  <path class="g" d="M46 94h26l-4 24H48z"/>
  <rect class="d" x="42" y="114" width="32" height="14" rx="5"/>
`);

/* ---------- Combo kit case ---------- */
ART.comboCase = svg(`
  <rect class="d" x="24" y="56" width="112" height="66" rx="8"/>
  <rect class="g" x="24" y="56" width="112" height="26" rx="8"/>
  <path class="d" d="M62 42h36a10 10 0 0 1 10 10v6H52v-6a10 10 0 0 1 10-10z"/>
  <rect class="m" x="66" y="48" width="28" height="7" rx="3.5"/>
  <rect class="m" x="44" y="90" width="20" height="14" rx="3"/>
  <rect class="m" x="96" y="90" width="20" height="14" rx="3"/>
`);

/* ---------- Platform scale ---------- */
ART.scale = svg(`
  <rect class="m" x="22" y="92" width="116" height="20" rx="4"/>
  <rect class="l" x="22" y="92" width="116" height="7" rx="3"/>
  <rect class="d" x="30" y="112" width="14" height="12" rx="3"/>
  <rect class="d" x="116" y="112" width="14" height="12" rx="3"/>
  <rect class="m" x="76" y="48" width="9" height="46" rx="3"/>
  <rect class="g" x="56" y="26" width="50" height="34" rx="5"/>
  <rect class="d" x="63" y="34" width="36" height="18" rx="2"/>
  <rect class="w" x="68" y="39" width="26" height="8" rx="1"/>
`);

/* ---------- Multi tool ---------- */
ART.multiTool = svg(`
  <rect class="g" x="38" y="58" width="72" height="34" rx="16"/>
  <rect class="d" x="48" y="66" width="34" height="9" rx="4"/>
  <path class="m" d="M110 66h14v20h-14z"/>
  <path class="l" d="M124 62l18 14-18 14z"/>
  <rect class="d" x="30" y="66" width="10" height="18" rx="3"/>
`);

/* ---------- Impact wrench ---------- */
ART.impactWrench = svg(`
  <rect class="g" x="42" y="46" width="60" height="36" rx="14"/>
  <circle class="d" cx="56" cy="64" r="8"/>
  <circle class="w" cx="56" cy="64" r="3"/>
  <rect class="m" x="100" y="54" width="20" height="20" rx="4"/>
  <rect class="d" x="118" y="58" width="16" height="12" rx="2"/>
  <rect class="l" x="132" y="56" width="10" height="16" rx="3"/>
  <path class="g" d="M58 82h26l-5 32H56z"/>
  <path class="d" d="M52 84h10v12H52z"/>
  <rect class="d" x="46" y="110" width="40" height="22" rx="5"/>
`);

/* ---------- Mini grinder ---------- */
ART.miniGrinder = svg(`
  <rect class="g" x="42" y="64" width="58" height="28" rx="12"/>
  <rect class="d" x="50" y="70" width="26" height="8" rx="4"/>
  <path class="d" d="M100 62h12a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6h-12z"/>
  <circle class="l" cx="118" cy="78" r="18"/>
  <circle class="m" cx="118" cy="78" r="12"/>
  <circle class="d" cx="118" cy="78" r="4"/>
`);

/* ---------- Map products & categories to artwork ---------- */

const CATEGORY_ART = {
  "cordless-power-tools": "cordlessDrill",
  "corded-power-tools": "grinder",
  "hand-tools": "wrench",
  "measuring-tools": "tape",
  "welding-soldering": "welder",
  "safety-gear": "gloves",
  "garden-outdoor": "trimmer",
  "combo-kits": "comboCase",
};

const PRODUCT_ART = {
  "ingco-cid1802": "hammerDrill",
  "ingco-cag2001": "grinder",
  "ingco-cd2001": "cordlessDrill",
  "ingco-ccs1601": "circularSaw",
  "ingco-chd2001": "hammerDrill",
  "ingco-ag8508": "grinder",
  "ingco-rh2202": "rotaryHammer",
  "ingco-cs1855": "circularSaw",
  "taparia-1102n": "plier",
  "taparia-260": "wrench",
  "taparia-screwdriver-set": "screwdriver",
  "taparia-hammer": "hammer",
  "stanley-tape-5m": "tape",
  "stanley-level": "level",
  "stanley-hacksaw": "hacksaw",
  "jadever-scale": "scale",
  "jadever-caliper": "caliper",
  "ingco-welder-200": "welder",
  "ingco-solder-iron": "soldering",
  "ingco-gloves": "gloves",
  "ingco-goggles": "goggles",
  "ingco-trimmer": "trimmer",
  "ingco-blower": "blower",
  "ingco-combo-6pc": "comboCase",
  "taparia-toolkit-45": "comboCase",
};

function productArt(product) {
  const key = PRODUCT_ART[product.id] || CATEGORY_ART[product.category] || "cordlessDrill";
  return ART[key] || ART.cordlessDrill;
}
function categoryArt(catId) {
  return ART[CATEGORY_ART[catId] || "cordlessDrill"];
}

/* ---------- Interface icons (kept as line icons) ---------- */
const ICONS = {
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0-3-2.4-5.4-5.4-5.4-1.7 0-3.2.8-4.2 2.1A5.4 5.4 0 0 0 6.8 3.2c-3 0-5.4 2.4-5.4 5.4 0 6 8.9 11.2 9.8 11.7.9-.5 9.6-5.7 9.6-11.7Z"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6L2.5 9.3l6.6-.7z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="13" height="10"/><path d="M14 10h4l4 4v2h-8z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13v-1a9 9 0 0 1 18 0v1"/><rect x="2" y="13" width="5" height="7" rx="1.5"/><rect x="17" y="13" width="5" height="7" rx="1.5"/></svg>`,
  refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.3 6.4L3 16m0 5v-5h5"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8v8l-9 5-9-5V8l9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>`,
};

/* Back-compat aliases */
function productIcon(p) { return productArt(p); }
function categoryIcon(id) { return categoryArt(id); }
