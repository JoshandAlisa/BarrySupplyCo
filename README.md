# Barry Supply Co. website

Static design draft for Barry Supply Co. and the Barry & Field line. Plain HTML, CSS and JavaScript, no build step. Every file can be edited directly on GitHub.

## Pages

| File | Tab | Content |
|---|---|---|
| `index.html` | (logo) | Start page: hero, four entry tiles, most picked, kits, engraving teaser |
| `shop.html` | Shop | Everyday line with filters, plus kits |
| `field.html` | Barry & Field | Hunting line, field videos, Josh |
| `product.html#p3` | | Product page with size advisor and engraving preview. The part after `#` is the product id |
| `engraving.html` | Engraving | Engraving explained, live tag preview |
| `wholesale.html` | Wholesale | Stockist info and request form |
| `about.html` | About | Alisa, Josh, Barry |
| `contact.html` | Contact | Fit check form |
| `404.html` | | Shown for broken links |

Filters can be linked directly: `shop.html#collar`, `shop.html#leash`, `field.html#dummy`, `field.html#track`.

## Where things live

- `assets/js/data.js`: all products, prices, specs, size charts and warnings. Change a product here and every page updates.
- `assets/js/site.js`: cards, product page, size advisor, cart. The cart is kept in the browser and survives page changes.
- `assets/css/site.css`: all styles.
- `assets/img/`: own photos. Product photos are Unsplash links in `data.js` and placeholders only.
- `assets/video/`: the two field clips.

Header and footer are repeated in every HTML file. A change to the menu has to be made in all nine files.

## Putting it online with GitHub Pages

1. Create a new repository on GitHub, for example `barry-site`.
2. Upload the contents of this folder (not the folder itself) with "Add file > Upload files".
3. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After a minute the site runs at `https://<username>.github.io/barry-site/`.

### Own domain

1. Buy the domain (barrysupplyco.com was available on 10 Oct 2026).
2. Settings > Pages > Custom domain: enter `www.barrysupplyco.com`. GitHub creates a `CNAME` file.
3. At the domain registrar set the DNS records GitHub shows in its Pages docs ("Managing a custom domain"), then tick "Enforce HTTPS".

## Limits

GitHub Pages does not allow running an online shop or anything aimed mainly at commercial transactions. This draft has no real checkout, so it is fine as a preview. The live shop with payments belongs on Shopify (or similar), which then takes over the domain.

Before launch: replace placeholder photos, check every size chart against the supplier spec, write shipping, returns and privacy pages, and remove the demo notes in the footer and cart.

