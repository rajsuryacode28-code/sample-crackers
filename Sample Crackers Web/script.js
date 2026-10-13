/* =========================================================
   DIYA BURST CRACKERS — Site logic
   Edit the CONFIG object below to customise the business.
   ========================================================= */

/* ---------------- 1. CONFIGURATION ---------------- */
const CONFIG = {
  // Business identity
  business: {
    name: 'Diya Burst Crackers',
    shortName: 'Diya Burst',
    tagline: 'Crackers & Fireworks',
    foundedYear: 2010,
    yearsOfExperience: 15,
    city: 'Sivakasi, Tamil Nadu',
    address: '123, Main Bazaar Road, Sivakasi, Tamil Nadu 626123, India',
    phone: '+91 98765 43210',
    phoneDisplay: '+91 98765 43210',
    email: 'hello@diyaburst.example',
    hours: 'Mon – Sun · 9:00 AM – 10:00 PM',
    // WhatsApp number in international format, digits only (no + or spaces)
    whatsapp: '919876543210',
    // Social links (set to null or '' to hide)
    socials: {
      facebook: 'https://facebook.com/',
      instagram: 'https://instagram.com/',
      youtube: 'https://youtube.com/',
      twitter: 'https://twitter.com/',
    },
    // Legal pages (set to real URLs when available)
    privacyUrl: '#',
    termsUrl: '#',
  },

  // Categories — edit name, icon, description, gradient
  categories: [
    {
      id: 'flower-pots',
      name: 'Flower Pots',
      icon: '🌸',
      description: 'Colourful ground bloom effects for a gentle festive start.',
      gradient: 'linear-gradient(135deg, rgba(245,166,35,.22), rgba(214,51,108,.22))',
    },
    {
      id: 'sparklers',
      name: 'Sparklers',
      icon: '✨',
      description: 'Family-friendly hand-held sparklers in assorted colours.',
      gradient: 'linear-gradient(135deg, rgba(255,209,102,.25), rgba(245,166,35,.2))',
    },
    {
      id: 'ground-chakkars',
      name: 'Ground Chakkars',
      icon: '🌀',
      description: 'Spinning wheels that light up the ground with vibrant trails.',
      gradient: 'linear-gradient(135deg, rgba(107,47,179,.25), rgba(214,51,108,.2))',
    },
    {
      id: 'sky-shots',
      name: 'Sky Shots',
      icon: '🎆',
      description: 'Multi-shot aerial fireworks for a spectacular sky display.',
      gradient: 'linear-gradient(135deg, rgba(214,51,108,.25), rgba(107,47,179,.22))',
    },
    {
      id: 'fancy-fountains',
      name: 'Fancy Fountains',
      icon: '⛲',
      description: 'Tall sparkling fountains with colour-changing effects.',
      gradient: 'linear-gradient(135deg, rgba(37,211,102,.2), rgba(107,47,179,.22))',
    },
    {
      id: 'gift-boxes',
      name: 'Gift Boxes & Combos',
      icon: '🎁',
      description: 'Curated Diwali combo packs for the whole family.',
      gradient: 'linear-gradient(135deg, rgba(245,122,31,.25), rgba(255,209,102,.22))',
    },
  ],

  // Sample products — EDIT FREELY.
  // image: URL or local path. Leave empty to use the emoji placeholder.
  // discountPercent: set only when a real discount applies.
  // stock: number (or 'low' / 'out')
  PRODUCTS: [
    {
      id: 'p1',
      name: 'Royal Sky Shot 50mm',
      category: 'sky-shots',
      price: 1299,
      oldPrice: 1499,
      discountPercent: 13,
      description: '25-shot multi-colour aerial cake with peonies and crackling stars.',
      image: '',
      emoji: '🎆',
      stock: 18,
      featured: true,
    },
    {
      id: 'p2',
      name: 'Golden Sparkler Pack (10 pcs)',
      category: 'sparklers',
      price: 149,
      oldPrice: null,
      discountPercent: 0,
      description: 'Long-burning golden sparklers — safe and family-friendly.',
      image: '',
      emoji: '✨',
      stock: 120,
      featured: true,
    },
    {
      id: 'p3',
      name: 'Colour Flower Pot (Pack of 5)',
      category: 'flower-pots',
      price: 249,
      oldPrice: 299,
      discountPercent: 17,
      description: 'Five assorted colour-changing flower pots for your garden.',
      image: '',
      emoji: '🌸',
      stock: 'low',
      featured: true,
    },
    {
      id: 'p4',
      name: 'Thunder Ground Chakkar (10 pcs)',
      category: 'ground-chakkars',
      price: 180,
      oldPrice: null,
      discountPercent: 0,
      description: 'Fast-spinning ground chakkars with bright colour trails.',
      image: '',
      emoji: '🌀',
      stock: 60,
      featured: true,
    },
    {
      id: 'p5',
      name: 'Magic Fancy Fountain',
      category: 'fancy-fountains',
      price: 549,
      oldPrice: 649,
      discountPercent: 15,
      description: '1.5-metre sparkling fountain with silver and gold effects.',
      image: '',
      emoji: '⛲',
      stock: 22,
      featured: true,
    },
    {
      id: 'p6',
      name: 'Family Diwali Combo Box',
      category: 'gift-boxes',
      price: 2499,
      oldPrice: 2999,
      discountPercent: 17,
      description: 'Curated mix of sparklers, flower pots, chakkars and fountains — perfect for families.',
      image: '',
      emoji: '🎁',
      stock: 14,
      featured: true,
    },
    {
      id: 'p7',
      name: 'Kids Safe Sparkler Kit',
      category: 'sparklers',
      price: 299,
      oldPrice: null,
      discountPercent: 0,
      description: 'Low-smoke, low-spark sparklers designed for children under supervision.',
      image: '',
      emoji: '✨',
      stock: 45,
      featured: false,
    },
    {
      id: 'p8',
      name: 'Grand Finale Sky Shot 100mm',
      category: 'sky-shots',
      price: 3499,
      oldPrice: 3999,
      discountPercent: 12,
      description: '36-shot premium cake with willows, peonies and salutes — for the grand finale.',
      image: '',
      emoji: '🎇',
      stock: 'low',
      featured: true,
    },
    {
      id: 'p9',
      name: 'Rainbow Fancy Fountain',
      category: 'fancy-fountains',
      price: 399,
      oldPrice: null,
      discountPercent: 0,
      description: 'Colour-changing fountain with a crackling finish.',
      image: '',
      emoji: '⛲',
      stock: 30,
      featured: false,
    },
    {
      id: 'p10',
      name: 'Premium Gift Box – Deluxe',
      category: 'gift-boxes',
      price: 4999,
      oldPrice: 5499,
      discountPercent: 9,
      description: 'Premium assorted box with sky shots, fountains and fancy items for a complete Diwali evening.',
      image: '',
      emoji: '🎁',
      stock: 8,
      featured: true,
    },
  ],
};

