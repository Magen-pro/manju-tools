/* =========================================================
   Manju Tools and Machines — Product Catalog (concept data)
   ========================================================= */

const BRANDS = [
  { id: "ingco", name: "INGCO" },
  { id: "jadever", name: "Jadever" },
  { id: "taparia", name: "Taparia" },
  { id: "stanley", name: "Stanley" },
];

const CATEGORIES = [
  {
    id: "cordless-power-tools",
    name: "Cordless Power Tools",
    icon: "drill",
    sub: [
      "Cordless Drill", "Cordless Impact Drill", "Cordless Impact Wrench",
      "Cordless Angle Grinder", "Cordless Circular Saw", "Cordless Reciprocating Saw",
      "Cordless Hammer Drill", "Cordless Screwdriver", "Cordless Multi Tool"
    ]
  },
  {
    id: "corded-power-tools",
    name: "Corded Power Tools",
    icon: "grinder",
    sub: [
      "Angle Grinder", "Rotary Hammer", "Circular Saw", "Jig Saw",
      "Bench Grinder", "Electric Planer", "Router", "Heat Gun"
    ]
  },
  {
    id: "hand-tools",
    name: "Hand Tools",
    icon: "wrench",
    sub: [
      "Wrenches & Spanners", "Pliers", "Screwdriver Sets", "Hammers",
      "Sockets & Ratchets", "Hacksaws", "Chisels", "Tool Kits"
    ]
  },
  {
    id: "measuring-tools",
    name: "Measuring & Marking",
    icon: "tape",
    sub: [
      "Measuring Tapes", "Spirit Levels", "Digital Calipers", "Laser Levels",
      "Try Squares", "Marking Gauges"
    ]
  },
  {
    id: "welding-soldering",
    name: "Welding & Soldering",
    icon: "weld",
    sub: [
      "ARC Welding Machines", "Inverter Welders", "Soldering Irons", "Welding Accessories"
    ]
  },
  {
    id: "safety-gear",
    name: "Safety & Workwear",
    icon: "safety",
    sub: [
      "Safety Gloves", "Safety Goggles", "Ear Protection", "Helmets", "Work Boots"
    ]
  },
  {
    id: "garden-outdoor",
    name: "Garden & Outdoor",
    icon: "trimmer",
    sub: [
      "Grass Trimmers", "Hedge Trimmers", "Chainsaws", "Blowers", "Pressure Washers"
    ]
  },
  {
    id: "combo-kits",
    name: "Combo Kits",
    icon: "combo",
    sub: [
      "Cordless Combo Kits", "Hand Tool Kits", "Workshop Bundles"
    ]
  },
];

