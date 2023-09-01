/*
A Agenda de Contatos é uma aplicação que permite aos usuários armazenar, visualizar, editar e excluir informações de
contatos pessoais. Cada contato será representado como um objeto, contendo atributos como nome, número de telefone,
endereço de e-mail e outros detalhes relevantes. Os alunos deverão criar uma interface interativa que permita ao usuário
realizar operações básicas de gerenciamento de contatos

Principais Funcionalidades
1. Adicionar novo contato com informações como nome, telefone, e-mail, etc.
2. Visualizar a lista de contatos cadastrados de forma organizada
3. Editar os detalhes de um contato existente
4. Excluir um contato da lista
5. Pesquisar contatos por nome

Requisitos Funcionais
1. Criação, listagem e manipulação dos contatos
2. Implementação de métodos para ações específicas dos contatos 
3. Opção de interface de linha de comando ou HTML/CSS para interação com a lista de contatos
---------------------------------------------
Todo
1- Adicionar contato
*2- Visualizar lista 
3- Editar contato
4- Excluir Contato
5- Pesquisar Contato

? Ideias 
3 botões principais, adicionar contato, visualizar lista, pesquisar contato
quando o usuário pesquisar mostrará a lista com os resultados e 2 opções:
selecionar contato 
*/
const prompt = require("prompt-sync") ({sigint: false});

class Contato {
    constructor(nome, telefone, email) {
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
    }
    atualizarNome() {}
    atualizarEmail() {}
    atualizarTelefone() {}

    _verificarNome() {}
    _verificarEmail() {}
    _verificarTelefone() {}
}

const listaDeContatos = {
    _lista: [],
    visualizarLista: function() {
        console.log("---------------------------------");
        for (let contato of this._lista) {
            console.log(`\nTelefone: ${contato._telefone}\nNome: ${contato._nome}\nE-mail: ${contato._email}\n`);
        }
        console.log("---------------------------------");
    },
    editarContato: function() {},
    excluirContato: function() {},
    pesquisarContato: function() {},
    adicionarContato: function() {}
};

let opcao = 0;
let nome, telefone, email;

while (opcao != 6) {
    console.log('\n'+
    '1- Adicionar contato\n'+
    '2- Visualizar lista\n'+
    '3- Editar contato\n'+
    '4- Excluir Contato\n'+
    '5- Pesquisar Contato\n'+
    '6- Sair'
    );
    opcao = parseInt(prompt('>>'));
    switch (opcao) {
        case 1:

            break;
        case 2:
            listaDeContatos.visualizarLista();
            break;
        case 3:
    
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            console.log("Saindo do Sistema...");
            break;
        default:
            console.log(`A opção ${opcao} é inválida!!!`);
    }
}