/* ---------------- 2. HELPERS ---------------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const fmtINR = (n) => '₹' + Number(n).toLocaleString('en-IN');
const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;',
}[c]));

const waLink = (message = '') => {
  const num = CONFIG.business.whatsapp;
  const text = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${text}`;
};

/* ---------------- 3. CART (localStorage) ---------------- */
class Cart {
  constructor(storageKey = 'diya_cart_v1') {
    this.key = storageKey;
    this.items = this._load();
    this.listeners = new Set();
  }
  _load() {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }
  _save() {
    try { localStorage.setItem(this.key, JSON.stringify(this.items)); } catch {}
    this.listeners.forEach(fn => fn(this.items));
  }
  onChange(fn) { this.listeners.add(fn); }
  add(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) existing.qty += qty;
    else this.items.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, image: product.image || '', qty });
    this._save();
  }
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this._save();
  }
  setQty(id, qty) {
    const it = this.items.find(i => i.id === id);
    if (!it) return;
    const q = Math.max(1, parseInt(qty, 10) || 1);
    it.qty = q;
    this._save();
  }
  clear() { this.items = []; this._save(); }
  count() { return this.items.reduce((s, i) => s + i.qty, 0); }
  subtotal() { return this.items.reduce((s, i) => s + i.qty * i.price, 0); }
  buildWhatsAppMessage() {
    if (!this.items.length) return '';
    const lines = ['*New Diwali Order Enquiry*%0A', `Store: ${CONFIG.business.name}%0A`];
    this.items.forEach(i => {
      lines.push(`• ${i.name} × ${i.qty} — ${fmtINR(i.price * i.qty)}`);
    });
    lines.push(`%0A*Estimated subtotal: ${fmtINR(this.subtotal())}*`);
    lines.push('%0APlease confirm availability and delivery/pickup details.');
    return lines.join('%0A');
  }
}
const cart = new Cart();

