const produtos = [
  { id: 1, nome: "Arroz 5kg", categoria: "Alimentos", preco: 32.90, estoque: 14, vendidos: 23 },
  { id: 2, nome: "Feijão 1kg", categoria: "Alimentos", preco: 8.50, estoque: 9, vendidos: 31 },
  { id: 3, nome: "Leite Integral", categoria: "Bebidas", preco: 5.99, estoque: 20, vendidos: 42 },
  { id: 4, nome: "Café 500g", categoria: "Alimentos", preco: 18.75, estoque: 7, vendidos: 18 },
  { id: 5, nome: "Açúcar 1kg", categoria: "Alimentos", preco: 4.89, estoque: 0, vendidos: 27 },
  { id: 6, nome: "Óleo de Soja", categoria: "Alimentos", preco: 7.49, estoque: 11, vendidos: 25 },
  { id: 7, nome: "Sabonete", categoria: "Higiene", preco: 2.99, estoque: 16, vendidos: 35 },
  { id: 8, nome: "Detergente", categoria: "Limpeza", preco: 3.49, estoque: 13, vendidos: 29 },
  { id: 9, nome: "Papel Higiênico 12un", categoria: "Limpeza", preco: 16.90, estoque: 6, vendidos: 14 },
  { id: 10, nome: "Shampoo", categoria: "Higiene", preco: 12.99, estoque: 8, vendidos: 17 },
  { id: 11, nome: "Biscoito Recheado", categoria: "Alimentos", preco: 3.25, estoque: 25, vendidos: 40 },
  { id: 12, nome: "Refrigerante 2L", categoria: "Bebidas", preco: 9.99, estoque: 10, vendidos: 22 },
  { id: 13, nome: "Macarrão 500g", categoria: "Alimentos", preco: 4.50, estoque: 18, vendidos: 33 },
  { id: 14, nome: "Água Mineral 1,5L", categoria: "Bebidas", preco: 2.50, estoque: 30, vendidos: 50 },
  { id: 15, nome: "Chocolate Barra", categoria: "Alimentos", preco: 6.75, estoque: 12, vendidos: 21 }
];

//ATIVIDADE 2 = NOVO ARRAY-NOMES DOS PRODUTOS//
let ArraydeNomes = produtos.map(produto => produto.nome);
console.log(`ATIVIDADE 2: ARRAY COM PRODUTOS: ${ArraydeNomes}`);

//ATIVIDADE 3 = LISTE PRODUTOS MAIORES QUE 0//
let produtosdisponiveis = produtos
.filter(produto => produto.estoque > 0)
.map(produto => produto.nome);
console.log(`ATIVIDADE 3: PRODUTOS EM ESTOQUE = ${produtosdisponiveis}`);

//ATIVIDADE 4 = LISTE APENAS CATEGORIA ALIMENTOS//
let categoriaAlimentos = produtos
.filter(produto => produto.categoria === "Alimentos")
.map(produto => produto.nome);
console.log(`ATIVIDADE 4: CATEGORIA ALIMENTOS = ${categoriaAlimentos}`);

//ATIVIDADE 5 = BUSCAR O PRODUTO CAFÉ E EXIBIR COMPLETO//
let apenascafe = produtos.find(u => u.id === 4);
console.log("ATIVIDADE 5: PRODUTO CAFÉ COMPLETO =", apenascafe);

//ATIVIDADE 6 = NOVO ARRAY (NOME, PREÇO E 10% DESCONTO)//
let novoArray = produtos.map(produto => {
  return {
    nome: produto.nome,
    precoorigem: produto.preco,
    precodesconto: produto.preco * 0.90
  };
});
console.log('ATIVIDADE 6: NOVO ARRAY COM DESCONTO =', novoArray);