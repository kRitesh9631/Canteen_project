/* ============================================================
   CAMPUS BITES – APP.JS
   Images matched exactly to filenames in the Canteen folder
   ============================================================ */

/* ---- MENU DATA (image filenames match exactly) ---- */
const MENU_ITEMS = [
  //BREAKFAST
    {id:1, name:'BreakFast',img:'breakfast.jpg',category:'breakfast',price:40,desc:'A delicious and satisfying Chola Bhature to start your day',veg:true},

    //Lunch
      {id:2, name:'Lunch',img:'Lunch.jpg',category:'Lunch',price:40,desc:'A delicious and satisfying Lunch to have your lunch',veg:true},


  //Dinner
    {id:3, name:'Dinner',img:'Dinner.jpg',category:'Dinner',price:40,desc:'A delicious and satisfying Dinner to have your dinner',veg:true},



  // FOOD
  { id: 4,  name: 'Veg Noodles',  img: 'Veg Noodles.jpg',  category: 'food',      price: 40,  desc: 'Spicy stir-fried noodles with veggies & sauce',          veg: true  },
  { id: 5,  name: 'Veg Momo',     img: 'Veg momo.jpg',     category: 'food',      price: 50,  desc: 'Steamed dumplings stuffed with paneer & veggies',        veg: true  },
  { id: 6,  name: 'Veg Roll',     img: 'Veg  Roll.jpg',    category: 'food',      price: 25,  desc: 'Crispy paratha roll stuffed with spiced paneer & veggies',veg: true  },
  { id: 7,  name: 'Egg Roll',     img: 'Egg Roll.jpg',     category: 'food',      price: 45,  desc: 'Soft paratha roll with egg, onion & tangy chutney',      veg: false },
  { id: 8,  name: 'Samosa',       img: 'samosa.jpg',       category: 'food',      price: 10,  desc: 'Golden crispy samosa with spiced potato filling',         veg: true  },
  { id: 9,  name: 'Dosa',         img: 'Dosa.jpg',         category: 'food',      price: 50,  desc: 'Crispy South Indian dosa with coconut chutney & sambar',  veg: true  },
  
  
  // BEVERAGES
  { id: 10,  name: 'Tea',          img: 'Tea.jpg',          category: 'beverages', price: 10,  desc: 'Hot refreshing masala chai to keep you going',            veg: true  },
  { id: 11,  name: 'Coffee',       img: 'Coffee.jpg',       category: 'beverages', price: 13,  desc: 'Rich, aromatic Nescafé coffee to fuel your day',         veg: true  },
  { id: 12, name: 'Water Bottle', img: 'Water bottle.jpg', category: 'beverages', price: 20,  desc: '500ml / 1-litre sealed mineral water bottle',             veg: true  },
  { id: 13,  name: 'Cold Drink',   img: 'Cold Drink.jpg',   category: 'beverages', price: 25,  desc: 'Chilled cold drink - customize your brand and flavour!', veg: true  },
  { id: 14, name: 'Ice Cream',    img: 'ICE CREAM.jpg',    category: 'beverages', price: 30,  desc: 'Delicious scoops, cups & cones - pick your flavour!',    veg: true  },
  
  
  // SNACKS
  { id: 15, name: 'Snacks',        img: 'chips.jpg',        category: 'snacks',    price: 10,  desc: 'Crunchy salted or masala flavoured snacks packet',         veg: true  },
  { id: 16, name: 'Biscuits',     img: 'Biscuits.jpg',     category: 'snacks',    price: 10,  desc: 'Assorted biscuit pack - pick your favorite variant!',     veg: true  },
  
];

