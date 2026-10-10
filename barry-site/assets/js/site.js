/* Barry Supply Co. site script: product cards, product page, size advisor, cart. */
const ENGRAVE = 12;
const FREE_AT = 75;
const PAGE = document.body.dataset.page;

const ALL = [...SUPPLY.map(p => ({...p, brand:'supply'})), ...FIELD.map(p => ({...p, brand:'field'}))];
const findP = id => ALL.find(p => p.id === id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ---------- storage (cart survives page changes) ---------- */
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};

/* ---------- product media ---------- */
function media(p, size){
  if(!p.img) return ART[p.art];
  const src = size === 'large' ? p.img.replace('w=800', 'w=1400') : p.img;
  return `<img class="ph" src="${src}" alt="${esc(p.name)}" loading="lazy" data-art="${p.art}">`;
}
/* blocked or missing photo falls back to the drawing */
document.addEventListener('error', e => {
  const el = e.target;
  if(el.tagName === 'IMG' && el.dataset.art){ el.outerHTML = ART[el.dataset.art]; }
}, true);

/* ---------- cards ---------- */
const picked = {};
const engraved = {};

function card(p){
  const url = `product.html#${p.id}`;
  const opts = p.opts ? `<div class="opts" data-opts="${p.id}">${p.opts.map((o,i) =>
    `<button class="opt${i===0?' on':''}" onclick="pickOpt('${p.id}',this)">${o}</button>`).join('')}</div>` : '';
  const flag = p.flag ? `<span class="flag">${p.flag}</span>` : '';
  const perso = p.perso ? `<div class="perso-row"><a class="perso" href="${url}">Add engraving &nbsp;+$${ENGRAVE}</a></div>` : '';
  return `<article class="prod" data-cat="${p.cat}">
    <div class="prod-media">
      <a class="media-link" href="${url}" aria-label="${esc(p.name)}" tabindex="-1">${media(p)}</a>${flag}
      <div class="quick"><button class="btn" onclick="addFromCard('${p.id}')">Add to cart</button></div>
    </div>
    <div class="prod-body">
      <div class="prod-top"><h3><a href="${url}">${p.name}</a></h3><span class="prod-price">$${p.price}</span></div>
      <p class="prod-desc">${p.desc}</p>
      <p class="spec">${p.spec}</p>
      ${opts}
      ${perso}
    </div>
  </article>`;
}
function pickOpt(id, btn){
  btn.parentElement.querySelectorAll('.opt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  picked[id] = btn.textContent;
}
function addFromCard(id){
  const p = findP(id);
  const variant = picked[id] || (p.opts ? p.opts[0] : '');
  addToCart(id + (variant ? '-' + variant : ''), p.name, p.price, p.brand, variant);
}

function chips(list, target, gridId){
  const box = document.getElementById(target);
  if(!box) return;
  box.innerHTML = list.map((c,i) =>
    `<button class="chip${i===0?' on':''}" data-k="${c.k}" onclick="filterGrid('${gridId}','${c.k}',this)">${c.label}</button>`).join('');
}
function filterGrid(gridId, key, btn){
  btn.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(gridId).querySelectorAll('.prod').forEach(el => {
    el.hidden = !(key === 'all' || el.dataset.cat === key);
  });
}
function hashFilter(filtersId){
  const k = location.hash.slice(1);
  if(!k) return;
  const chip = document.querySelector(`#${filtersId} .chip[data-k="${k}"]`);
  if(chip){ chip.click(); }
}

const sg = document.getElementById('supply-grid');
if(sg){
  sg.innerHTML = SUPPLY.map(p => card({...p, brand:'supply'})).join('');
  chips(CATS, 'filters', 'supply-grid');
  hashFilter('filters');
  addEventListener('hashchange', () => hashFilter('filters'));
}
const fg = document.getElementById('field-grid');
if(fg){
  fg.innerHTML = FIELD.map(p => card({...p, brand:'field'})).join('');
  chips(FCATS, 'field-filters', 'field-grid');
  hashFilter('field-filters');
  addEventListener('hashchange', () => hashFilter('field-filters'));
}
const feat = document.getElementById('featured-grid');
if(feat){ feat.innerHTML = feat.dataset.ids.split(',').map(id => card(findP(id))).join(''); }

/* ---------- product page ---------- */
let pdp = null;

function renderPDP(){
  const root = document.getElementById('pdp-root');
  if(!root) return;
  const p = findP(location.hash.slice(1));
  if(!p){
    root.innerHTML = `<h1 class="h-l">Product not found</h1><p class="lede" style="margin-top:14px">This item is not in the catalog. <a href="shop.html">Back to the shop</a>.</p>`;
    return;
  }
  document.body.dataset.mode = p.brand === 'field' ? 'field' : 'everyday';
  document.title = `${p.name} · ${p.brand === 'field' ? 'Barry & Field' : 'Barry Supply Co.'}`;
  pdp = {p, opt: p.opts ? p.opts[0] : '', eng:false, text:''};
  const f = FIT[p.id], x = EXTRA[p.id] || {};
  const line = p.brand === 'field' ? ['field.html','Barry &amp; Field'] : ['shop.html','Shop'];
  document.getElementById('crumbs').innerHTML = `<a href="${line[0]}">${line[1]}</a><span>/</span><span>${p.name}</span>`;
  document.querySelectorAll('.nav-links a, .nav-scroll a').forEach(a => {
    if(a.getAttribute('href') === line[0]) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
  const sizeTable = f ? `<table class="sz"><thead><tr><th>Size</th><th>${f.measure==='neck'?'Neck':'Chest'} (in)</th></tr></thead><tbody>${
      Object.entries(f.sizes).map(([k,[a,b]]) => `<tr><td>${k}</td><td>${a} to ${b}</td></tr>`).join('')}</tbody></table>` : '';
  const extraRows = x.rows ? `<table class="sz"><tbody>${x.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</tbody></table>` : '';
  root.className = 'pdp-root' + (p.brand === 'field' ? ' is-field' : '');
  root.innerHTML = `
    <div class="pdp-media">${media(p,'large')}${p.flag?`<span class="flag">${p.flag}</span>`:''}</div>
    <div class="pdp-body">
      <div class="label acc">${p.brand==='field'?'Barry &amp; Field':'Barry Supply Co.'}</div>
      <h1 class="h-l">${p.name}</h1>
      <div class="pdp-price" id="pdp-price">$${p.price}</div>
      <p class="pdp-desc">${p.desc}</p>
      <p class="spec">${p.spec}</p>
      ${p.opts ? `<div class="pdp-sec"><div class="pdp-h">${f ? 'Size' : 'Option'}</div><div class="opts" id="pdp-opts">${
        p.opts.map((o,i) => `<button class="opt${i===0?' on':''}" onclick="pdpPick(this)">${o}</button>`).join('')}</div></div>` : ''}
      ${f ? `<div class="advisor">
        <div class="pdp-h">Find the size</div>
        <p>${f.how}</p>
        <div class="adv-row">
          <label for="adv-in">${f.measure==='neck'?'Neck':'Chest'}, inches</label>
          <input id="adv-in" type="number" inputmode="decimal" min="4" max="60" step="0.5" placeholder="e.g. ${f.measure==='neck'?'15':'26'}" oninput="advise()">
          <div class="adv-out" id="adv-out" aria-live="polite">Type a measurement and we pick the size.</div>
        </div>
        <details><summary>Size chart</summary>${sizeTable}</details>
      </div>` : ''}
      ${p.perso ? `<div class="pdp-sec">
        <button class="perso" id="pdp-perso" onclick="pdpEng()" aria-expanded="false">Add engraving &nbsp;+$${ENGRAVE}</button>
        <div class="eng-fields" id="eng-fields" hidden>
          <label for="eng-text">Name or text, up to 22 characters</label>
          <input id="eng-text" maxlength="22" autocomplete="off" placeholder="Barry" oninput="pdpText(this)">
          <div class="eng-prev"><b id="eng-prev">Barry</b><span>Engraved items are made for your dog and can't be returned. Check the size first.</span></div>
        </div>
      </div>` : ''}
      ${x.warn ? `<p class="pdp-warn">${x.warn}</p>` : ''}
      ${extraRows ? `<div class="pdp-sec"><div class="pdp-h">Fit</div>${extraRows}</div>` : ''}
      <div class="pdp-buy"><button class="btn acc wide" id="pdp-add" onclick="pdpAdd()">Add to cart · $${p.price}</button></div>
      <details class="pdp-more"><summary>Shipping</summary><p>Ships within 2 business days from Northern Colorado. Engraved orders take one extra business day. Free shipping over $${FREE_AT}.</p></details>
      <details class="pdp-more"><summary>Questions on fit</summary><p>Send your dog's measurements and a photo through the <a href="contact.html">fit check</a> and Alisa tells you what to order.</p></details>
    </div>`;
  const others = (p.brand === 'field' ? FIELD : SUPPLY).filter(o => o.id !== p.id).slice(0, 4);
  document.getElementById('related').innerHTML = `<div class="related"><h2 class="h-m">More from ${p.brand==='field'?'Barry &amp; Field':'the everyday line'}</h2><div class="grid">${others.map(o => card({...o, brand:p.brand})).join('')}</div></div>`;
  scrollTo(0, 0);
}
function pdpPick(btn){
  btn.parentElement.querySelectorAll('.opt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  pdp.opt = btn.textContent;
}
function pdpEng(){
  pdp.eng = !pdp.eng;
  const b = document.getElementById('pdp-perso');
  b.classList.toggle('on', pdp.eng);
  b.setAttribute('aria-expanded', pdp.eng);
  b.innerHTML = `${pdp.eng ? 'Engraving added' : 'Add engraving'} &nbsp;+$${ENGRAVE}`;
  document.getElementById('eng-fields').hidden = !pdp.eng;
  if(pdp.eng) document.getElementById('eng-text').focus();
  pdpPrice();
}
function pdpText(el){
  pdp.text = el.value;
  el.classList.remove('err');
  document.getElementById('eng-prev').textContent = el.value.trim() || 'Barry';
}
function pdpPrice(){
  const total = pdp.p.price + (pdp.eng ? ENGRAVE : 0);
  document.getElementById('pdp-price').textContent = '$' + total;
  document.getElementById('pdp-add').textContent = 'Add to cart · $' + total;
}
function advise(){
  const f = FIT[pdp.p.id], v = parseFloat(document.getElementById('adv-in').value), out = document.getElementById('adv-out');
  if(!v){ out.textContent = 'Type a measurement and we pick the size.'; out.className = 'adv-out'; return; }
  const ent = Object.entries(f.sizes), hits = ent.filter(([,[a,b]]) => v >= a && v <= b);
  let pick = null, note = '';
  if(hits.length === 1){ pick = hits[0][0]; note = 'Fits inside the range.'; }
  else if(hits.length > 1){
    if(f.between === 'up'){ pick = hits[hits.length-1][0]; note = 'Between two sizes. Take the larger one, the straps adjust down.'; }
    else { pick = hits.map(([k,[a,b]]) => [k, Math.abs(v-(a+b)/2)]).sort((a,b) => a[1]-b[1])[0][0]; note = 'Between two sizes. This one keeps the buckle in the middle holes.'; }
  }
  if(!pick){
    out.className = 'adv-out miss';
    out.innerHTML = (v < ent[0][1][0] ? 'Smaller than our smallest size.' : 'Larger than our biggest size.') + ' Send Alisa a photo through the <a href="contact.html">fit check</a> before ordering.';
    return;
  }
  out.className = 'adv-out hit';
  out.innerHTML = `<b>Size ${pick}</b> ${note}`;
  const btn = [...document.querySelectorAll('#pdp-opts .opt')].find(b => b.textContent === pick);
  if(btn) pdpPick(btn);
}
function pdpAdd(){
  const p = pdp.p;
  if(pdp.eng && !pdp.text.trim()){
    const t = document.getElementById('eng-text'); t.focus(); t.classList.add('err');
    showToast('Add the text you want engraved'); return;
  }
  let variant = pdp.opt || '', key = p.id + (variant ? '-' + variant : ''), price = p.price;
  if(pdp.eng){ price += ENGRAVE; variant = (variant ? variant + ' · ' : '') + 'Engraved: ' + pdp.text.trim(); key += '-eng-' + pdp.text.trim(); }
  addToCart(key, p.name, price, p.brand, variant);
  toggleCart(true);
}
if(document.getElementById('pdp-root')){ renderPDP(); addEventListener('hashchange', renderPDP); }

/* ---------- engraving page preview ---------- */
[['try-name','tag-name','Barry'],['try-num','tag-num','+1 970 555 0132']].forEach(([i,o,d]) => {
  const el = document.getElementById(i), out = document.getElementById(o);
  if(el && out) el.addEventListener('input', () => { out.textContent = el.value.trim() || d; });
});

/* ---------- cart ---------- */
const cart = store.get('barry-cart', {});
function addToCart(key, name, price, brand, variant){
  if(cart[key]) cart[key].qty++; else cart[key] = {name, price, brand, variant, qty:1};
  saveCart();
  showToast(name + ' added to cart');
}
function changeQty(key, delta){
  if(!cart[key]) return;
  cart[key].qty += delta;
  if(cart[key].qty <= 0) delete cart[key];
  saveCart();
}
function saveCart(){ store.set('barry-cart', cart); renderCart(); }
function renderCart(){
  const box = document.getElementById('cart-items');
  const keys = Object.keys(cart);
  let total = 0, count = 0;
  if(!keys.length){
    box.innerHTML = '<p class="empty">Nothing in here yet. Start with a leash.</p>';
  } else {
    box.innerHTML = keys.map(k => {
      const it = cart[k];
      total += it.price * it.qty; count += it.qty;
      const label = (it.brand === 'field' ? 'Barry &amp; Field' : 'Barry Supply Co.') + (it.variant ? ' · ' + esc(it.variant) : '');
      return `<div class="ci">
        <div class="name">${esc(it.name)}</div>
        <div class="p">$${it.price * it.qty}</div>
        <div class="meta${it.brand==='field'?' f':''}">${label}</div>
        <div class="qty">
          <button onclick="changeQty('${esc(k)}',-1)" aria-label="Remove one">&minus;</button>
          <span>${it.qty}</span>
          <button onclick="changeQty('${esc(k)}',1)" aria-label="Add one">+</button>
        </div>
      </div>`;
    }).join('');
  }
  document.getElementById('cart-total').textContent = '$' + total;
  document.getElementById('cart-count').textContent = count;
  document.getElementById('ship-fill').style.width = Math.min(100, Math.round(total / FREE_AT * 100)) + '%';
  document.getElementById('ship-msg').textContent = total >= FREE_AT ? 'Free shipping unlocked' : '$' + (FREE_AT - total) + ' to free shipping';
}
function toggleCart(open){
  document.body.classList.toggle('cart-open', open === true ? true : undefined);
}
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1900);
}
function fakeCheckout(btn){ btn.textContent = 'Order placed (demo)'; setTimeout(() => { btn.textContent = 'Checkout'; }, 2500); }
function fakeTrade(btn){ btn.textContent = 'Request sent (demo)'; setTimeout(() => { btn.textContent = 'Request the wholesale sheet'; }, 3000); }
function fakeSubmit(btn){ btn.textContent = 'Sent. Alisa will reply (demo)'; setTimeout(() => { btn.textContent = 'Send it over'; }, 3000); }
addEventListener('keydown', e => { if(e.key === 'Escape') document.body.classList.remove('cart-open'); });
addEventListener('storage', e => { if(e.key === 'barry-cart'){ Object.keys(cart).forEach(k => delete cart[k]); Object.assign(cart, store.get('barry-cart', {})); renderCart(); } });
renderCart();

/* ---------- header and reveal ---------- */
const hdr = document.getElementById('site-header');
addEventListener('scroll', () => hdr.classList.toggle('stuck', scrollY > 8), {passive:true});
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, {threshold:.08, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
}
setTimeout(() => document.querySelectorAll('.rv').forEach(el => el.classList.add('in')), 1200);
