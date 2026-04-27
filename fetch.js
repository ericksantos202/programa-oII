function mostrarUsuarios(lista) {
    lista.forEach(usuario => {
        console.log(`Nome: ${usuario.name} - Email: ${usuario.email}`);
    });
}

async function carregarUsuarios() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!resposta.ok) {
            throw new Error("Erro na requisição");
        }

        const dados = await resposta.json();

        mostrarUsuarios(dados);

    } catch (erro) {
        console.log("Falha:", erro.message);
    }
}

carregarUsuarios();