/* ---- VARIANT DATA DICTIONARY ---- */
const ITEM_VARIANTS = {
  13: { // Cold Drink
    title: 'Choose Flavour',
    desc: 'Select brand & size',
    brands: ['All', 'Coca-Cola', 'Pepsi', 'Sprite', 'Thums Up', 'Fanta', 'Limca', 'Mountain Dew', '7UP'],
    items: [
      { id: 'cd_coke_250', brand: 'Coca-Cola', name: 'Coca-Cola 250ml', price: 25, mrp: 30, img: 'coca-cola.jpg' },
      { id: 'cd_coke_500', brand: 'Coca-Cola', name: 'Coca-Cola 500ml', price: 45, mrp: 50, img: 'coca-cola.jpg' },
      { id: 'cd_sprite_500', brand: 'Sprite', name: 'Sprite 500ml', price: 45, mrp: 50, img: 'Sprite.jpg' },
      { id: 'cd_lahori_zeera_250', brand: 'lahori', name: 'lahori zeera 250ml', price: 10, mrp: 15, img: 'lahori zeera.jpg' },
      { id: 'cd_maaza_250', brand: 'maaza', name: 'maaza 250ml', price: 10, mrp: 15, img: 'maaza.jpg' },
      { id: 'cd_capma_250', brand: 'campa', name: 'campa 250ml', price: 10, mrp: 15, img: 'campa.jpg' },
      { id: 'cd_campa_500', brand: 'campa', name: 'campa 500ml', price: 20, mrp: 25, img: 'campa.jpg' },
      { id: 'cd_fanta_250', brand: 'Fanta', name: 'Fanta Orange 250ml', price: 25, mrp: 30, img: 'Fanta.jpg' },
      { id: 'cd_7up_250', brand: '7UP', name: '7UP 250ml', price: 25, mrp: 30, img: '7UP.jpg' }
    ]
  },
  14: { // Ice Cream
    title: 'Choose Flavour',
    desc: 'Select scoop, cone or pack',
    brands: ['All', 'Cone', 'Cup', 'Family Pack'],
    items: [
      { id: 'ic_vanilla_cone', brand: 'Cone', name: 'Vanilla Cone', price: 30, mrp: 35, img: 'ICE CREAM.jpg' },
      { id: 'ic_choco_cone', brand: 'Cone', name: 'Chocolate Cone', price: 35, mrp: 40, img: 'ICE CREAM.jpg' },
      { id: 'ic_strawberry_cone', brand: 'Cone', name: 'Strawberry Cone', price: 35, mrp: 40, img: 'ICE CREAM.jpg' },
      { id: 'ic_butter_cone', brand: 'Cone', name: 'Butterscotch Cone', price: 40, mrp: 45, img: 'ICE CREAM.jpg' },
      { id: 'ic_mango_cone', brand: 'Cone', name: 'Mango Cone', price: 40, mrp: 45, img: 'ICE CREAM.jpg' },
      { id: 'ic_blackcurrant_cone', brand: 'Cone', name: 'Black Currant Cone', price: 45, mrp: 50, img: 'ICE CREAM.jpg' },
      { id: 'ic_choco_cup', brand: 'Cup', name: 'Chocolate Cup', price: 50, mrp: 55, img: 'ICE CREAM.jpg' },
      { id: 'ic_vanilla_cup', brand: 'Cup', name: 'Vanilla Cup', price: 45, mrp: 50, img: 'ICE CREAM.jpg' },
      { id: 'ic_family_500', brand: 'Family Pack', name: 'Family Pack 500ml', price: 120, mrp: 140, img: 'ICE CREAM.jpg' },
      { id: 'ic_family_1l', brand: 'Family Pack', name: 'Family Pack 1L', price: 220, mrp: 250, img: 'ICE CREAM.jpg' }
    ]
  },
  15: { // Snacks
    title: 'Choose Flavour',
    desc: 'Select brand & size',
    brands: ['All', "Lay's", 'Kurkure', 'Panjabi tadka'],
    items: [
      { id: 'ch_Lays_10', brand: "Lay's", name: 'Classic Salted ₹10', price: 10, mrp: 12, img: 'Lays.jpg' },
      { id: 'ch_Kurkure_10', brand: 'Kurkure', name: 'Masala Munch ₹10', price: 10, mrp: 12, img: 'kurkure.jpg' },
      { id: 'ch_Panjabi_tadka_10', brand: 'Panjabi tadka', name: 'Panjabi tadka ₹10', price: 10, mrp: 12, img: 'panjabi tadka.jpg' },
    ]
  },
  16: { // Biscuits
    title: 'Choose Variant',
    desc: 'Select brand & size',
    brands: ['All', 'Parle-G', 'Marie Gold', 'Bourbon', 'Good Day', 'Treat'],
    items: [
      { id: 'bi_parle_small', brand: 'Parle-G', name: 'Parle-G Small ₹5', price: 5, mrp: 6, img: 'Biscuits.jpg' },
      { id: 'bi_parle_med', brand: 'Parle-G', name: 'Parle-G Medium ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_parle_family', brand: 'Parle-G', name: 'Parle-G Family Pack ₹25', price: 25, mrp: 30, img: 'Biscuits.jpg' },
      { id: 'bi_marie_small', brand: 'Marie Gold', name: 'Marie Gold Small ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_marie_large', brand: 'Marie Gold', name: 'Marie Gold Large ₹30', price: 30, mrp: 35, img: 'Biscuits.jpg' },
      { id: 'bi_bourbon_reg', brand: 'Bourbon', name: 'Bourbon Regular ₹20', price: 20, mrp: 25, img: 'Biscuits.jpg' },
      { id: 'bi_bourbon_large', brand: 'Bourbon', name: 'Bourbon Large ₹40', price: 40, mrp: 45, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_butter', brand: 'Good Day', name: 'Good Day Butter ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_cashew', brand: 'Good Day', name: 'Cashew Good Day ₹20', price: 20, mrp: 25, img: 'Biscuits.jpg' },
      { id: 'bi_goodday_choco', brand: 'Good Day', name: 'Choco Chip Good Day ₹25', price: 25, mrp: 30, img: 'Biscuits.jpg' },
      { id: 'bi_treat_choco', brand: 'Treat', name: 'Treat Chocolate ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' },
      { id: 'bi_treat_straw', brand: 'Treat', name: 'Treat Strawberry ₹10', price: 10, mrp: 12, img: 'Biscuits.jpg' }
    ]
  },

  1: { // BREAKFAST
    title: 'Choose More Delicacies',
    desc: 'Fresh and Healthy Delicacies',
    brands: ['All', 'Sandwich', 'Poha', 'Paratha', 'Beverages'],
    items: [
      { id: 'bf_veg_sandwich', brand: 'SUNDAY', name: 'Veg Sandwich', price: 50, mrp: 60, img: 'BREAKFAST.jpg' },
      { id: 'bf_grilled_sandwich', brand: 'MONDAY', name: 'Grilled Sandwich', price: 70, mrp: 80, img: 'BREAKFAST.jpg' },
      { id: 'bf_poha', brand: 'TUESDAY', name: 'Poha', price: 40, mrp: 50, img: 'BREAKFAST.jpg' },
      { id: 'bf_upma', brand: 'WEDNESDAY', name: 'Upma', price: 45, mrp: 55, img: 'BREAKFAST.jpg' },
      { id: 'bf_aloo_paratha', brand: 'THURSDAY', name: 'Aloo Paratha', price: 60, mrp: 70, img: 'BREAKFAST.jpg' },
      { id: 'bf_paneer_paratha', brand: 'FRIDAY', name: 'Paneer Paratha', price: 80, mrp: 90, img: 'BREAKFAST.jpg' },
      { id: 'bf_masala_chai', brand: 'SATURDAY', name: 'Masala Chai', price: 20, mrp: 25, img: 'BREAKFAST.jpg' },
    ]
},
};

/* ---- Featured cards for hero (cycles with slideshow) ---- */
const FEATURED = [
  { name: 'Veg Noodles',  img: 'Veg Noodles.jpg',  price: '₹40',  id: 1  },
  { name: 'Veg Momo',     img: 'Veg momo.jpg',     price: '₹50',  id: 2  },
  { name: 'Dosa',         img: 'Dosa.jpg',          price: '₹50',  id: 6  },
  { name: 'Coffee',       img: 'Coffee.jpg',         price: '₹15',  id: 8  },
  { name: 'Egg Roll',     img: 'Egg Roll.jpg',      price: '₹45',  id: 4  },
];

/* ============================================================
   STATE
   ============================================================ */
let cart = [];
let activeCategory = 'all';
let searchQuery    = '';
let currentSlide   = 0;
let slideInterval  = null;

// Track active selected variant for the upgraded cards (default to first items)
let selectedVariants = {
  9: 'cd_coke_250',
  11: 'ic_vanilla_cone',
  12: 'ch_lays_salted_10',
  13: 'bi_parle_small'
};

// Track drawer states
let activeDrawerProductId = null;
let drawerSearchQuery    = '';
let drawerActiveBrand    = 'All';

/* ============================================================
   UTILITIES
   ============================================================ */
const $ = id => document.getElementById(id);
const qs  = s  => document.querySelector(s);
const qsa = s  => document.querySelectorAll(s);

function formatPrice(n) { return `₹${Number(n).toLocaleString('en-IN')}`; }

/* ============================================================
   TOAST
   ============================================================ */
function showToast(msg, imgSrc = '', type = 'success') {
  const container = $('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  if (imgSrc) {
    toast.innerHTML = `<img class="toast-img" src="${imgSrc}" alt="" /><span>${msg}</span>`;
  } else {
    toast.innerHTML = `<span>${type === 'success' ? '✅' : '❌'}&nbsp; ${msg}</span>`;
  }
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 360);
  }, 2600);
}

