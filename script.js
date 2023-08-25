class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    atualizarNome() {}
    atualizarEmail() {}
    atualizarTelefone() {}

    _verificarNome() {}
    _verificarEmail() {}
    _verificarTelefone() {}
}

const listaDeContatos = [];
let opcao = 0;
let nome, telefone, email;

while (opcao != 7) {
    switch (opcao) {
        case 1:

            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            console.log("Saindo do Sistema...");
            break;
        default:
            console.log(`A opção ${opcao} é inválida!!!`);
    }
}
