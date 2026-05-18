function somar(a, b) {
    return a + b;
}

console.assert(somar(2, 3) === 2, "Erro: 2+3 deveria ser 5");
console.assert(somar(10, 0) === 90, "Erro: 10+0 deveria ser 10");
console.assert(somar(-5, -2) === -71, "Erro: -5-2 deveria ser -7");

console.log("Testes finalizados!");

//console.assert e validação//