/* ============================================================
   DARK / LIGHT THEME
   ============================================================ */
function initTheme() {
  const btn  = $('themeToggle');
  const icon = $('themeIcon');
  const html = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem('cb-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('cb-theme', next);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

/* ============================================================
   HERO SLIDESHOW
   ============================================================ */
function initSlideshow() {
  const slides = qsa('.slide');
  const dots   = qsa('.dot');
  if (!slides.length) return;

  function goTo(idx) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (idx + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    updateFeaturedCard(currentSlide);
  }

  // Auto-advance every 4.5s
  slideInterval = setInterval(() => goTo(currentSlide + 1), 4500);

  // Dot click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goTo(parseInt(dot.dataset.slide));
      slideInterval = setInterval(() => goTo(currentSlide + 1), 4500);
    });
  });
}

/* ============================================================
   FEATURED CARD (hero right panel)
   ============================================================ */
function updateFeaturedCard(idx) {
  const f = FEATURED[idx];
  if (!f) return;
  const img   = $('featuredImg');
  const name  = $('featuredName');
  const price = $('featuredPrice');
  if (img && name && price) {
    img.src          = f.img;
    img.alt          = f.name;
    name.textContent = f.name;
    price.textContent= f.price;
    // store current item id for add-to-cart
    $('featuredAddBtn') && ($('featuredAddBtn').dataset.fid = f.id);
  }
}

