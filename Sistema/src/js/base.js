
function mostarAlerta(mensagem){
    document.querySelector("#mensagem").textContent = mensagem;
    document.querySelector("div.alert.alert-danger").classList.remove("esconder")
}

function esconderAlerta(){
    document.querySelector("div.alert.alert-danger").classList.add("esconder")
}

document.querySelector("button.close")
.addEventListener('click', (e) =>{
    e.preventDefault()
    esconderAlerta();
})

