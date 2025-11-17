document.addEventListener('DOMContentLoaded', () => {
    const filtroTexto = document.getElementById('filtro-texto');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroSabor = Array.from(document.querySelectorAll('.filter-section:nth-child(3) input[type="checkbox"]'));
    const filtroMarca = Array.from(document.querySelectorAll('.filter-section:nth-child(4) input[type="checkbox"]'));
    const produtos = Array.from(document.querySelectorAll('.produtos .card'));
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebar = document.getElementById('sidebar');

    // Abrir/Fechar sidebar mobile
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Função de filtro
    function filtrarProdutos() {
        const texto = filtroTexto.value.toLowerCase();
        const categoria = filtroCategoria.value.toLowerCase();

        const saboresSelecionados = filtroSabor.filter(cb => cb.checked).map(cb => cb.value.toLowerCase());
        const marcasSelecionadas = filtroMarca.filter(cb => cb.checked).map(cb => cb.value.toLowerCase());

        produtos.forEach(card => {
            const titulo = card.querySelector('.card-titulo').textContent.toLowerCase();

            // Detecta categoria
            const cardCategoria = titulo.includes('whey') ? 'whey' :
                                  titulo.includes('creatina') ? 'creatina' :
                                  titulo.includes('pré') ? 'pre' :
                                  titulo.includes('vitamina') ? 'vitamina' : '';

            // Detecta sabor
            const cardSabor = saboresSelecionados.length > 0
                ? saboresSelecionados.some(sabor => titulo.includes(sabor))
                : true;

            // Detecta marca
            const cardMarca = marcasSelecionadas.length > 0
                ? marcasSelecionadas.some(marca => titulo.includes(marca))
                : true;

            // Detecta texto e categoria
            const textoOK = titulo.includes(texto);
            const categoriaOK = categoria === '' || categoria === cardCategoria;

            if (textoOK && categoriaOK && cardSabor && cardMarca) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Eventos de filtro
    filtroTexto.addEventListener('input', filtrarProdutos);
    filtroCategoria.addEventListener('change', filtrarProdutos);
    filtroSabor.forEach(cb => cb.addEventListener('change', filtrarProdutos));
    filtroMarca.forEach(cb => cb.addEventListener('change', filtrarProdutos));
});
