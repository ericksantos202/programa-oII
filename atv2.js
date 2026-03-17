const produtos = [
{ nome: "Teclado", preco: 120 },
{ nome: "Mouse", preco: 80 },
{ nome: "Monitor", preco: 900 },
{ nome: "Headset", preco: 250 }
];

const ordenado = produtos.sort((a, b) => { return b.preco - a.preco;});
console.log(ordenado);

const total = produtos.reduce((acc, pedido) => {
    return acc + pedido.preco;
}, 0);
console.log(`SOMA DOS ITENS: ${total}.`);