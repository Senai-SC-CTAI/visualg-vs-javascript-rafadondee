const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");


let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";

    if (bancoDeDados.length === 0) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./logado/home.html"
                break;
            }
        }
    }
    alert(mensagem);
}

function cadastra() {
    if (verificaSeExiste(campoNovoLogin.value, bancoDeDados)) {
        alert("Já existe um usuário com esse login seu bobão!");
    } else if (campoNovaSenha.value === campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("As senhas nao coincidem!");
    }
}

function verificaSeExiste(login, bancoDeDados) {
    for (let usuario of bancoDeDados) {
        if (usuario.login === login) {
            return true;
        }
    }
    return false;
}
