
// para conseguirmos escalar com os produtos, essa função vai redenrizar o tanto de itens da lista em produtos.js
// apenas é preciso adicioinar as informações e endereços das imagens

function abrirProduto(id) {
    window.location.href = `VerMaisProdutos.html?id=${id}`;
}


function renderizarProdutos(lista) {
    const container = document.querySelector(".produtos");
    container.innerHTML = ""; 

    lista.forEach(produto => {
        const li = document.createElement("li");
        li.classList.add("card");

        li.innerHTML = `
            <div class="card-img-container">
                <img class="card-img" src="${produto.img}" alt="${produto.nome}">
            </div>

            <div class="card-content">
                <h3 class="card-titulo">${produto.nome}</h3>
                <div class="card-preco-container">
                    <p class="card-preco">R$ ${produto.preco.toFixed(2)}</p>
                </div>
            </div>

            <button class="card-btn" onclick="abrirProduto(${produto.id})">Ver detalhes</button>
        `;

        container.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos(produtos);
});





