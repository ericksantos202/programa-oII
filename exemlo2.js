const pedidos = [{ id: 1, valor: 100}, { id:2, valor: 50}, {id:3, valor: 200}]; 
const total = pedidos.reduce((acc, pedido) => {
    return acc + pedido.valor;
}, 0);
console.log(total);