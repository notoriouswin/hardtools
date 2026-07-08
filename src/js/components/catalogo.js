const produtos = [
    {
        nome: "SUPORTES",
        categoria: "HARD-TOOLS",
        descricao: "Suportes para operações de torneamento interno e externo.",
        imagem: "./src/images/suporte.png",
        tags: [
            "TORNEAMENTO INTERNO",
            "TORNEAMENTO EXTERNO",
        ]
    },

    {
        nome: "BARRA",
        categoria: "HARD-TOOLS",
        descricao: "em breve",
        imagem: "./src/images/barra.png",
        tags: [
            "tag 1",
            "tag 2",
        ]
    },

    {
        nome: "BROCA",
        categoria: "HARD-TOOLS",
        descricao: "em breve",
        imagem: "./src/images/broca.png",
        tags: [
            "tag 1",
            "tag 2",
        ]
    },

    {
        nome: "FRESA",
        categoria: "HARD-TOOLS",
        descricao: "em breve",
        imagem: "./src/images/fresa.png",
        tags: [
            "tag 1",
            "tag 2",
        ]
    },

    {
        nome: "INSERTO",
        categoria: "HARD-TOOLS",
        descricao: "em breve",
        imagem: "./src/images/inserto.png",
        tags: [
            "tag 1",
            "tag 2",
        ]
    }
];

let current = 0;
// essa funçao atualiza a tela
const elements = {
    title: document.querySelector(".title"),
    categoria: document.querySelector(".categoria"),
    descricao: document.querySelector(".descricao"),
    image: document.querySelector("#imagem-produto"),
    tags: document.querySelector(".tags")
};

function renderProduct(){

        const produto = produtos[current];

        elements.title.textContent = produto.nome;
        elements.categoria.textContent = produto.categoria;
        elements.descricao.textContent = produto.descricao || "";
        elements.image.src = produto.imagem;
        elements.image.alt = produto.nome;
        elements.tags.innerHTML = "";

        produto.tags.forEach(tag => {

            if (tag) {

            const span = document.createElement("span");
            span.textContent = tag;
            elements.tags.appendChild(span);
            }
        });
}

// botões
    const btnNext = document.querySelector("#next");
    const btnPrev = document.querySelector("#prev");

    btnNext.addEventListener("click", () => {
        current++;

        if (current >= produtos.length) {
            current = 0; 
        }

        renderProduct();
    });

    btnPrev.addEventListener("click", () => {
        current--;

        if (current < 0) {
            current = produtos.length - 1;
        }

        renderProduct();

    });
    
    renderProduct();