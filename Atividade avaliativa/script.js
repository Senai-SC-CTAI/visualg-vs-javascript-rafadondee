// Declarando variáveis globais
let alunos = [];

// Evento disparado quando o DOM é carregado
document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar dados na tabela
    carrega();

    // Elementos do modal novo estudantes
    let btnNovoEstudante = document.getElementById("btnNovoEstudante");
    let modalNovoEstudante = document.getElementById("modalNovoEstudante");
    let spanNovoEstudante = modalNovoEstudante.querySelector(".close");

    // Configurando eventos do modal novo estudante
    btnNovoEstudante.onclick = function () {
        modalNovoEstudante.style.display = "block";
    };

    spanNovoEstudante.onclick = function () {
        modalNovoEstudante.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modalNovoEstudante) {
            modalNovoEstudante.style.display = "none";
        }
    };

    // Adicionando eventos aos botões da tabela
    let botoes = document.querySelectorAll('.btn-info');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            modal(this);
        };
    }
});

// Função para identificar estudantes por turma
function identifica(nome) {
    for (let estudantes of alunos) {
        if (estudantes.nome === nome.id) {
            return estudantes;
        }
    }
    return null;
}

// Função para exibir modal de informações do estudante
function modal(button) {
    let estudantes = identifica(button);

    let modal = document.getElementById("myModal");

    if (!modal) {
        console.error("Elemento 'myModal' não encontrado no DOM");
        return;
    }

    let span = modal.querySelector(".close");
    if (!span) {
        console.error("Elemento 'close' não encontrado no DOM");
        return;
    }

    // Elementos do modal de informações do estudantes
    let nomeModal = modal.querySelector("#nomeModal");
    let turmaModal = modal.querySelector("#turmaModal");
    let conceito1Modal = modal.querySelector("#conceito1Modal");
    let conceito2Modal = modal.querySelector("#conceito2Modal");
    let conceito3Modal = modal.querySelector("#conceito3Modal");
    let comportamentoModal = modal.querySelector("#comportamentoModal");
    let btnExcluirEstudante = modal.querySelector("#btnExcluirEstudante");

    if (!nomeModal || !turmaModal || !conceito1Modal || !conceito2Modal || !conceito3Modal || !comportamentoModal || !btnExcluirEstudante) {
        console.error("Elementos não encontrados no DOM");
        return;
    }

    // Preenchendo informações no modal
    nomeModal.innerHTML = estudantes.nome;
    turmaModal.innerHTML = estudantes.turma;
    conceito1Modal.innerHTML = estudantes.conceito1;
    conceito2Modal.innerHTML = estudantes.conceito2;
    conceito3Modal.innerHTML = estudantes.conceito3;
    comportamentoModal.innerHTML = estudantes.comportamento;

    // Configurando o botão de excluir
    btnExcluirEstudante.onclick = function () {
        excluirEstudante(estudantes.nome);
        modal.style.display = "none";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modal.style.display = "block";
}

// Função para excluir estudantes
function excluirEstudante(nome) {
    alunos = alunos.filter(estudantes => estudantes.nome !== nome);
    localStorage.setItem("alunos", JSON.stringify(alunos));
    carrega();
}

// Função para carregar dados na tabela
function carrega() {
    let tabela = document.getElementById("carros");
    alunos = JSON.parse(localStorage.getItem("alunos")) || [];

    tabela.innerHTML = "";

    for (let estudantes of alunos) {
        let botaoid = `<td><button id='${estudantes.nome}' class='btn-info'>Mais info</button></td>`;
        let linha = `<tr>
            <td>${estudantes.nome}</td>
            <td>${estudantes.turma}</td>
            <td>${estudantes.conceito1}</td>
            <td>${estudantes.conceito2}</td>
            <td>${estudantes.conceito3}</td>
            <td>${estudantes.comportamento}</td>
            ${botaoid}</tr>`;
        tabela.innerHTML += linha;
    }

    // Adicionando eventos aos botões da tabela
    let botoes = document.querySelectorAll('.btn-info');
    for (let i = 0; i < botoes.length; i++) {
        botoes[i].onclick = function () {
            modal(this);
        };
    }
}

// Função para cadastrar novo estudantes
function cadastrarEstudante() {
    let nome = document.getElementById("nome").value;
    let turma = document.getElementById("turma").value;
    let conceito1 = document.getElementById("conceito1").value;
    let conceito2 = document.getElementById("conceito2").value;
    let conceito3 = document.getElementById("conceito3").value;
    let comportamento = document.getElementById("comportamento").value;

    // Verifica se a nome já está cadastrada
    if (estudanteExistente(nome)) {
        alert("nome já cadastrado. Insira um nome único.");
        return;
    }

    let novoEstudante = {
        nome: nome,
        turma: turma,
        conceito1: conceito1,
        conceito2: conceito2,
        conceito3: conceito3,
        comportamento: comportamento,
    };

    alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(novoEstudante);

    // Salva no localStorage
    localStorage.setItem("alunos", JSON.stringify(alunos));

    // Recarrega a tabela após cadastrar um novo estudantes
    carrega();

    // Esconde o modal de novo estudantes
    modalNovoEstudante.style.display = "none";
}

// Função para verificar se o estudantes já existe
function estudanteExistente(nome) {
    return alunos.some(estudantes => estudantes.nome === nome);
}

// botao que volta pro home
function botaoquevolta(){
    window.location.href= "../logado/home.html"
}