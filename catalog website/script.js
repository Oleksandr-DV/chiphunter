// Sample products
const products = {
  gpu: [
    {
      name: "NVIDIA RTX 4070",
      price: "£579",
      img: "https://cdn.mos.cms.futurecdn.net/r9Qom8EFbtQ5kLDGrDeEDW.jpg",
    },
    {
      name: "AMD RX 7800 XT",
      price: "£499",
      img: "https://cdn.mos.cms.futurecdn.net/XoJkJYHqvE9twAs49g3b3U.jpg",
    },
  ],
  cpu: [
    {
      name: "Intel Core i7-13700K",
      price: "£399",
      img: "https://cdn.mos.cms.futurecdn.net/nzKcFqxSv44NBe4Kczk7kU.jpg",
    },
    {
      name: "AMD Ryzen 7 7800X3D",
      price: "£429",
      img: "https://cdn.mos.cms.futurecdn.net/3jHFPBtTDrYxzzkSV1j8xQ.jpg",
    },
  ],
};

// DOM elements
const container = document.getElementById("product-container");
const gpuBtn = document.getElementById("show-gpu");
const cpuBtn = document.getElementById("show-cpu");
const searchInput = document.getElementById("search");

// Initial load
renderProducts("gpu");

// Button listeners
gpuBtn.addEventListener("click", () => {
  gpuBtn.classList.add("active");
  cpuBtn.classList.remove("active");
  renderProducts("gpu");
});

cpuBtn.addEventListener("click", () => {
  cpuBtn.classList.add("active");
  gpuBtn.classList.remove("active");
  renderProducts("cpu");
});

// Render function
function renderProducts(category) {
  container.innerHTML = "";
  products[category].forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="product-info">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <a href="#" class="btn-details">View Details</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Search function (static for now)
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const activeCategory = gpuBtn.classList.contains("active") ? "gpu" : "cpu";
  const filtered = products[activeCategory].filter((p) =>
    p.name.toLowerCase().includes(value)
  );

  container.innerHTML = "";
  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="product-info">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <a href="#" class="btn-details">View Details</a>
      </div>
    `;
    container.appendChild(card);
  });
});
