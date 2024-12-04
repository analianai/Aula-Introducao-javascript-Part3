document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const productsContainer = document.getElementById("products");
    const totalElement = document.getElementById("total");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    // Atualiza o total do carrinho
    function updateCart() {
      productsContainer.innerHTML = ""; // Limpa o carrinho
      let total = 0;
  
      cart.forEach((item, index) => {
        total += item.price;
  
        const productRow = document.createElement("div");
        productRow.classList.add("cart-item");
        productRow.innerHTML = `
          <p>${item.name}</p>
          <p>R$${item.price.toFixed(2)}</p>
          <button class="remove-item" data-index="${index}">Remover</button>
        `;
        productsContainer.appendChild(productRow);
      });
  
      totalElement.textContent = total.toFixed(2);
  
      // Adiciona funcionalidade de remover itens
      document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", (e) => {
          const index = e.target.getAttribute("data-index");
          cart.splice(index, 1); // Remove o item do array
          updateCart(); // Atualiza o carrinho
        });
      });
    }
  
    // Adiciona produto ao carrinho
    addToCartButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const productElement = e.target.closest(".product");
        const name = productElement.querySelector("p").textContent;
        const price = parseFloat(productElement.querySelector(".price").textContent);
  
        cart.push({ name, price });
        updateCart();
      });
    });
  });
  