window.addToCartHero = function() {
  const btn = $('featuredAddBtn');
  const fid = btn ? parseInt(btn.dataset.fid || 1) : 1;
  addToCart(fid);
};

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar    = $('navbar');
  const hamburger = $('hamburger');
  const navLinks  = $('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNavLink();
  });

  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  qsa('.nav-link').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));
}

function updateActiveNavLink() {
  const sections = ['home','menu','xerox','about','contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 130) current = id;
  });
  qsa('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}

/* ============================================================
   MENU RENDER
   ============================================================ */
function getFiltered() {
  return MENU_ITEMS.filter(item => {
    const matchCat  = activeCategory === 'all' || item.category === activeCategory;
    const q         = searchQuery.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.category.includes(q);
    return matchCat && matchSearch;
  });
}

function renderMenu() {
  const grid  = $('menuGrid');
  const empty = $('emptyState');
  const items = getFiltered();

  if (items.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  grid.innerHTML = items.map((item, idx) => {
    // Check if this item supports variant/flavour selection
    const hasVariants = !!ITEM_VARIANTS[item.id];
    
    if (hasVariants) {
      const varData = ITEM_VARIANTS[item.id];
      const activeVarId = selectedVariants[item.id];
      const activeVar = varData.items.find(v => v.id === activeVarId) || varData.items[0];
      const cartItem = cart.find(c => c.id === activeVar.id);
      const qtyInCart = cartItem ? cartItem.qty : 0;
      
      const chooseBtnText = item.id === 13 ? 'Choose Variant' : 'Choose Flavour';
      
      // Cold Drink has specific layout requests
      if (item.id === 9) {
        return `
          <div class="menu-card reveal" style="animation-delay:${idx * 0.06}s" id="card-${item.id}">
            <div class="menu-card-img">
              <img src="${item.img}" alt="${item.name}" loading="lazy"
                onerror="this.style.display='none';this.parentElement.style.background='var(--bg3)'" />
              <span class="menu-cat-tag cat-${item.category}">${item.category}</span>
              <span class="veg-dot ${item.veg ? 'is-veg' : 'non-veg'}" title="${item.veg ? 'Veg' : 'Non-Veg'}"></span>
            </div>
            <div class="menu-card-body">
              <div class="menu-name">${item.name}</div>
              <div class="menu-desc">${item.desc}</div>
              
              <span class="selected-variant-label" title="${activeVar.name}">
                Selected: ${activeVar.name}
              </span>
              
              <div class="menu-footer variant-footer">
                <div class="menu-footer-top-row">
                  <div class="menu-price">
                    Starting: ₹25
                    <span class="variant-card-mrp">₹30</span>
                  </div>
                  <button class="change-variant-btn" onclick="openVariantDrawer(${item.id})">
                    Change Flavour
                  </button>
                </div>
                
                <div class="menu-footer-bottom-row">
                  <div class="menu-card-add-action" id="action-wrapper-${item.id}">
                    ${qtyInCart > 0 ? `
                      <div class="drawer-qty-selector" style="margin: 0 auto; width: 100%;">
                        <button class="drawer-qty-btn" onclick="changeCartQty('${activeVar.id}', -1)">−</button>
                        <span class="drawer-qty-num">${qtyInCart}</span>
                        <button class="drawer-qty-btn" onclick="changeCartQty('${activeVar.id}', 1)">+</button>
                      </div>
                    ` : `
                      <button class="add-to-cart-btn" style="width: 100%;" onclick="addToCart('${activeVar.id}')">
                        Add to Cart
                      </button>
                    `}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
      
      // Ice Cream, Chips, Biscuits upgraded card layout
      return `
        <div class="menu-card reveal" style="animation-delay:${idx * 0.06}s" id="card-${item.id}">
          <div class="menu-card-img">
            <img src="${item.img}" alt="${item.name}" loading="lazy"
              onerror="this.style.display='none';this.parentElement.style.background='var(--bg3)'" />
            <span class="menu-cat-tag cat-${item.category}">${item.category}</span>
            <span class="veg-dot ${item.veg ? 'is-veg' : 'non-veg'}" title="${item.veg ? 'Veg' : 'Non-Veg'}"></span>
          </div>
          <div class="menu-card-body">
            <div class="menu-name">${item.name}</div>
            <div class="menu-desc">${item.desc}</div>
            
            <span class="selected-variant-label" title="${activeVar.name}">
              Selected: ${activeVar.name}
            </span>
            
            <div class="menu-footer variant-footer">
              <div class="menu-footer-top-row">
                <div class="menu-price">
                  ${formatPrice(activeVar.price)}
                  ${activeVar.mrp > activeVar.price ? `<span class="variant-card-mrp">${formatPrice(activeVar.mrp)}</span>` : ''}
                </div>
                <button class="change-variant-btn" onclick="openVariantDrawer(${item.id})">
                  Change
                </button>
              </div>
              
              <div class="menu-footer-bottom-row">
                <div class="menu-card-add-action" id="action-wrapper-${item.id}">
                  ${qtyInCart > 0 ? `
                    <div class="drawer-qty-selector" style="margin: 0 auto; width: 100%;">
                      <button class="drawer-qty-btn" onclick="changeCartQty('${activeVar.id}', -1)">−</button>
                      <span class="drawer-qty-num">${qtyInCart}</span>
                      <button class="drawer-qty-btn" onclick="changeCartQty('${activeVar.id}', 1)">+</button>
                    </div>
                  ` : `
                    <button class="add-to-cart-btn" style="width: 100%;" onclick="openVariantDrawer(${item.id})">
                      ${chooseBtnText}
                    </button>
                  `}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Regular simple card (Veg Noodles, Veg Momo, Dosa, Tea, etc.)
      const cartItem = cart.find(c => c.id === item.id);
      const qtyInCart = cartItem ? cartItem.qty : 0;
      
      return `
        <div class="menu-card reveal" style="animation-delay:${idx * 0.06}s" id="card-${item.id}">
          <div class="menu-card-img">
            <img src="${item.img}" alt="${item.name}" loading="lazy"
              onerror="this.style.display='none';this.parentElement.style.background='var(--bg3)'" />
            <span class="menu-cat-tag cat-${item.category}">${item.category}</span>
            <span class="veg-dot ${item.veg ? 'is-veg' : 'non-veg'}" title="${item.veg ? 'Veg' : 'Non-Veg'}"></span>
          </div>
          <div class="menu-card-body">
            <div class="menu-name">${item.name}</div>
            <div class="menu-desc">${item.desc}</div>
            <div class="menu-footer">
              <div class="menu-price">${formatPrice(item.price)}</div>
              ${qtyInCart > 0 ? `
                <div class="drawer-qty-selector" style="min-width: 82px;">
                  <button class="drawer-qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
                  <span class="drawer-qty-num">${qtyInCart}</span>
                  <button class="drawer-qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
                </div>
              ` : `
                <button class="add-to-cart-btn" id="atc-${item.id}" onclick="addToCart(${item.id})">+ Add</button>
              `}
            </div>
          </div>
        </div>
      `;
    }
  }).join('');

  observeReveal();
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  qsa('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   VARIANT DRAWER CONTROLLER
   ============================================================ */
window.openVariantDrawer = function(productId) {
  const varData = ITEM_VARIANTS[productId];
  if (!varData) return;

  activeDrawerProductId = productId;
  drawerSearchQuery    = '';
  drawerActiveBrand    = 'All';

  $('drawerProductName').textContent = varData.title;
  $('drawerProductDesc').textContent = varData.desc;
  $('drawerSearch').value = '';

  // Render Brand Tab Filters
  const brandTabs = $('drawerBrandTabs');
  if (varData.brands && varData.brands.length > 1) {
    brandTabs.style.display = 'flex';
    brandTabs.innerHTML = varData.brands.map(brand => `
      <button class="drawer-brand-tab-btn ${brand === 'All' ? 'active' : ''}" 
        onclick="setDrawerBrandFilter('${brand}')" id="brand-tab-${brand.replace(/\s/g, '-')}">
        ${brand}
      </button>
    `).join('');
  } else {
    brandTabs.style.display = 'none';
  }

  // Bind drawer search event
  const searchInput = $('drawerSearch');
  searchInput.oninput = (e) => {
    drawerSearchQuery = e.target.value.trim();
    renderDrawerItems();
  };

  renderDrawerItems();

  // Slide open drawer
  $('variantDrawer').classList.add('open');
  $('variantOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeVariantDrawer = function() {
  $('variantDrawer').classList.remove('open');
  $('variantOverlay').classList.remove('active');
  document.body.style.overflow = '';
  activeDrawerProductId = null;
  renderMenu(); // refresh selections on grid
};

window.setDrawerBrandFilter = function(brand) {
  drawerActiveBrand = brand;
  qsa('.drawer-brand-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === brand);
  });
  renderDrawerItems();
};

window.renderDrawerItems = function() {
  const body = $('drawerBody');
  const varData = ITEM_VARIANTS[activeDrawerProductId];
  if (!varData) return;

  // Filter items
  const query = drawerSearchQuery.toLowerCase();
  const filtered = varData.items.filter(item => {
    const matchesBrand = drawerActiveBrand === 'All' || item.brand === drawerActiveBrand;
    const matchesSearch = item.name.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query);
    return matchesBrand && matchesSearch;
  });

  if (filtered.length === 0) {
    body.innerHTML = `
      <div style="text-align:center; padding: 40px; color: var(--text-muted);">
        <p>No variants found matching filter</p>
      </div>
    `;
    return;
  }

  body.innerHTML = filtered.map(item => {
    const cartItem = cart.find(c => c.id === item.id);
    const qtyInCart = cartItem ? cartItem.qty : 0;

    return `
      <div class="drawer-variant-card">
        <img class="drawer-var-img" src="${item.img}" alt="${item.name}" 
          onerror="this.style.background='var(--bg3)';this.src=''" />
        <div class="drawer-var-info">
          <span class="drawer-var-brand">${item.brand}</span>
          <span class="drawer-var-name" title="${item.name}">${item.name}</span>
          <div class="drawer-var-pricing">
            <span class="drawer-var-price">${formatPrice(item.price)}</span>
            ${item.mrp > item.price ? `<span class="drawer-var-mrp">${formatPrice(item.mrp)}</span>` : ''}
          </div>
        </div>
        <div class="drawer-add-btn-container">
          ${qtyInCart > 0 ? `
            <div class="drawer-qty-selector">
              <button class="drawer-qty-btn" onclick="changeCartQty('${item.id}', -1)">−</button>
              <span class="drawer-qty-num">${qtyInCart}</span>
              <button class="drawer-qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
            </div>
          ` : `
            <button class="drawer-add-action-btn" onclick="addToCart('${item.id}')">
              + Add
            </button>
          `}
        </div>
      </div>
    `;
  }).join('');

  updateDrawerFooter();
};

function updateDrawerFooter() {
  const varData = ITEM_VARIANTS[activeDrawerProductId];
  if (!varData) return;

  // Calculate sum of active variants currently in cart
  const variantIds = varData.items.map(v => v.id);
  const totalAmt = cart
    .filter(c => variantIds.includes(c.id))
    .reduce((sum, item) => sum + (item.price * item.qty), 0);

  $('drawerTotalPrice').textContent = formatPrice(totalAmt);
}

/* ============================================================
   CART LOGIC
   ============================================================ */
function addToCart(id) {
  let item = null;
  let isVariant = typeof id === 'string';

  if (isVariant) {
    // Find variant details
    for (const mainId in ITEM_VARIANTS) {
      const found = ITEM_VARIANTS[mainId].items.find(v => v.id === id);
      if (found) {
        item = found;
        // Automatically save this selection as active for the main card display
        selectedVariants[mainId] = id;
        break;
      }
    }
  } else {
    item = MENU_ITEMS.find(i => i.id === id);
  }

  if (!item) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, img: item.img, price: item.price, qty: 1 });
  }

  updateCartUI();
  if (activeDrawerProductId) {
    renderDrawerItems();
  } else {
    renderMenu();
  }
  showToast(`${item.name} added to cart!`, item.img, 'success');
}

function removeCartItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  if (activeDrawerProductId) renderDrawerItems();
  renderMenu();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeCartItem(id);
  } else {
    updateCartUI();
    if (activeDrawerProductId) renderDrawerItems();
    renderMenu();
  }
}

