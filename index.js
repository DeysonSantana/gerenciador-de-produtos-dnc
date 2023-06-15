
class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [ ];
  }

  Adcionar() {
    let produto =  this.LerDados()
    if(this.Validar(produto) == true){
        this.Salvar(produto)
    }

    this.Listar()
    this.Cancelar()
  }

  LerDados(){
        let produto = { }

        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.precoProduto = document.getElementById('pdpreco').value

        return produto
  }

  Validar(produto){
    let msg = ' '

    if(produto.nomeProduto == ' ' ) {
       msg += 'Por favor, insira o nome do produto! \n'
    } 

    if(produto.precoProduto == ' ' ) {
        msg += 'Por favor insira o valor do produto! \n'
    } 

    if(msg != ' '){
        alert(msg)
        return false
    }

        return true

  }

  Salvar(produto){
    this.arrayProdutos.push(produto)
    this.id++
  }

  Listar( ){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ' '

        for(let i = 0; i < this.arrayProdutos.length; i++){

            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_preco = tr.insertCell()
            let td_del = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].precoProduto
            let imagem = document.createElement('img')
            imagem.src = 'remover.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_del.appendChild(imagem)

        }
  }

  Cancelar(){
        document.getElementById('pdnome').value = ' '
        document.getElementById('pdpreco').value = ' '
    }

    Deletar(id){
        let tbody = document.getElementById('tbody')

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i,1);
                tbody.deleteRow(i)
            }
        }

        alert('Item removido com sucesso!')

    }

}

var produto = new Produto();
