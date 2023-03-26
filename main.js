class LojaDeTenis {
  constructor() {
    this.tenis = [];
  }
  adicionarTenis(tenis) {
    this.tenis.push(tenis);
  }
  removerTenis(tenis) {
    const index = this.tenis.indexOf(tenis);
    if (index > -1) {
      this.tenis.splice(index, 1);
    }
  }
  listarTenis() {
    console.log(this.tenis);
  }
}

class LojaFísica extends LojaDeTenis {
  constructor(nome) {
    super();
    this.nome = nome;
    this.aberta = false;
  }
  abrirLoja() {
    this.aberta = true;
    console.log(`${this.nome} aberta!`);
  }
  fecharLoja() {
    this.aberta = false;
    console.log(`${this.nome} fechada!`);
  }
  horarioDeFuncionamento() {
    console.log(`${this.nome} funciona das 9h às 18h.`);
  }
}

class LojaOnline extends LojaDeTenis {
  constructor(nome) {
    super();
    this.nome = nome;
    this.clientes = [];
  }
  cadastrarCliente(cliente) {
    this.clientes.push(cliente);
    console.log(`Cliente ${cliente} cadastrado!`);
  }
  comprarTenis(tenis, cliente) {
    if (this.tenis.includes(tenis)) {
      console.log(
        `O tênis ${tenis} foi comprado pelo cliente ${cliente} na loja ${this.nome}!`
      );
    } else {
      console.log(`O tênis ${tenis} não está disponível na loja ${this.nome}.`);
    }
  }
  entregarPedido(cliente) {
    console.log(`O pedido do cliente ${cliente} foi entregue.`);
  }
}

const lojaFisica1 = new LojaFísica("Tênis Inc.");
const lojaOnline1 = new LojaOnline("Tênis Shop Online");
const lojaFisica2 = new LojaFísica("Tênis Outlet");

lojaFisica1.adicionarTenis("Nike Air Max");
lojaFisica1.adicionarTenis("Adidas Ultraboost");
lojaOnline1.adicionarTenis("Puma RS-X");
lojaOnline1.adicionarTenis("New Balance 574");
lojaFisica2.adicionarTenis("Vans Old Skool");
lojaFisica2.adicionarTenis("Converse All Star");

console.log(lojaFisica1.listarTenis());
console.log(lojaOnline1.listarTenis());
console.log(lojaFisica2.listarTenis());

lojaFisica1.abrirLoja();
lojaFisica1.horarioDeFuncionamento();
lojaFisica1.fecharLoja();

lojaOnline1.cadastrarCliente("João");
lojaOnline1.comprarTenis("Puma RS-X", "João");