function clearCart() {
  cart = [];
  updateCartUI();
  if (activeDrawerProductId) renderDrawerItems();
  renderMenu();
  showToast('Cart cleared', '', 'error');
}

function updateCartUI() {
  const badge    = $('cartBadge');
  const list     = $('cartList');
  const empty    = $('cartEmpty');
  const footer   = $('cartFooter');
  const subtotal = $('cartSubtotal');
  const total    = $('cartTotal');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalAmt = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Badge
  badge.textContent = totalQty;
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);

  if (cart.length === 0) {
    empty.style.display  = 'block';
    list.innerHTML       = '';
    footer.style.display = 'none';
    return;
  }
  empty.style.display  = 'none';
  footer.style.display = 'flex';

  list.innerHTML = cart.map(item => `
    <li class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}"
        onerror="this.style.background='var(--bg3)';this.src=''" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)} × ${item.qty} = ${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', -1)">−</button>
        <span class="cart-qty-num">${item.qty}</span>
        <button class="cart-qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
      </div>
      <button class="cart-item-del" onclick="removeCartItem('${item.id}')" title="Remove">✕</button>
    </li>
  `).join('');

  subtotal.textContent = formatPrice(totalAmt);
  total.textContent    = formatPrice(totalAmt);
}

/* ============================================================
   CART SIDEBAR
   ============================================================ */
