let form = document.querySelector('#form');
let nomeEmpresa = document.querySelector("#nomeEmpresa");
let cnpj = document.querySelector("#cnpj");
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
let newUser = document.querySelector("#newUser");
let cadastrarSenha = document.querySelector("#cadastrarSenha");
let excluir = document.querySelector("#excluir");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
let mudarSenha = document.querySelector("#mudarSenha");
let LabelmudarSenha = document.querySelector("#LabelmudarSenha");
let confirmPassword = document.querySelector("#confirmPassword");
let LabelconfirmPassword = document.querySelector("#LabelconfirmPassword");
let alterarnome = document.querySelector("#alterarnome");
let Labelalterarnome = document.querySelector("#Labelalterarnome");
let alterarusuario = document.querySelector("#alterarusuario");
let Labelalterarusuario = document.querySelector("#Labelalterarusuario");

// Recuperar dados do usuário do localStorage
let user = JSON.parse(localStorage.getItem('user')) || {};

// Preencher os campos de entrada com os valores existentes
nomeEmpresa.value = user.novoNomeEmpresa || '';
cnpj.value = user.novoCNPJ || '';
newUser.value = user.novoUser || '';
cadastrarSenha.value = user.novaSenha || '';
excluir.value = user.excluirMembro || '';
password.value = user.senhaadmim || '';
email.value = user.novoEmail || '';
mudarSenha.value = user.alterarSenha || '';
confirmPassword.value = user.confirmSenha || '';
alterarnome.value = user.novoNomeUsuario || '';
alterarusuario.value = user.novoUsuario || '';

mudarSenha.addEventListener('keyup', () => {
    if (mudarSenha.value.length < 5) {
        LabelmudarSenha.setAttribute('style', 'color: red');
        LabelmudarSenha.innerHTML = 'Insira no mínimo 5 caracteres';
        mudarSenha.setAttribute('style', 'border: solid 2px red');
    } else {
        LabelmudarSenha.setAttribute('style', 'color: green');
        LabelmudarSenha.innerHTML = 'Senha OK';
        mudarSenha.setAttribute('style', 'border: solid 2px green');
    }
});

// Restante do código...

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Restante do código...

    // Atualizar os dados do usuário
    user.novoNomeEmpresa = nomeEmpresa.value.trim();
    user.novoCNPJ = cnpj.value.trim();
    user.novoUser = newUser.value.trim();
    user.novaSenha = cadastrarSenha.value.trim();
    user.excluirMembro = excluir.value.trim();
    user.senhaadmim = password.value.trim();
    user.novoEmail = email.value.trim();
    user.alterarSenha = mudarSenha.value.trim();
    user.novoNomeUsuario = alterarnome.value.trim();
    user.novoUsuario = alterarusuario.value.trim();
    user.confirmSenha = confirmPassword.value.trim() || null;

    // Salvar os dados atualizados no localStorage
    localStorage.setItem('user', JSON.stringify(user));

    alert('Configurações salvas com sucesso!');
    window.location.href = 'perfil.html';
});




function logout() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}

if (localStorage.getItem('token') === null) {

    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'login.html'

} else {
    window.onload = function () {
    }

}