var btnAdicionar = document.getElementById("btn-adicionar");
var tabela = document.querySelector('table>tbody');

var modal = {
   codigo: document.getElementById('codigo'),
   nome: document.getElementById('nome'),
   quantidade: document.getElementById('quantidade'),
   valor: document.getElementById('valor'),
   dataCadastro: document.getElementById('data'),
   btnSalvar: document.getElementById('btn-salvar'),
   btnSair: document.getElementById('btn-sair')
};

btnAdicionar.addEventListener('click', (e) =>{
    e.preventDefault();
    abrirModalProdutos();
});

modal.btnSalvar.addEventListener('click', (e) =>{
    e.preventDefault();
    let produto = criarProduto();

    if(!produto.modeloValido()){
        mostarAlerta("Todos os campos são obrigatórios para o cadastro!");
        return;
    }

    adicionarProdutoNaTabela(produto);
    limparCampos();
    fecharModalProdutos();
});

modal.btnSair.addEventListener('click', (e) =>{
    e.preventDefault();
    limparCampos();
    fecharModalProdutos();
});

function abrirModalProdutos(){
    $("#btn-adicionar").click(function(){
        $("#cadastro-produto").modal({backdrop: "static"});
    });
}

function fecharModalProdutos(){
    $("#btn-sair").click(function(){
        $("#cadastro-produto").modal("hide");
    });
}

function criarProduto(){
    return new Produto({
        codigo: modal.codigo.value,
        nome: modal.nome.value,
        quantidade: modal.quantidade.value,
        valor: modal.valor.value, 
        dataCadastro: modal.dataCadastro.value,
    });
}

function limparCampos(){
    modal.codigo.value = "";
    modal.nome.value = "";
    modal.quantidade.value = "";
    modal.valor.value = "";
    modal.dataCadastro.value = "";

    esconderAlerta();
}

function adicionarProdutoNaTabela(produto){

    var tr = document.createElement('tr');
    var tdCodigo = document.createElement('td');
    var tdNome = document.createElement('td');
    var tdQuantidade = document.createElement('td');
    var tdValor = document.createElement('td');
    var tdDataCadastro = document.createElement('td');
    var tdAcoes = document.createElement('td');

    tdCodigo.textContent = produto.codigo;
    tdNome.textContent = produto.nome;
    tdQuantidade.textContent = produto.quantidade;
    tdValor.textContent = produto.valor;
    tdDataCadastro.textContent = produto.dataCadastro;
    tdAcoes.innerHTML = `<button type="button" class="btn btn-link">Editar</button> / <button type="button" class="btn btn-link">Excluir</button>`

    tr.appendChild(tdCodigo);
    tr.appendChild(tdNome);
    tr.appendChild(tdQuantidade);
    tr.appendChild(tdValor);
    tr.appendChild(tdDataCadastro);
    tr.appendChild(tdAcoes);

    tabela.appendChild(tr);
}
