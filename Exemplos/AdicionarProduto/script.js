
// Seleção de elementos
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Evento de submissão do formulário
productForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  const productName = document.getElementById('productName').value;
  const productImage = document.getElementById('productImage').files[0];

  if (productName && productImage) {
    const reader = new FileReader();

    // Processa a imagem para visualização
    reader.onload = function(event) {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      productItem.innerHTML = `
        <img src="${event.target.result}" alt="${productName}">
        <h3>${productName}</h3>
      `;

      productList.appendChild(productItem);
    };

    reader.readAsDataURL(productImage);

    // Limpar o formulário
    productForm.reset();
  }
});