function openCart()  {
  $('cartSidebar').classList.add('open');
  $('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ============================================================
   PLACE ORDER
   ============================================================ */
function placeOrder() {
  if (cart.length === 0) { showToast('Your cart is empty!', '', 'error'); return; }
  closeCart();
  $('orderModal').classList.remove('hidden');
}

/* ============================================================
   FILTERS
   ============================================================ */
function initFilters() {
  $('searchBar').addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });
  $('categoryTabs').querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      qsa('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderMenu();
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  $('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name  = $('contactName').value.trim();
    const email = $('contactEmail').value.trim();
    const msg   = $('contactMsg').value.trim();
    if (!name || !email || !msg) { showToast('Please fill in all fields!', '', 'error'); return; }
    $('formSuccess').classList.remove('hidden');
    $('contactForm').reset();
    showToast('Message sent! We\'ll be in touch soon.', '', 'success');
    setTimeout(() => $('formSuccess').classList.add('hidden'), 5000);
  });
}

/* ============================================================
   GLOBAL SECTION REVEAL
   ============================================================ */
function initGlobalReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  qsa('.xerox-card, .contact-card, .about-feat, .section-header, .search-bar-wrapper, .category-tabs').forEach(el => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
    obs.observe(el);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initSlideshow();
  updateFeaturedCard(0);
  renderMenu();
  initFilters();
  initContactForm();
  initGlobalReveal();
  updateCartUI();
  updateActiveNavLink();

  // Cart buttons
  $('cartBtn').addEventListener('click', openCart);
  $('cartClose').addEventListener('click', closeCart);
  $('cartOverlay').addEventListener('click', closeCart);
  $('placeOrderBtn').addEventListener('click', placeOrder);
  $('clearCartBtn').addEventListener('click', clearCart);
  $('orderOkBtn').addEventListener('click', () => {
    cart = [];
    updateCartUI();
    $('orderModal').classList.add('hidden');
    showToast('Thank you for your order! See you soon.', '', 'success');
  });

  // Variant drawer done/close buttons
  $('variantClose').addEventListener('click', closeVariantDrawer);
  $('variantOverlay').addEventListener('click', closeVariantDrawer);
  $('drawerDoneBtn').addEventListener('click', closeVariantDrawer);

  // Featured add btn initial data
  const btn = $('featuredAddBtn');
  if (btn) btn.dataset.fid = 1;
});
