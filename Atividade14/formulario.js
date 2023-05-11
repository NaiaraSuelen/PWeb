function validar()
{
    var nome = document.forms["form"].elements["name"].value;
    var email = document.form.elements["email"].value;
    var comentario = document.form.elements["comentario"].value;
    var opcao = document.form.elements["opcao"].value;

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres");
        return false;
    }

    if (!email.includes("@") || !email.endsWith(".")) {
        alert("O email deve ter o formato correto");
        return false;
    }
    
    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres");
        return false;
    }

    if (opcao == "sim") {
        alert("Que bom que você voltou a visitar esta página!");
    } else if (opcao == "nao") {
        alert("Volte sempre a esta página!");
    } else {
        alert("Selecione uma opcao")
        return false;
    }

    return true;
}