function cadastrarUsuario() {
    var alterarusuario = document.getElementById("alterarusuario").value;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var mudarSenha = document.getElementById("mudarSenha").value;
    var email = document.getElementById("email").value;
    var alterarnome = document.getElementById("alterarnome").value;

    localStorage.setItem(alterarusuario + "mudarSenha", mudarSenha);
    localStorage.setItem(alterarusuario + "nomeEmpresa", nomeEmpresa);
    localStorage.setItem(alterarusuario + "alterarnome", alterarnome);
    localStorage.setItem(alterarusuario + "email", email);

    alert("Usuário cadastrado com sucesso!");
    document.getElementById("mudarSenha").value = "";
    document.getElementById("email").value = "";
    document.getElementById("alterarusuario").value = "";
    document.getElementById("alterarnome").value = "";
    document.getElementById("nomeEmpresa").value = "";
}

document.getElementById("alterarusuario").addEventListener('blur', function (e)  {
    var alterarusuario = document.getElementById("alterarusuario").value;
    var mudarSenha = localStorage.getItem(alterarusuario + "mudarSenha");
    var email = localStorage.getItem(alterarusuario + "email");
    var nomeEmpresa = localStorage.getItem(alterarusuario + "nomeEmpresa");
    var alterarnome = localStorage.getItem(alterarusuario + "alterarnome");

    if (mudarSenha === null || email === null) {
        alert("Usuário não encontrado.");
    } else {
        document.getElementById("mudarSenha").value = mudarSenha;
        document.getElementById("email").value = email;
        document.getElementById("alterarnome").value = alterarnome;
        document.getElementById("nomeEmpresa").value = nomeEmpresa;
    }


document.getElementById("alterarusuario").addEventListener('focus', function (e) {
document.getElementById("alterarusuario").removeEventListener('blur', carregarDados);
})});

function alterarNomeUsuario() {
    var alterarusuario = document.getElementById("alterarusuario").value;
    var nomeEmpresa = document.getElementById("nomeEmpresa").value;
    var mudarSenha = document.getElementById("mudarSenha").value;
    var email = document.getElementById("email").value;
    var alterarnome = document.getElementById("alterarnome").value;

    var mudarSenhaAnterior = localStorage.getItem(alterarusuario + "mudarSenha");
    var nomeEmpresaAnterior = localStorage.getItem(alterarusuario + "nomeEmpresa");
    var alterarnomeAnterior = localStorage.getItem(alterarusuario + "alterarnome");
    var emailAnterior = localStorage.getItem(alterarusuario + "email");

    if (mudarSenhaAnterior === null || emailAnterior === null) {
        alert("Usuário não encontrado.");
    } else {
        localStorage.removeItem(alterarusuario + "mudarSenha");
        localStorage.removeItem(alterarusuario + "email");
        localStorage.removeItem(alterarusuario + "alterarnome");
        localStorage.removeItem(alterarusuario + "nomeEmpresa");

        localStorage.setItem(alterarusuario + "mudarSenha", mudarSenha);
        localStorage.setItem(alterarusuario + "email", email);
        localStorage.setItem(alterarusuario + "alterarnome", alterarnome);
        localStorage.setItem(alterarusuario + "nomeEmpresa", nomeEmpresa);

        alert("Nome de usuário alterado com sucesso!");
        document.getElementById("alterarnome").value = "";
        document.getElementById("mudarSenha").value = "";
        document.getElementById("email").value = "";
        document.getElementById("alterarusuario").value = "";
        document.getElementById("nomeEmpresa").value = "";
    }
}