/* ---------------- 4. RENDER: Categories ---------------- */
function renderCategories() {
  const grid = $('.categories__grid');
  if (!grid) return;
  grid.innerHTML = CONFIG.categories.map(c => `
    <article class="category-card reveal" tabindex="0" role="button"
             data-category="${c.id}"
             style="--cat-gradient: ${c.gradient}"
             aria-label="Filter by ${escapeHTML(c.name)}">
      <div class="category-card__icon" aria-hidden="true">${c.icon}</div>
      <h3 class="category-card__title">${escapeHTML(c.name)}</h3>
      <p class="category-card__text">${escapeHTML(c.description)}</p>
      <span class="category-card__cta">View products <i class="fa-solid fa-arrow-right"></i></span>
    </article>
  `).join('');

  // Wire click -> filter products + scroll
  $$('.category-card').forEach(card => {
    const handler = () => {
      setActiveCategory(card.dataset.category);
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    card.addEventListener('click', handler);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); }
    });
  });
}

/* ---------------- 5. RENDER: Products ---------------- */
let activeCategory = 'all';
let activeSort = 'featured';
let activeSearch = '';

function stockLabel(stock) {
  if (stock === 'out') return { text: 'Out of stock', cls: 'is-out' };
  if (stock === 'low') return { text: 'Only a few left', cls: 'is-low' };
  if (typeof stock === 'number' && stock > 0) return { text: `In stock (${stock})`, cls: '' };
  return { text: 'Available on request', cls: '' };
}

