// Declaração da variável bancoDeDados
let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || [];

const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    const login = campoLogin.value;
    const senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    
    // Lógica para verificar as credenciais de login
    const usuarioEncontrado = bancoDeDados.find(usuario => usuario.login === login && usuario.senha === senha);
    
    if (usuarioEncontrado) {
        mensagem = "Boa, você logou!";
        localStorage.setItem("logado", JSON.stringify(usuarioEncontrado));
        window.location.href = "./logado/home.html";
    }
    
    alert(mensagem);
}

function cadastra() {
    // Verifica se o usuário já existe
    if (verificaSeExiste(campoNovoLogin.value, bancoDeDados)) {
        alert("Já existe um usuário com esse login!");
    } else if (campoNovaSenha.value === campoRepSenha.value) {
        const novoUsuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
        
        bancoDeDados.push(novoUsuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        
        alert("Usuário cadastrado com sucesso!");
    } else {
        alert("As senhas são diferentes!");
    }
}

// Função para verificar se um usuário já existe no banco de dados
function verificaSeExiste(login, bancoDeDados) {
    return bancoDeDados.some(usuario => usuario.login === login);
}
