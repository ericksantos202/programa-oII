class SistemaUsuario {
    #email;
    #senha;

    constructor(nome, email, senha) {
        this.nome = nome;
        this.#email = email;
        this.senha = senha;
    }
    get email() {
        return this.#email;
    }
    set senha(senha) {
        if (senha.length >= 8) {
            this.#senha = senha;
        } else {
            console.log("Senha Inválida. Por favor, crie uma senha com no mín. 8 caracteres.");
        }
    }

    autenticar(senha) {
        if (senha === this.#senha) {
            return true;
        } else {
            return false;
        }
    }
    info() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }

}

let usuario = new SistemaUsuario("Erick", "2005@gmail.com", "2005");

console.log(usuario.info());

console.log(usuario.autenticar("2005erick"));

console.log(usuario.email);

usuario.senha = "novasenha";
console.log(usuario.autenticar("novasenha")); 