function productCardHTML(p) {
  const st = stockLabel(p.stock);
  const media = p.image
    ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
       <div class="product__placeholder" style="display:none">${p.emoji || '🎆'}</div>`
    : `<div class="product__placeholder">${p.emoji || '🎆'}</div>`;

  const discountBadge = p.discountPercent
    ? `<span class="badge badge--discount"><i class="fa-solid fa-tag"></i> ${p.discountPercent}% off</span>`
    : '';

  const oldPrice = p.oldPrice ? `<span class="price-old">${fmtINR(p.oldPrice)}</span>` : '';

  return `
    <article class="product reveal" data-id="${p.id}" data-category="${p.category}">
      <div class="product__media">
        ${media}
        <div class="product__badges">
          ${discountBadge}
          ${st.cls === 'is-low' ? '<span class="badge badge--stock-low"><i class="fa-solid fa-fire"></i> Low stock</span>' : ''}
        </div>
        <button class="product__quick" data-quick="${p.id}" aria-label="Quick view ${escapeHTML(p.name)}">
          <i class="fa-solid fa-eye"></i>
        </button>
      </div>
      <div class="product__body">
        <span class="product__category">${escapeHTML(categoryName(p.category))}</span>
        <h3 class="product__name">${escapeHTML(p.name)}</h3>
        <p class="product__desc">${escapeHTML(p.description)}</p>
        <div class="product__footer">
          <div class="product__price">
            <span class="price-current">${fmtINR(p.price)}</span>
            ${oldPrice}
          </div>
        </div>
        <p class="product__stock ${st.cls}">${st.text}</p>
        <div class="product__actions">
          <div class="qty" role="group" aria-label="Quantity for ${escapeHTML(p.name)}">
            <button type="button" data-qty-dec="${p.id}" aria-label="Decrease quantity">−</button>
            <input type="number" min="1" value="1" data-qty-input="${p.id}" aria-label="Quantity" />
            <button type="button" data-qty-inc="${p.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn--add" data-add="${p.id}" ${p.stock === 'out' ? 'disabled' : ''}>
            <i class="fa-solid fa-bag-shopping"></i> Add
          </button>
        </div>
        <a class="product__wa" href="${waLink(`Hi, I'm interested in *${p.name}* (${fmtINR(p.price)}). Please confirm availability.`)}" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
        </a>
      </div>
    </article>
  `;
}

function categoryName(id) {
  return CONFIG.categories.find(c => c.id === id)?.name || id;
}

function renderCategoryChips() {
  const wrap = $('#categoryChips');
  if (!wrap) return;
  const chips = [
    { id: 'all', name: 'All' },
    ...CONFIG.categories.map(c => ({ id: c.id, name: c.name })),
  ];
  wrap.innerHTML = chips.map(c => `
    <button class="chip ${c.id === activeCategory ? 'is-active' : ''}" data-chip="${c.id}" role="tab" aria-selected="${c.id === activeCategory}">
      ${escapeHTML(c.name)}
    </button>
  `).join('');

  $$('.chip', wrap).forEach(btn => {
    btn.addEventListener('click', () => setActiveCategory(btn.dataset.chip));
  });
}

function setActiveCategory(id) {
  activeCategory = id;
  $$('.chip').forEach(b => {
    const active = b.dataset.chip === id;
    b.classList.toggle('is-active', active);
    b.setAttribute('aria-selected', String(active));
  });
  $$('.category-card').forEach(c => c.classList.toggle('is-active', c.dataset.category === id));
  renderProducts();
}

function renderProducts() {
  const grid = $('#productsGrid');
  const empty = $('#productsEmpty');
  if (!grid) return;

  let list = CONFIG.PRODUCTS.slice();
  if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
  if (activeSearch) {
    const q = activeSearch.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      categoryName(p.category).toLowerCase().includes(q)
    );
  }

  // Sort
  switch (activeSort) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'name-asc':   list.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'featured':
    default:
      list.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  if (!list.length) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  grid.innerHTML = list.map(productCardHTML).join('');
  observeReveals();
  wireProductEvents();
}

function wireProductEvents() {
  // Add to cart
  $$('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.add;
      const p = CONFIG.PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const qtyInput = $(`[data-qty-input="${id}"]`);
      const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      cart.add(p, qty);
      showToast(`Added "${p.name}" to cart`, 'success');
    });
  });
  // Qty controls
  $$('[data-qty-inc]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.qtyInc;
    const input = $(`[data-qty-input="${id}"]`);
    if (input) { input.value = (parseInt(input.value, 10) || 1) + 1; }
  }));
  $$('[data-qty-dec]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.qtyDec;
    const input = $(`[data-qty-input="${id}"]`);
    if (input) { input.value = Math.max(1, (parseInt(input.value, 10) || 1) - 1); }
  }));
  // Quick view
  $$('[data-quick]').forEach(b => b.addEventListener('click', () => openQuickView(b.dataset.quick)));
}

/* ---------------- 6. QUICK VIEW ---------------- */
function openQuickView(id) {
  const p = CONFIG.PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const modal = $('#quickViewModal');
  const body = $('#qvBody');
  const st = stockLabel(p.stock);
  const media = p.image
    ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'qv__media',textContent:'${p.emoji || '🎆'}'}))" />`
    : p.emoji || '🎆';

  body.innerHTML = `
    <div class="qv__media">${media}</div>
    <div class="qv__content">
      <span class="qv__category">${escapeHTML(categoryName(p.category))}</span>
      <h3 class="qv__name">${escapeHTML(p.name)}</h3>
      <p class="qv__desc">${escapeHTML(p.description)}</p>
      <div class="qv__price">
        <span class="price-current">${fmtINR(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${fmtINR(p.oldPrice)}</span>` : ''}
        ${p.discountPercent ? `<span class="badge badge--discount">${p.discountPercent}% off</span>` : ''}
      </div>
      <p class="qv__stock ${st.cls}">${st.text}</p>
      <div class="qv__actions">
        <div class="qty" style="align-self:flex-start">
          <button type="button" id="qvDec" aria-label="Decrease">−</button>
          <input type="number" id="qvQty" min="1" value="1" aria-label="Quantity" />
          <button type="button" id="qvInc" aria-label="Increase">+</button>
        </div>
        <button class="btn btn--primary btn--lg btn--full" id="qvAdd" ${p.stock === 'out' ? 'disabled' : ''}>
          <i class="fa-solid fa-bag-shopping"></i> Add to cart
        </button>
        <a class="btn btn--whatsapp btn--lg btn--full" id="qvWa" href="${waLink(`Hi, I'm interested in *${p.name}* (${fmtINR(p.price)}). Please confirm availability.`)}" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
        </a>
      </div>
    </div>
  `;

  $('#qvDec').addEventListener('click', () => {
    const i = $('#qvQty'); i.value = Math.max(1, (parseInt(i.value,10)||1) - 1);
  });
  $('#qvInc').addEventListener('click', () => {
    const i = $('#qvQty'); i.value = (parseInt(i.value,10)||1) + 1;
  });
  $('#qvAdd').addEventListener('click', () => {
    const qty = parseInt($('#qvQty').value, 10) || 1;
    cart.add(p, qty);
    showToast(`Added "${p.name}" to cart`, 'success');
    closeQuickView();
  });

  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open', '');
}
function closeQuickView() {
  const modal = $('#quickViewModal');
  if (typeof modal.close === 'function') modal.close();
  else modal.removeAttribute('open');
}

/* ---------------- 7. CART DRAWER ---------------- */
function openCart() {
  $('#cartDrawer').classList.add('is-open');
  $('#cartDrawer').setAttribute('aria-hidden', 'false');
  $('#overlay').hidden = false;
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  $('#cartDrawer').classList.remove('is-open');
  $('#cartDrawer').setAttribute('aria-hidden', 'true');
  $('#overlay').hidden = true;
  document.body.style.overflow = '';
}
function renderCart() {
  const body = $('#cartBody');
  const foot = $('#cartFoot');
  if (!body) return;

  if (!cart.items.length) {
    body.innerHTML = `
      <div class="cart-drawer__empty">
        <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i>
        <p>Your cart is empty.</p>
        <a href="#shop" class="btn btn--primary" id="cartShopBtn">Browse products</a>
      </div>`;
    foot.hidden = true;
    $('#cartShopBtn')?.addEventListener('click', closeCart);
    return;
  }

  body.innerHTML = cart.items.map(i => `
    <div class="cart-item" data-cart-id="${i.id}">
      <div class="cart-item__img">
        ${i.image ? `<img src="${escapeHTML(i.image)}" alt="${escapeHTML(i.name)}" onerror="this.replaceWith(document.createTextNode('${i.emoji || '🎆'}'))" />` : (i.emoji || '🎆')}
      </div>
      <div>
        <div class="cart-item__name">${escapeHTML(i.name)}</div>
        <div class="cart-item__price">${fmtINR(i.price)} × ${i.qty} = ${fmtINR(i.price * i.qty)}</div>
        <div class="qty" style="margin-top:.4rem">
          <button type="button" data-cart-dec="${i.id}" aria-label="Decrease">−</button>
          <input type="number" min="1" value="${i.qty}" data-cart-qty="${i.id}" aria-label="Quantity" />
          <button type="button" data-cart-inc="${i.id}" aria-label="Increase">+</button>
        </div>
      </div>
      <div class="cart-item__controls">
        <button class="cart-item__remove" data-cart-remove="${i.id}" aria-label="Remove ${escapeHTML(i.name)}">
          <i class="fa-solid fa-trash-can"></i> Remove
        </button>
      </div>
    </div>
  `).join('');

  foot.hidden = false;
  $('#cartSubtotal').textContent = fmtINR(cart.subtotal());
  $('#cartTotal').textContent = fmtINR(cart.subtotal());
  $('#cartWhatsApp').href = waLink(cart.buildWhatsAppMessage());

  // Wire events
  $$('[data-cart-inc]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.cartInc;
    const input = $(`[data-cart-qty="${id}"]`);
    const q = Math.max(1, (parseInt(input.value,10)||1) + 1);
    cart.setQty(id, q);
  }));
  $$('[data-cart-dec]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.cartDec;
    const input = $(`[data-cart-qty="${id}"]`);
    const q = Math.max(1, (parseInt(input.value,10)||1) - 1);
    cart.setQty(id, q);
  }));
  $$('[data-cart-qty]').forEach(inp => inp.addEventListener('change', () => {
    cart.setQty(inp.dataset.cartQty, inp.value);
  }));
  $$('[data-cart-remove]').forEach(b => b.addEventListener('click', () => {
    cart.remove(b.dataset.cartRemove);
    showToast('Item removed from cart');
  }));
}

/* ---------------- 8. TOASTS ---------------- */
function showToast(message, type = 'info') {
  const host = $('#toasts');
  const el = document.createElement('div');
  el.className = `toast is-${type}`;
  const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info';
  el.innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i><span>${escapeHTML(message)}</span>`;
  host.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity .3s, transform .3s';
    setTimeout(() => el.remove(), 300);
  }, 2600);
}

