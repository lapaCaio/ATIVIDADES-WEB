function validateForm() {
    // armazena os valores digitados pelo usuário
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Vetor de usuários
    var users = ["administrador", "professor", "aluno", "estagiario", "funcionario", "pesquisador", "publico"];
    // Vetor de senhas-padrão
    var passwords = ["admin123", "prof123", "aluno123", "estagiario123", "funcionario123", "pesquisador123", "publico123"];

    // verifica se o campo de usuário está preenchido
    if (user == "") {
        alert("Por favor, escolha um usuário");
        return false;
    }

    // verifica se a senha está preenchida e tem 8 caracteres no mínimo
    if (pass == "" || pass.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres");
        return false;
    }

    // verifica se a senha corresponde ao usuário escolhido
    var index = users.indexOf(user);
    if (pass !== passwords[index]) {
        alert("Senha incorreta");
        return false;
    }

    // se as verificações acima passarem, encaminha para a página de contato
    window.location.href = "Contato.html";
    return false;
}
