//objeto lampada//
const Lampada = {
    cor: 'azul',
    ligada: false,

    mostrarEstado() {
        if (this.ligada) {
            console.log('Lâmpada ligada');
        } else {
            console.log('Lâmpada desligada');
        }
    }
};

//exibir cor//
console.log('Cor da lâmpada:', Lampada.cor);
console.log()//linha em branco//

//mostrar estado//
console.log('Primeiro teste:');
Lampada.mostrarEstado();
console.log()//linha em branco//

/////////////////////////////////////////////

console.log('Segundo teste com true:');

//alterar para true//
Lampada.ligada = true;

//teste novo//
Lampada.mostrarEstado();
