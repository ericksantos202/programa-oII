class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = 0;
    }
    get descricao() {
        return `${this.nome} - ${this.preco}`;
    }
    set preco(valor) {
        if (valor > 0) {
            this._preco = valor;
        }
    }
}

const p1 = new Produto(
    'Notebook', 3000
);
console.log(p1.nome);

console.log(p1.descricao);

p1.preco = 100;
console.log(p1.preco);