/* ---------------- 9. SEARCH ---------------- */
function initSearch() {
  const toggle = $('#searchToggle');
  const bar = $('#searchBar');
  const input = $('#searchInput');
  const close = $('#searchClose');
  if (!toggle || !bar || !input) return;

  const open = () => { bar.hidden = false; setTimeout(() => input.focus(), 30); };
  const shut = () => { bar.hidden = true; input.value = ''; activeSearch = ''; renderProducts(); };

  toggle.addEventListener('click', () => bar.hidden ? open() : shut());
  close.addEventListener('click', shut);
  input.addEventListener('input', () => {
    activeSearch = input.value.trim();
    renderProducts();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') shut();
  });
}

/* ---------------- 10. HEADER / NAV ---------------- */
function initHeader() {
  const header = $('#siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const ham = $('#hamburger');
  const nav = $('#primaryNav');
  ham?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    ham.setAttribute('aria-expanded', String(open));
  });
  $$('.nav__link').forEach(l => l.addEventListener('click', () => {
    nav.classList.remove('is-open');
    ham?.setAttribute('aria-expanded', 'false');
  }));

  // Active link on scroll
  const sections = ['home','categories','shop','about','contact'].map(id => document.getElementById(id)).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$('.nav__link').forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

/* ---------------- 11. FIREWORKS PARTICLES ---------------- */
function initFireworks() {
  const host = $('#fireworks');
  if (!host) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const colors = ['#ffd166', '#f5a623', '#e8457f', '#ffffff', '#b98bff'];
  const count = window.innerWidth < 768 ? 18 : 36;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'spark';
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const tx = (Math.random() - 0.5) * 220;
    const ty = (Math.random() - 0.5) * 220;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 4;
    const dur = 2.5 + Math.random() * 2.5;
    s.style.left = x + '%';
    s.style.top = y + '%';
    s.style.color = color;
    s.style.background = color;
    s.style.setProperty('--tx', tx + 'px');
    s.style.setProperty('--ty', ty + 'px');
    s.style.animationDelay = delay + 's';
    s.style.animationDuration = dur + 's';
    host.appendChild(s);
  }
}

