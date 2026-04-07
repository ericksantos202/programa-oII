const fs = require('node:fs');
const path = require('node:path');

const caminhoExemplo = path.join(
    __dirname,
    'exemplo.json'
);


try {
    const jsonString = fs.readFileSync(caminhoExemplo, 'utf-8');
   const obj = JSON.parse(jsonString);
  const dadosBasicos = {
    nome: obj.nome,
    idade: obj.idade,
  };
  console.log(JSON.stringify(dadosBasicos));

} catch (erro) {
    console.error('JSON inválido:', erro.message);
}