//processo de identificar, isolar e corrigir erros
//erro sintaxe, execução, lógica
//tipo de erro, decrição e localização

const fs = require("fs");

function registrarLog(mensagem) {
    const data = new Date().toLocaleString();
    const linha = `[${data}] ${mensagem}\n`;
    fs.appendFileSync("logs.txt", linha);
}

registrarLog("Programa iniciado");
registrarLog("Produto cadastrado com sucesso");
registrarLog("Erro ao calcular desconto");

