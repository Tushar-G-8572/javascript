/* ----------Dummy Data ---------- */
const appliances = [
  { brand: "Usha", products: ["Ceiling Fan", "Mixer Grinder", "Electric Iron", "Room Heater", "Water Cooler"] },
  { brand: "Bajaj", products: ["Ceiling Fan", "Induction Cooktop", "Mixer Grinder", "Room Heater", "Water Geyser"] },
  { brand: "Philips", products: ["Air Fryer", "Electric Kettle", "Trimmer", "Mixer Grinder", "Juicer"] },
  { brand: "Havells", products: ["Ceiling Fan", "LED Bulb", "Water Heater", "Air Purifier", "Electric Iron"] },
  { brand: "Orient", products: ["Ceiling Fan", "Air Cooler", "Room Heater", "LED Light", "Water Heater"] }
];

/* ---------- DOM Cache ---------- */
const resultBox = document.querySelector(".hidden");
const searchInput = document.querySelector(".search");

/* ---------- Save Data Safely ---------- */
try {
  localStorage.setItem("appliances", JSON.stringify(appliances));
} catch (err) {
  console.error("LocalStorage error:", err);
}

/* ---------- Live Search ---------- */
function showSuggestions(searchValue) {
  resultBox.innerHTML = "";
  resultBox.classList.add("hidden");

  if (!searchValue.trim()) return;

  let data;
  try {
    data = JSON.parse(localStorage.getItem("appliances")) || [];
  } catch (err) {
    console.error("JSON parse error:", err);
    return;
  }

  const searchText = searchValue.toLowerCase();
  const fragment = document.createDocumentFragment();

  const matches = [];

  data.forEach(item => {
    const brandMatch = item.brand.toLowerCase().startsWith(searchText);

    const productMatches = item.products.filter(product =>
      product.toLowerCase().includes(searchText)
    );

    if (brandMatch) {
      // If brand matches, show all products
      item.products.forEach(product => {
        matches.push({ brand: item.brand, product });
      });
    } else if (productMatches.length > 0) {
      // If product matches, show only matching products
      productMatches.forEach(product => {
        matches.push({ brand: item.brand, product });
      });
    }
  });

  if (matches.length === 0) return;

  matches.forEach(item => {
    const span = document.createElement("span");
    span.textContent = `${item.brand} ${item.product}`;
    fragment.appendChild(span);
  });

  resultBox.appendChild(fragment);
  resultBox.classList.remove("hidden");
}

/* ---------- Debounce ---------- */
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const debouncedSearch = debounce(e => {
  showSuggestions(e.target.value);
});

/* ---------- Event ---------- */
searchInput.addEventListener("input", debouncedSearch);
