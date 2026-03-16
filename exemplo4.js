//sort//
//const nums = [2, 100, 59]; nums.sort((a, b) => a - b); console.log(nums);//

const produtos = [{nome: 'Teclado', valor: 150},
    {nome: 'Mouse', valor: 50},
    {nome: 'Monitor', valor: 800},];

produtos.sort((a, b) => { return a.preço - b.preço;});
console.log(produtos);