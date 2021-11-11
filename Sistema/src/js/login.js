var form = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    btnEntrar: document.querySelector("#btn-entrar")
};

form.btnEntrar.addEventListener('click', (e) =>{
    e.preventDefault();

    var email = form.email.value;
    var senha = form.senha.value;

    if(!email || !senha){
        mostarAlerta("Informe usuário e senha, os campos não podem ser brancos.");
        return;
    }else if(email.toLowerCase() != usuarioValido.email || 
             senha != usuarioValido.senha){
        mostarAlerta("E-mail ou senha inválidos");
        return;
    }

    efetuarLogin();

});

function efetuarLogin(){
    window.open(`produtos.html?teste=123`,'_self');
}