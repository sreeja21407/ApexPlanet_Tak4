const products = [
  { name: "iPhone 14 Pro Max", category: "electronics", price: 129999, rating: 4.9 },
  { name: "Samsung Galaxy S24", category: "electronics", price: 99999, rating: 4.7 },
  { name: "MacBook Air M3", category: "electronics", price: 144999, rating: 4.8 },
  { name: "Sony WH-1000XM5 Headphones", category: "electronics", price: 29999, rating: 4.6 },
  { name: "Apple Watch Series 9", category: "electronics", price: 45999, rating: 4.5 },

  { name: "Men's Premium Leather Jacket", category: "fashion", price: 8999, rating: 4.3 },
  { name: "Women's Designer Saree", category: "fashion", price: 11999, rating: 4.4 },
  { name: "Unisex Sports Sneakers", category: "fashion", price: 5499, rating: 4.2 },
  { name: "Men's Slim Fit Jeans", category: "fashion", price: 2999, rating: 4.1 },
  { name: "Women's Handbag - Elegant Style", category: "fashion", price: 6499, rating: 4.4 },

  { name: "The Alchemist - Paulo Coelho", category: "books", price: 499, rating: 4.7 },
  { name: "Rich Dad Poor Dad", category: "books", price: 399, rating: 4.5 },
  { name: "Atomic Habits - James Clear", category: "books", price: 699, rating: 4.8 },
  { name: "Wings of Fire - A.P.J Abdul Kalam", category: "books", price: 349, rating: 4.6 },
  { name: "Think and Grow Rich", category: "books", price: 599, rating: 4.5 }
];

const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortRating = document.getElementById("sortRating");
const productList = document.getElementById("productList");

function renderProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products match your criteria.</p>";
    return;
  }
  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> ₹${product.price.toLocaleString()}</p>
      <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSortProducts() {
  let category = categoryFilter.value;
  let maxPrice = parseFloat(priceFilter.value) || Infinity;
  let sort = sortRating.value;

  let filtered = products.filter(product =>
    (category === "all" || product.category === category) &&
    product.price <= maxPrice
  );

  if (sort === "high") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "low") {
    filtered.sort((a, b) => a.rating - b.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
priceFilter.addEventListener("input", filterAndSortProducts);
sortRating.addEventListener("change", filterAndSortProducts);

// Initial render
renderProducts(products);