/* ---------------- 12. REVEAL ON SCROLL ---------------- */
let revealObserver;
function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  $$('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
}

/* ---------------- 13. CONTACT FORM ---------------- */
function initContactForm() {
  const form = $('#contactForm');
  const status = $('#contactFormStatus');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    status.className = 'contact__form-status';

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    let valid = true;
    $$('.form-field', form).forEach(f => f.classList.remove('is-invalid'));

    if (!name) { markInvalid(form.name); valid = false; }
    if (!phone || phone.length < 6) { markInvalid(form.phone); valid = false; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { markInvalid(form.email); valid = false; }
    if (!message || message.length < 5) { markInvalid(form.message); valid = false; }

    if (!valid) {
      status.textContent = 'Please fix the highlighted fields.';
      status.classList.add('is-error');
      return;
    }

    /*
      NOTE: This is a frontend-only demo. To actually send messages,
      replace the block below with a fetch() to your form backend
      (e.g. Formspree, Web3Forms, your own API).
    */
    status.textContent = 'Thanks! This is a demo form — connect it to a form service to receive messages.';
    status.classList.add('is-success');
    form.reset();
  });

  function markInvalid(input) {
    input.closest('.form-field')?.classList.add('is-invalid');
  }
}

/* ---------------- 14. POPULATE BUSINESS INFO ---------------- */
function populateBusinessInfo() {
  const b = CONFIG.business;

  // About section
  const aboutYear = $('#aboutYear'); if (aboutYear) aboutYear.textContent = b.foundedYear;
  const aboutYears = $('#aboutYears'); if (aboutYears) aboutYears.textContent = b.yearsOfExperience;
  const aboutCity = $('#aboutCity'); if (aboutCity) aboutCity.textContent = b.city;
  const aboutBrand = $('#aboutBrand'); if (aboutBrand) aboutBrand.textContent = b.name;

  // Contact section
  const cp = $('#contactPhone'); if (cp) { cp.textContent = b.phoneDisplay; cp.href = 'tel:' + b.phone.replace(/\s+/g,''); }
  const cw = $('#contactWhatsApp'); if (cw) cw.href = waLink('Hi, I would like to enquire about your Diwali collection.');
  const ce = $('#contactEmail'); if (ce) { ce.textContent = b.email; ce.href = 'mailto:' + b.email; }
  const ca = $('#contactAddress'); if (ca) ca.textContent = b.address;
  const ch = $('#contactHours'); if (ch) ch.textContent = b.hours;

  // Header & hero WhatsApp
  const hw = $('#headerWhatsApp'); if (hw) hw.href = waLink('Hi, I would like to place a Diwali order.');
  const hw2 = $('#heroWhatsApp'); if (hw2) hw2.href = waLink('Hi, I would like to place a Diwali order.');
  const ow = $('#offerWhatsApp'); if (ow) ow.href = waLink('Hi, I am interested in the Diwali festive offer.');
  const fw = $('#fabWhatsApp'); if (fw) fw.href = waLink('Hi, I have a question about your Diwali collection.');

  // Footer
  const fb = $('#footerBrand'); if (fb) fb.textContent = b.shortName;
  const fb2 = $('#footerBrand2'); if (fb2) fb2.textContent = b.name;
  const fa = $('#footerAddress'); if (fa) fa.textContent = b.address;
  const fp = $('#footerPhone'); if (fp) { fp.textContent = b.phoneDisplay; fp.href = 'tel:' + b.phone.replace(/\s+/g,''); }
  const fe = $('#footerEmail'); if (fe) { fe.textContent = b.email; fe.href = 'mailto:' + b.email; }
  $('#footerYear').textContent = new Date().getFullYear();
  $('#privacyLink').href = b.privacyUrl || '#';
  $('#termsLink').href = b.termsUrl || '#';

  // Socials
  const socials = b.socials || {};
  const icons = { facebook: 'fa-facebook-f', instagram: 'fa-instagram', youtube: 'fa-youtube', twitter: 'fa-x-twitter' };
  const labels = { facebook: 'Facebook', instagram: 'Instagram', youtube: 'YouTube', twitter: 'X (Twitter)' };
  const socialsHTML = Object.entries(socials)
    .filter(([,url]) => url)
    .map(([k,url]) => `<a class="social-link" href="${escapeHTML(url)}" target="_blank" rel="noopener" aria-label="${labels[k] || k}"><i class="fa-brands ${icons[k] || 'fa-link'}"></i></a>`)
    .join('');
  $('#contactSocials').innerHTML = socialsHTML;
  $('#footerSocials').innerHTML = socialsHTML;

  // Footer categories
  $('#footerCategories').innerHTML = CONFIG.categories.map(c =>
    `<li><a href="#shop" data-foot-cat="${c.id}">${escapeHTML(c.name)}</a></li>`
  ).join('');
  $$('[data-foot-cat]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    setActiveCategory(a.dataset.footCat);
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  }));
}

