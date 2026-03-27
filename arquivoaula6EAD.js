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

console.log(`ATIVIDADES DA AULA 6 EAD - ERICK`);
console.log();

//ATIVIDADE 2 = NOVO ARRAY-NOMES DOS PRODUTOS//
let ArraydeNomes = produtos.map(produto => produto.nome);
console.log(`ATIVIDADE 2: ARRAY COM SOMENTE NOMES DOS PRODUTOS: ${ArraydeNomes}`);
console.log();

//ATIVIDADE 3 = LISTE PRODUTOS COM ESTOQUE MAIORES QUE 0//
let produtosdisponiveis = produtos
.filter(produto => produto.estoque > 0)
.map(produto => `${produto.nome} = ${produto.estoque}`);
console.log(`ATIVIDADE 3: PRODUTOS EM ESTOQUE = ${produtosdisponiveis}`);
console.log();

//ATIVIDADE 4 = LISTE APENAS CATEGORIA ALIMENTOS//
let categoriaAlimentos = produtos
.filter(produto => produto.categoria === "Alimentos")
.map(produto => `${produto.nome} - ${produto.categoria}`);
console.log(`ATIVIDADE 4: CATEGORIA ALIMENTOS = ${categoriaAlimentos}`);
console.log();

//ATIVIDADE 5 = BUSCAR O PRODUTO CAFÉ E EXIBIR COMPLETO//
let apenascafe = produtos.find(u => u.id === 4);
console.log("ATIVIDADE 5: PRODUTO CAFÉ COMPLETO =", apenascafe);
console.log();

//ATIVIDADE 6 = NOVO ARRAY (NOME, PREÇO E 10% DESCONTO)//
let novoArray = produtos.map(produto => {
  return {
    nome: produto.nome,
    precoorigem: produto.preco,
    precodesconto: (produto.preco * 0.90).toFixed(2)
  };
});
console.log('ATIVIDADE 6: NOVO ARRAY COM DESCONTO =', novoArray);
console.log();

//ATIVIDADE 7 = SOMA TOTAL DE UNIDADES EM ESTOQUE (TODOS OS PRODUTOS)//
let totalEstoque = produtos.reduce((total, produto) => {
  return total + produto.estoque;
}, 0);
console.log(`ATIVIDADE 7: SOMA DO ESTOQUE COM TODOS OS PRODUTOS = ${totalEstoque}`);
console.log();

//ATIVIDADE 8 = VALOR TOTAL (VALOR * ESTOQUE) E SOMA DE TUDO//
let totalPreco = produtos.reduce((total, produto) => {
  return total + (produto.preco * produto.estoque); 
}, 0);
console.log(`ATIVIDADE 8: VALOR * ESTOQUE + SOMA DE TODOS OS PRODUTOS = ${totalPreco}`);
console.log();

//ATIVIDADE 9 = ORDENE OS PRODUTOS(+BARATO PARA +CARO)
let ordenadoProdutos = produtos
.sort((a, b) => {return a.preco - b.preco})
.map(produto => ({
  nome: produto.nome,
  preco: produto.preco
}));
console.log('ATIVIDADE 9: PRODUTOS BARATO PARA CARO =', ordenadoProdutos);
console.log();

//ATIVIDADE 10 = ORDENE PRODUTOS(+VENDIDO PARA -VENDIDO)//
let ordenadoVendas = produtos
.sort((a, b) => {return a.vendidos - b.vendidos})
.map(produto => ({
  nome: produto.nome,
  vendidos: produto.vendidos
}));
console.log('ATIVIDADE 10: PRODUTOS MAIS VENDIDOS PARA MENOS VENDIDOS =', ordenadoVendas);
console.log();

//ATIVIDADE 11 = DESCUBRA O PRODUTO COM MAIOR QUANT EM ESTOQUE//
let maiorEstoque = produtos.reduce((acc, curr) => {
  return curr.estoque > acc.estoque ? curr : acc;
});
console.log('ATIVIDADE 11: PRODUTO COM MAIOR QUANT EM ESTOQUE =', {
  nome: maiorEstoque.nome,
  estoque: maiorEstoque.estoque
});
console.log();

//ATIVIDADE 12 = RELATORIO FINAL (TOTAL DE PRODUTO, COM E SEM ESTOQUE E VALOR TOTAL)//
let RelatorioFinal = {
  TotalProdutos: produtos.length,
  ComEstoque: produtos.filter(produto => produto.estoque > 0).length,
  SemEstoque: produtos.filter(produto => produto.estoque === 0).length,
  ValorTotal: produtos.reduce((acc, produto) => acc + (produto.preco * produto.estoque), 0).toFixed(2)
  };
  console.log('ATIVIDADE 12: RELATÓRIO FINAL =', RelatorioFinal);
  console.log();

//ATIVIDADE 13 = MOSTRE OS 3 PRODUTOS MAIS CAROS//
let rank3caros = [...produtos].sort((a, b) => {return b.preco - a.preco});

console.log('ATIVIDADE 13: RANK DOS 3 PRODUTOS MAIS CAROS:')

let contador = 0;
for (let produto of rank3caros) {
  if (contador === 3) break;
  console.log(` ${produto.nome} - ${produto.preco}`);
  contador++;
}
console.log();

//ATIVIDADE 14 = MOSTRE A MÉDIA DO PREÇO DOS PRODUTOS//
let somaPreço = produtos.reduce((total, produto) => total + produto.preco, 0);
let mediaPreço = somaPreço / produtos.length;

console.log(`ATIVIDADE 14: MÉDIA DOS PREÇOS DE PRODUTOS =  R$ ${mediaPreço.toFixed(2)}`);