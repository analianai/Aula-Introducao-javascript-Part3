// Definição da classe Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Método para retornar a apresentação da pessoa
  apresentar() {
    return `Nome: ${this.nome}, Idade: ${this.idade} anos.`;
  }
}

// Elementos do DOM
const formPessoa = document.getElementById('formPessoa');
const listaPessoas = document.getElementById('listaPessoas');

// Array para armazenar pessoas
const pessoas = [];

// Manipulação do formulário
formPessoa.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar o recarregamento da página

  // Capturar os valores do formulário
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;

  // Criar uma nova instância da classe Pessoa
  const novaPessoa = new Pessoa(nome, idade);

  // Adicionar à lista de pessoas
  pessoas.push(novaPessoa);

  // Atualizar a exibição
  atualizarLista();

  // Limpar os campos do formulário
  formPessoa.reset();
});

// Função para atualizar a lista de pessoas no HTML
function atualizarLista() {
  // Limpar a lista atual
  listaPessoas.innerHTML = '';

  // Adicionar cada pessoa na lista
  pessoas.forEach((pessoa) => {
    const divPessoa = document.createElement('div');
    divPessoa.classList.add('pessoa');
    divPessoa.textContent = pessoa.apresentar();
    listaPessoas.appendChild(divPessoa);
  });
}
