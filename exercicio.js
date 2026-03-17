const pedidos = [
    { id: 1, val: 100, pago: true},
    { id: 2, val: 50, pago: false},
    { id: 3, val: 300, pago: true},
    { id: 4, val: 170, pago: false}, 
];

//SOMA DE TODOS OS PEDIDOS COM REDUCE//
const total = pedidos.reduce((total, pedido) => {
    if (pedido.pago) {
        return total + pedido.val;
    }
    return total;
}, 0);
console.log(`Total dos pedidos: ${total}.`);