const gastos = [25, 40, 18, 32, 50, 12];

const total = gastos.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(`Total de gastos na semana: ${total}`);