function cadastrarUsuario() {
    var usuario = document.getElementById("usuario").value;
    var cadastrarSenha = document.getElementById("cadastrarSenha").value;
    var email = document.getElementById("email").value;

    localStorage.setItem(usuario + "cadastrarSenha", cadastrarSenha);
    localStorage.setItem(usuario + "email", email);

    alert("Usuário cadastrado com sucesso!");
    document.getElementById("mudarSenha").value = "";
    document.getElementById("email").value = "";
}

function carregarUsuario() {
    var usuarioCarregar = document.getElementById("usuarioCarregar").value;
    var cadastrarSenha = localStorage.getItem(usuarioCarregar + "cadastrarSenha");
    var email = localStorage.getItem(usuarioCarregar + "email");

    if (cadastrarSenha === null || email === null) {
        alert("Usuário não encontrado.");
    } else {
        document.getElementById("mudarSenha").value = cadastrarSenha;
        document.getElementById("email").value = email;
    }
}

function alterarNomeUsuario() {
    var usuarioCarregar = document.getElementById("usuarioCarregar").value;
    var novoUsuario = document.getElementById("alterarnome").value;

    var cadastrarSenha = localStorage.getItem(usuarioCarregar + "cadastrarSenha");
    var email = localStorage.getItem(usuarioCarregar + "email");

    if (cadastrarSenha === null || email === null) {
        alert("Usuário não encontrado.");
    } else {
        localStorage.removeItem(usuarioCarregar + "cadastrarSenha");
        localStorage.removeItem(usuarioCarregar + "email");

        localStorage.setItem(novoUsuario + "cadastrarSenha", cadastrarSenha);
        localStorage.setItem(novoUsuario + "email", email);

        alert("Nome de usuário alterado com sucesso!");
        document.getElementById("alterarnome").value = "";
        document.getElementById("mudarSenha").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cadastrarSenha").value = "";
        document.getElementById("usuario").value = "";
    }
}




