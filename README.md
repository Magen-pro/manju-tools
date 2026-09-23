# Manju Tools and Machines — E-Commerce Concept

A static, front-end-only concept site for Manju Tools and Machines.
Built with plain HTML, CSS and vanilla JavaScript — no build step, no framework,
no backend. Deploy it by dropping the folder on Vercel / Netlify / GitHub Pages.

---

## Pages

| File | What it is |
|---|---|
| `index.html` | Homepage — hero, brand strip, category grid, hot deals, combo promos, bestsellers |
| `category.html` | Shop / listing page — filters, sort, search, mobile filter drawer |
| `product.html` | Product detail — gallery, sticky buy-box, specs, reviews, related products |
| `cart.html` | Cart — quantity steppers, live totals, free-shipping threshold |
| `wishlist.html` | Saved products |

Pages link to each other with query strings:

- `category.html?cat=hand-tools`
- `category.html?cat=hand-tools&sub=Pliers`
- `category.html?brand=taparia`
- `category.html?q=drill`
- `category.html?deal=hot`
- `product.html?id=ingco-cid1802`

---

## File structure

```
manju-tools/
├── index.html
├── category.html
├── product.html
├── cart.html
├── wishlist.html
├── css/
│   ├── base.css         Design tokens, buttons, typography, toast
│   ├── layout.css       Header, mega-menu, mobile drawer, footer
│   └── components.css   Product cards, buy-box, filters, cart lines
├── js/
│   ├── data.js          Product catalog, categories, brands + helpers
│   ├── icons.js         Inline SVG icon set + product/category icon mapping
│   ├── store.js         Cart & wishlist state (localStorage) + toasts
│   └── ui.js            Shared rendering: product cards, mega-menu, nav
└── images/
    ├── logo-mark.png            400px, used by the site
    ├── logo-mark-original.png   Full-resolution source
    ├── logo-full.png            Full logo (original)
    └── logo-full-web.png        800px version
```

Script load order matters — keep it as-is on every page:

```html
<script src="js/data.js"></script>
<script src="js/icons.js"></script>
<script src="js/store.js"></script>
<script src="js/ui.js"></script>
```

---

## Design tokens

All colours live in `css/base.css` under `:root`. Change them there and
the whole site follows.

| Token | Value | Used for |
|---|---|---|
| `--gold` | `#F5B301` | Brand accent, primary buttons, badges |
| `--gold-dark` | `#C98E00` | Hover, links, focus ring |
| `--ink` | `#0B0B0C` | Header bar, footer, dark buttons |
| `--paper` | `#F7F6F3` | Page background |
| `--green` | `#1E8E3E` | In-stock, ratings |
| `--red` | `#C4342B` | Remove, wishlist active |

Typefaces: **Archivo** (headings) + **Inter** (body), loaded from Google Fonts.

---

## Adding or editing products

Everything is in `js/data.js`. Add an object to the `PRODUCTS` array:

```js
{
  id: "ingco-xyz123",              // unique, used in the URL
  name: "INGCO Cordless Drill 20V XYZ123",
  brand: "ingco",                  // must match an id in BRANDS
  category: "cordless-power-tools",// must match an id in CATEGORIES
  sub: "Cordless Drill",           // must exist in that category's sub[] array
  price: 3190,
  mrp: 3990,                       // optional — drives the "% off" badge
  rating: 4.5,
  reviews: 204,
  stock: 41,                       // 0 = Out of Stock, <=15 = "Only N left"
  badge: "Hot Deal",               // optional — "Bestseller" | "Hot Deal" | "Super Value Combo"
  specs: { "Voltage": "20V Li-Ion", "Chuck Size": "10mm" },
  desc: "One or two sentences shown on the product page."
}
```

Categories are edited in the same file in the `CATEGORIES` array. Adding a
category automatically adds it to the mega-menu, the mobile drawer, the
homepage category grid, the filter sidebar and the footer — nothing else to update.

### Product images

Products currently render an inline SVG icon instead of a photo, so the concept
has no missing-image gaps. To switch to real photos:

1. Drop photos in `images/products/`.
2. Add `image: "images/products/xyz123.jpg"` to the product object.
3. In `js/ui.js` (`productCardHTML`) and `product.html`, swap `productIcon(p)`
   for `<img src="${p.image}" alt="${p.name}">`.

---

## What works (and what doesn't)

Working, entirely client-side:

- Add to cart, change quantity, remove, live totals, free-shipping threshold
- Wishlist toggle from any product card or the product page
- Cart and wishlist persist across pages and reloads (`localStorage`)
- Category / brand / price / in-stock filters, combinable, with removable chips
- Sort by price, rating, discount
- Search across product name, sub-category and brand
- Mega-menu, mobile drawer, mobile filter drawer
- Keyboard focus states, reduced-motion support, responsive down to small phones

Not built (needs a backend for production):

- Checkout and payments
- Real accounts / login
- Live inventory
- Order tracking

The "Proceed to Checkout" button shows a notice instead of proceeding.

---

## Deploying

```bash
git init
git add .
git commit -m "Manju Tools concept"
git remote add origin <your-repo-url>
git push -u origin main
```

Then import the repo on Vercel. No build command, no output directory —
it is a static site. Or drag the folder onto Vercel / Netlify directly.

---

## Note

This is a design concept for client review. Product names, specs, prices,
ratings and reviews are realistic placeholders, not live catalogue data.
Replace them with real data from the shop before going to production.
