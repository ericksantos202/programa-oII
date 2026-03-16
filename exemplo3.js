const logs = ['ok', 'erro', 'ok', 'ok', 'erro'];
const contagem = logs.reduce((acc, item) => {
    if (acc[item]) {
        acc[item] += 1;
    } else {
        acc[item]= 1;
    }
    return acc;
}, {});

console.log(contagem);