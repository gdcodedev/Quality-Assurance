class Produto {
    constructor(obj){
        obj = obj || {};
        this.id = obj.id
        this.codigo = obj.codigo;
        this.nome = obj.nome;
        this.quantidade = obj.quantidade;
        this.valor = obj.valor;
        this.dataCadastro = obj.dataCadastro;
    }

    modeloValido(){
        return !!(this.codigo && this.nome && this.quantidade && this.valor && this.dataCadastro);
    }
}