/* ---------------- 15. ANNOUNCEMENT BAR ---------------- */
function initAnnouncement() {
  const bar = $('.announcement-bar');
  const close = $('.announcement-bar__close');
  if (!bar || !close) return;
  close.addEventListener('click', () => bar.classList.add('is-hidden'));
}

/* ---------------- 16. INIT ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  populateBusinessInfo();
  renderCategories();
  renderCategoryChips();
  renderProducts();
  initHeader();
  initSearch();
  initFireworks();
  initContactForm();
  initAnnouncement();
  observeReveals();

  // Cart events
  $('#cartToggle').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', closeCart);
  $('#overlay').addEventListener('click', () => { closeCart(); closeQuickView(); });
  $('#cartClear').addEventListener('click', () => {
    if (!cart.items.length) return;
    cart.clear();
    showToast('Cart cleared');
  });
  $('#qvClose').addEventListener('click', closeQuickView);
  $('#quickViewModal').addEventListener('click', (e) => {
    if (e.target.id === 'quickViewModal') closeQuickView();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeCart(); closeQuickView(); }
  });

  // Sort select
  $('#sortSelect').addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderProducts();
  });

  // Cart updates
  cart.onChange(() => {
    $('#cartCount').textContent = cart.count();
    if ($('#cartDrawer').classList.contains('is-open')) renderCart();
  });
  $('#cartCount').textContent = cart.count();
});