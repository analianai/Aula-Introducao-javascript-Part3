// script.js
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Usuário e senha fictícios para validação
const validUsername = 'admin';
const validPassword = '1234';

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio do formulário

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validação simples
  if (username === validUsername && password === validPassword) {
    alert('Login realizado com sucesso!');
    errorMessage.classList.add('hidden'); // Esconde mensagem de erro caso exista
    loginForm.reset(); // Reseta o formulário
  } else {
    errorMessage.classList.remove('hidden'); // Mostra mensagem de erro
  }
});
