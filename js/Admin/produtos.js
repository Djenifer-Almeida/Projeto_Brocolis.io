//Isso funciona como um banco de dados, como o sistema nao possui banco
//optamos por incluir um array em formato json, dai podemos ter algo mais modular
const produtos = [
  { 
    id: 1, 
    nome: "CREATINA MAX TITANIUM 300G", 
    preco: 99.90, 
    img: "img/produtos/1.jpg",
    imgAux: [
      "img/auxiliares/1_1.jpg",
      "img/auxiliares/1_2.jpg",
      "img/auxiliares/1_3.jpg"
    ],
    descricao: "Creatina monohidratada da Max Titanium, ideal para aumento de força, explosão muscular e melhor desempenho no treino."
  },

  { 
    id: 2, 
    nome: "100% WHEY MAX TITANIUM 900G", 
    preco: 139.90, 
    img: "img/produtos/1e2.jpg",
    imgAux: [
      "img/auxiliares/2_1.jpg",
      "img/auxiliares/2_2.jpg",
      "img/auxiliares/2_3.jpg"
    ],
    descricao: "Whey concentrado 100% puro da Max Titanium. Rico em aminoácidos essenciais e excelente para recuperação muscular."
  },

  { 
    id: 3, 
    nome: "HÓRUS PRÉ WORKOUT 300G", 
    preco: 124.90, 
    img: "img/produtos/2.jpg",
    imgAux: [
      "img/auxiliares/3_1.jpg",
      "img/auxiliares/3_2.jpg",
      "img/auxiliares/3_3.jpg"
    ],
    descricao: "Pré-treino Hórus com alta potência energética, foco intenso e aumento de desempenho em treinos pesados."
  },

  { 
    id: 4, 
    nome: "PANIC PRE WORKOUT 300G", 
    preco: 134.90, 
    img: "img/produtos/3.jpg",
    imgAux: [
      "img/auxiliares/4_1.jpg",
      "img/auxiliares/4_2.jpg"
    ],
    descricao: "O pré-treino Panic oferece energia extrema, sensação de pump e foco elevado para treinos intensos."
  },

  { 
    id: 5, 
    nome: "WHEY DUX CONCENTRADO 900G", 
    preco: 199.90, 
    img: "img/produtos/4.jpg",
    imgAux: [
      "img/auxiliares/5_1.jpg",
      "img/auxiliares/5_2.jpg"
    ],
    descricao: "Whey concentrado da DUX, alta pureza e excelente perfil nutricional para ganho de massa e recuperação muscular."
  },

  { 
    id: 6, 
    nome: "DR. PEANUT 600G", 
    preco: 59.90, 
    img: "img/produtos/5.jpg",
    imgAux: [
      "img/auxiliares/6_1.jpg",
      "img/auxiliares/6_2.jpg"
    ],
    descricao: "Pasta de amendoim cremosa Dr. Peanut, rica em proteínas e ideal para dietas balanceadas."
  },

  { 
    id: 7, 
    nome: "TASTY WHEY ADAPTOGEN 900G", 
    preco: 199.90, 
    img: "img/produtos/6.jpg",
    imgAux: [
      "img/auxiliares/7_1.jpg"
    ],
    descricao: "Whey protein saboroso da Adaptogen, com excelente nível de absorção e textura cremosa."
  },

  { 
    id: 8, 
    nome: "BLACK MACA COLOR ANDINA 60 CAPS", 
    preco: 89.90, 
    img: "img/produtos/7.jpg",
    imgAux: [
      "img/auxiliares/8_1.jpg"
    ],
    descricao: "Maca peruana concentrada para energia, libido, resistência física e vitalidade diária."
  },

  { 
    id: 9, 
    nome: "100% PURE WHEY ZERO LACTOSE", 
    preco: 189.90, 
    img: "img/produtos/8.jpg",
    imgAux: [
      "img/auxiliares/9_1.jpg",
      "img/auxiliares/9_2.jpg"
    ],
    descricao: "Whey zero lactose com alta digestibilidade, ideal para intolerantes e quem busca alta performance."
  },

  { 
    id: 10, 
    nome: "Creatina Dark Lab", 
    preco: 85.00, 
    img: "img/produtos/9.jpg",
    imgAux: [
      "img/auxiliares/10_1.jpg"
    ],
    descricao: "Creatina Dark Lab pura e micronizada, perfeita para força e explosão muscular."
  },

  { 
    id: 11, 
    nome: "Creatina Lion 300g", 
    preco: 99.90, 
    img: "img/produtos/010.jpg",
    imgAux: [
      "img/auxiliares/11_1.jpg"
    ],
    descricao: "Creatina Lion, alta performance com rápida absorção para treinos mais intensos."
  },

  { 
    id: 12, 
    nome: "Creatina 3VS 300g", 
    preco: 89.90, 
    img: "img/produtos/011.jpg",
    imgAux: [
      "img/auxiliares/12_1.jpg"
    ],
    descricao: "Creatina 3VS monohidratada, ideal para ganho de força, potência e resistência muscular."
  }
];