// Deterministic-ish placeholder catalog. Prices in INR.
const PRODUCTS = [
  {
    id: "ingco-cid1802",
    name: "INGCO Cordless Impact Drill 20V CID1802",
    brand: "ingco",
    category: "cordless-power-tools",
    sub: "Cordless Impact Drill",
    price: 4290,
    mrp: 5490,
    rating: 4.4,
    reviews: 128,
    stock: 23,
    specs: { "Voltage": "20V Li-Ion", "Chuck Size": "13mm", "No Load Speed": "0–1800 RPM", "Max Torque": "45 Nm", "Battery": "2.0Ah × 1", "Weight": "1.6 kg" },
    badge: "Bestseller",
    desc: "A compact 20V impact drill built for daily site use — fast chuck changes, brushless-ready housing, and enough torque for masonry anchors and deck screws without dragging a cord across the floor."
  },
  {
    id: "ingco-cag2001",
    name: "INGCO Cordless Angle Grinder 20V CAG2001",
    brand: "ingco",
    category: "cordless-power-tools",
    sub: "Cordless Angle Grinder",
    price: 3850,
    mrp: 4990,
    rating: 4.2,
    reviews: 76,
    stock: 15,
    specs: { "Voltage": "20V Li-Ion", "Disc Size": "100mm", "No Load Speed": "9500 RPM", "Spindle Thread": "M10", "Battery": "Sold separately", "Weight": "1.4 kg" },
    desc: "Cordless freedom for grinding, cutting and cleanup work — the 100mm disc handles most fabrication and finishing jobs without hunting for an outlet."
  },
  {
    id: "ingco-cd2001",
    name: "INGCO Cordless Drill 20V CD2001",
    brand: "ingco",
    category: "cordless-power-tools",
    sub: "Cordless Drill",
    price: 3190,
    mrp: 3990,
    rating: 4.5,
    reviews: 204,
    stock: 41,
    specs: { "Voltage": "20V Li-Ion", "Chuck Size": "10mm", "No Load Speed": "0–1500 RPM", "Torque Settings": "18+1", "Battery": "1.5Ah × 1", "Weight": "1.2 kg" },
    badge: "Hot Deal",
    desc: "The everyday drill-driver — light enough for overhead work, with an 18-position clutch that keeps screws flush instead of stripped."
  },
  {
    id: "ingco-ccs1601",
    name: "INGCO Cordless Circular Saw 20V CCS1601",
    brand: "ingco",
    category: "cordless-power-tools",
    sub: "Cordless Circular Saw",
    price: 5490,
    mrp: 6990,
    rating: 4.1,
    reviews: 39,
    stock: 9,
    specs: { "Voltage": "20V Li-Ion", "Blade Size": "150mm", "No Load Speed": "3700 RPM", "Cutting Depth": "45mm @ 90°", "Battery": "Sold separately", "Weight": "2.3 kg" },
    desc: "Rip plywood and framing lumber on-site without dragging an extension cord. Bevel adjusts to 45° for angled cuts."
  },
  {
    id: "ingco-chd2001",
    name: "INGCO Cordless Hammer Drill 20V CHD2001",
    brand: "ingco",
    category: "cordless-power-tools",
    sub: "Cordless Hammer Drill",
    price: 4590,
    mrp: 5790,
    rating: 4.3,
    reviews: 58,
    stock: 18,
    specs: { "Voltage": "20V Li-Ion", "Chuck Size": "13mm", "Impact Rate": "0–24000 BPM", "Max Torque": "48 Nm", "Battery": "2.0Ah × 1", "Weight": "1.7 kg" },
    desc: "Switches between drill and hammer mode for masonry, brick and light concrete — one tool instead of two on the truck."
  },
  {
    id: "ingco-ag8508",
    name: "INGCO Angle Grinder 850W AG8508",
    brand: "ingco",
    category: "corded-power-tools",
    sub: "Angle Grinder",
    price: 1890,
    mrp: 2390,
    rating: 4.3,
    reviews: 312,
    stock: 64,
    specs: { "Power": "850W", "Disc Size": "100mm", "No Load Speed": "11000 RPM", "Spindle Thread": "M10", "Weight": "1.8 kg" },
    badge: "Bestseller",
    desc: "The workshop standard — steady power, low vibration handle, and a 100mm disc size that covers most cutting and grinding jobs on site."
  },
  {
    id: "ingco-rh2202",
    name: "INGCO Rotary Hammer 800W RH2202",
    brand: "ingco",
    category: "corded-power-tools",
    sub: "Rotary Hammer",
    price: 5290,
    mrp: 6490,
    rating: 4.0,
    reviews: 41,
    stock: 12,
    specs: { "Power": "800W", "Impact Energy": "2.2 J", "Chuck": "SDS-Plus", "No Load Speed": "0–1100 RPM", "Weight": "2.9 kg" },
    desc: "SDS-Plus chuck for fast bit changes, built for repeated concrete drilling without overheating."
  },
  {
    id: "ingco-cs1855",
    name: "INGCO Circular Saw 1855W CS1855",
    brand: "ingco",
    category: "corded-power-tools",
    sub: "Circular Saw",
    price: 3690,
    mrp: 4590,
    rating: 4.2,
    reviews: 27,
    stock: 20,
    specs: { "Power": "1855W", "Blade Size": "185mm", "No Load Speed": "5500 RPM", "Cutting Depth": "65mm @ 90°", "Weight": "3.6 kg" },
    desc: "Full-size corded saw for framing and sheet stock where you need sustained power over long cuts."
  },
  {
    id: "taparia-1102n",
    name: "Taparia Combination Plier 1102N 200mm",
    brand: "taparia",
    category: "hand-tools",
    sub: "Pliers",
    price: 245,
    mrp: 310,
    rating: 4.6,
    reviews: 540,
    stock: 130,
    specs: { "Length": "200mm", "Material": "Chrome Vanadium Steel", "Finish": "Nickel Chrome Plated", "Grip": "Bi-material" },
    badge: "Bestseller",
    desc: "The plier that's in every Indian toolbox for a reason — precise jaws, comfortable grip, and a bite that holds under load."
  },
  {
    id: "taparia-260",
    name: "Taparia Adjustable Wrench 260mm 1172-10",
    brand: "taparia",
    category: "hand-tools",
    sub: "Wrenches & Spanners",
    price: 385,
    mrp: 460,
    rating: 4.5,
    reviews: 289,
    stock: 87,
    specs: { "Length": "260mm (10\")", "Jaw Capacity": "30mm", "Material": "Drop Forged Steel", "Finish": "Chrome Plated" },
    desc: "Smooth-adjusting jaw with a laser-marked scale — the wrench that gets reached for first."
  },
  {
    id: "taparia-screwdriver-set",
    name: "Taparia 8-Piece Screwdriver Set SDS-801",
    brand: "taparia",
    category: "hand-tools",
    sub: "Screwdriver Sets",
    price: 690,
    mrp: 890,
    rating: 4.4,
    reviews: 165,
    stock: 52,
    specs: { "Pieces": "8", "Tip Types": "Slotted, Phillips", "Handle": "Insulated up to 1000V", "Material": "CRV Steel" },
    desc: "Insulated handles rated to 1000V, a magnetic tip that saves dropped screws, and a set spread that covers most electrical and general work."
  },
  {
    id: "taparia-hammer",
    name: "Taparia Claw Hammer 450g WH 450",
    brand: "taparia",
    category: "hand-tools",
    sub: "Hammers",
    price: 420,
    mrp: 520,
    rating: 4.3,
    reviews: 98,
    stock: 44,
    specs: { "Weight": "450g", "Handle": "Fibreglass", "Head Material": "Drop Forged Steel", "Finish": "Polished" },
    desc: "Fibreglass handle absorbs shock on repeated strikes — built for framing and demolition, not just picture hooks."
  },
  {
    id: "stanley-tape-5m",
    name: "Stanley PowerLock Measuring Tape 5m",
    brand: "stanley",
    category: "measuring-tools",
    sub: "Measuring Tapes",
    price: 340,
    mrp: 420,
    rating: 4.7,
    reviews: 890,
    stock: 210,
    specs: { "Length": "5m", "Blade Width": "19mm", "Case": "Impact-resistant ABS", "Standout": "2.1m" },
    badge: "Bestseller",
    desc: "The tape every trade knows — a blade standout long enough to measure alone, with a lock that actually holds."
  },
  {
    id: "stanley-level",
    name: "Stanley Spirit Level 600mm",
    brand: "stanley",
    category: "measuring-tools",
    sub: "Spirit Levels",
    price: 780,
    mrp: 990,
    rating: 4.5,
    reviews: 156,
    stock: 38,
    specs: { "Length": "600mm", "Vials": "3 (level, plumb, 45°)", "Frame": "Aluminium I-Beam", "Accuracy": "±0.5mm/m" },
    desc: "An I-beam frame that resists twisting on the job, with three vials for level, plumb and 45° reference lines."
  },
  {
    id: "stanley-hacksaw",
    name: "Stanley Hacksaw Frame 300mm",
    brand: "stanley",
    category: "hand-tools",
    sub: "Hacksaws",
    price: 290,
    mrp: 360,
    rating: 4.4,
    reviews: 112,
    stock: 66,
    specs: { "Blade Length": "300mm (12\")", "Frame": "Tubular Steel", "Tension": "High-tension adjustable", "Grip": "Soft-touch" },
    desc: "Adjustable tension keeps the blade straight through the cut, and the frame folds flat for storage."
  },
  {
    id: "jadever-scale",
    name: "Jadever Digital Platform Scale JWI-600",
    brand: "jadever",
    category: "measuring-tools",
    sub: "Digital Calipers",
    price: 8900,
    mrp: 10900,
    rating: 4.2,
    reviews: 19,
    stock: 6,
    specs: { "Capacity": "600kg", "Readability": "50g", "Platform": "600×450mm", "Display": "LED Digital" },
    desc: "Workshop-grade platform scale for material and shipment weighing — legal-for-trade accuracy in a rugged steel body."
  },
  {
    id: "jadever-caliper",
    name: "Jadever Digital Vernier Caliper 150mm",
    brand: "jadever",
    category: "measuring-tools",
    sub: "Digital Calipers",
    price: 1250,
    mrp: 1590,
    rating: 4.3,
    reviews: 47,
    stock: 29,
    specs: { "Range": "0–150mm", "Resolution": "0.01mm", "Display": "LCD Digital", "Material": "Stainless Steel" },
    badge: "Hot Deal",
    desc: "Digital readout for fast, precise measurements — stainless jaws stay accurate under daily shop use."
  },
  {
    id: "ingco-welder-200",
    name: "INGCO Inverter ARC Welder 200A IW20001",
    brand: "ingco",
    category: "welding-soldering",
    sub: "Inverter Welders",
    price: 6490,
    mrp: 7990,
    rating: 4.1,
    reviews: 33,
    stock: 14,
    specs: { "Output": "20–200A", "Input": "220–240V", "Electrode Size": "1.6–4.0mm", "Duty Cycle": "60% @ 160A", "Weight": "4.2 kg" },
    desc: "Portable inverter welder light enough to carry to the job — stable arc across the full amperage range."
  },
  {
    id: "ingco-solder-iron",
    name: "INGCO Soldering Iron 60W SI60068",
    brand: "ingco",
    category: "welding-soldering",
    sub: "Soldering Irons",
    price: 320,
    mrp: 420,
    rating: 4.2,
    reviews: 71,
    stock: 55,
    specs: { "Power": "60W", "Tip": "Replaceable copper", "Handle": "Heat-insulated", "Cable": "1.2m" },
    desc: "A reliable everyday soldering iron for electrical and light electronics repair work."
  },
  {
    id: "ingco-gloves",
    name: "INGCO Safety Gloves Cut-Resistant HGCG01",
    brand: "ingco",
    category: "safety-gear",
    sub: "Safety Gloves",
    price: 180,
    mrp: 240,
    rating: 4.5,
    reviews: 203,
    stock: 180,
    specs: { "Material": "HPPE Knit + Nitrile Coat", "Cut Level": "Level 5", "Sizes": "M / L / XL", "Grip": "Nitrile palm coating" },
    desc: "Level 5 cut resistance with a nitrile-coated palm for grip on metal sheet, glass edges and fabrication work."
  },
  {
    id: "ingco-goggles",
    name: "INGCO Safety Goggles Clear HSG02",
    brand: "ingco",
    category: "safety-gear",
    sub: "Safety Goggles",
    price: 150,
    mrp: 199,
    rating: 4.4,
    reviews: 118,
    stock: 220,
    specs: { "Lens": "Polycarbonate, anti-fog", "Frame": "Adjustable strap", "Standard": "ANSI Z87.1" },
    desc: "Anti-fog polycarbonate lens with an adjustable strap — light enough to wear through a full shift."
  },
  {
    id: "ingco-trimmer",
    name: "INGCO Cordless Grass Trimmer 20V CGTLI2001",
    brand: "ingco",
    category: "garden-outdoor",
    sub: "Grass Trimmers",
    price: 3290,
    mrp: 4190,
    rating: 4.0,
    reviews: 45,
    stock: 21,
    specs: { "Voltage": "20V Li-Ion", "Cutting Width": "230mm", "No Load Speed": "8000 RPM", "Battery": "Sold separately", "Weight": "2.1 kg" },
    desc: "Cordless trimming for edges and tight corners a mower can't reach — no cord to manage around flower beds."
  },
  {
    id: "ingco-blower",
    name: "INGCO Cordless Blower 20V CGBLI2001",
    brand: "ingco",
    category: "garden-outdoor",
    sub: "Blowers",
    price: 2890,
    mrp: 3590,
    rating: 4.1,
    reviews: 22,
    stock: 17,
    specs: { "Voltage": "20V Li-Ion", "Air Volume": "2.5 m³/min", "Battery": "Sold separately", "Weight": "1.5 kg" },
    desc: "Clears clippings, sawdust and site debris fast — compact enough for one-handed use."
  },
  {
    id: "ingco-combo-6pc",
    name: "INGCO 6-Piece Cordless Combo Kit CKB0605",
    brand: "ingco",
    category: "combo-kits",
    sub: "Cordless Combo Kits",
    price: 12990,
    mrp: 16990,
    rating: 4.3,
    reviews: 61,
    stock: 11,
    specs: { "Includes": "Drill, Impact Wrench, Grinder, Saw, Trimmer, Light", "Voltage": "20V shared battery platform", "Batteries": "2× 2.0Ah + charger", "Case": "Hard carry case" },
    badge: "Super Value Combo",
    desc: "Six tools on one battery platform — buy the kit once and every future tool on the same platform skips the battery cost."
  },
  {
    id: "taparia-toolkit-45",
    name: "Taparia 45-Piece Hand Tool Kit TK-45",
    brand: "taparia",
    category: "combo-kits",
    sub: "Hand Tool Kits",
    price: 3450,
    mrp: 4290,
    rating: 4.5,
    reviews: 88,
    stock: 24,
    specs: { "Pieces": "45", "Case": "Blow-moulded carry case", "Includes": "Pliers, spanners, screwdrivers, sockets, hammer, tape" },
    badge: "Super Value Combo",
    desc: "A complete general-purpose kit in one case — the set most workshops reach for when someone asks for 'the toolbox.'"
  },
];

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getCategory(id) {
  return CATEGORIES.find(c => c.id === id);
}

function getBrand(id) {
  return BRANDS.find(b => b.id === id);
}

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function discountPct(price, mrp) {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}
