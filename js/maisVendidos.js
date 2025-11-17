const products = [
    { id: 1, name: "Whey Protein Concentrado Max Titanium 900g", category: "whey", image: "/img/produtos/1e2.jpg" },
    { id: 2, name: "CREATINA MAX TITANIUM 300G", category: "creatina", image: "/img/produtos/1.jpg" },
    { id: 3, name: "HÓRUS PRÉ WORKOUT 300G", category: "pre-treino", image: "/img/produtos/2.jpg" },
    { id: 4, name: "PANIC PRE WORKOUT 300G", category: "pre-treino", image: "/img/produtos/3.jpg" },
    { id: 5, name: "WHEY DUX CONCENTRADO 900G", category: "whey", image: "/img/produtos/4.jpg" },
    { id: 6, name: "DR. PEANUT 600G", category: "whey", image: "/img/produtos/5.jpg" },
    { id: 7, name: "TASTY WHEY ADAPTOGEN 900G", category: "whey", image: "/img/produtos/6.jpg" },
    { id: 8, name: "BLACK MACA COLOR ANDINA 60 CAPS", category: "vitaminas", image: "/img/produtos/7.jpg" },
    { id: 9, name: "100% PURE WHEY ZERO LACTOSE", category: "whey", image: "/img/produtos/8.jpg" },
    { id: 10, name: "Creatina Dark Lab", category: "creatina", image: "/img/produtos/9.jpg" },
    { id: 11, name: "Creatina Lion 300g", category: "creatina", image: "/img/produtos/010.jpg" },
    { id: 12, name: "Creatina 3VS 300g", category: "creatina", image: "/img/produtos/011.jpg" }
];

const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';
let filteredProducts = [...products];
let scrollIndex = 0;

// Render dos produtos no carrossel
function renderCarousel() {
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <h3 class="product-title">${product.name}</h3>
        `;
        productsGrid.appendChild(card);
    });
}

// Filtrar produtos
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filteredProducts = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);
        scrollIndex = 0;
        renderCarousel();
    });
});

// Scroll automático do carrossel
function autoScrollCarousel() {
    const cardWidth = productsGrid.querySelector('.product-card')?.offsetWidth || 300;
    scrollIndex += 1;
    if (scrollIndex > filteredProducts.length - 1) scrollIndex = 0;
    productsGrid.scrollTo({
        left: scrollIndex * (cardWidth + 30),
        behavior: 'smooth'
    });
}

// Inicializar
renderCarousel();
setInterval(autoScrollCarousel, 4000);

// Botões de navegação
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', () => {
    const cardWidth = productsGrid.querySelector('.product-card')?.offsetWidth || 300;
    scrollIndex -= 1;
    if (scrollIndex < 0) scrollIndex = filteredProducts.length - 1;
    productsGrid.scrollTo({
        left: scrollIndex * (cardWidth + 30),
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    const cardWidth = productsGrid.querySelector('.product-card')?.offsetWidth || 300;
    scrollIndex += 1;
    if (scrollIndex > filteredProducts.length - 1) scrollIndex = 0;
    productsGrid.scrollTo({
        left: scrollIndex * (cardWidth + 30),
        behavior: 'smooth'
    });
});
