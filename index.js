const fs = require('node:fs');
const path = require('node:path');

const CaminhoExemplo = path.join(
    __dirname,
    'exemplo.json'
);

const jsonString = fs.readFileSync(
    CaminhoExemplo,
    'utf-8'
);

try {
    const obj = JSON.parse(jsonString);

    const dadosBasicos = {
        nome: obj.nome,
        idade: obj.idade,
    };

    console.log(JSON.stringify(dadosBasicos));

} catch (erro) {
    console.error('JSON inválido', erro);
}