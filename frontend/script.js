const API = "https://omnisync-backend.onrender.com";
const cards = document.getElementById("cards");

function clearCards() {
  cards.innerHTML = "";
}

function createCard(title, content) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${title}</h3>${content}`;
  cards.appendChild(div);
}

function loadFridge() {
  clearCards();
  fetch(API + "/fridge")
    .then(res => res.json())
    .then(data => {
      createCard(
        "🍽 Eat This First",
        `<ul>${data.eat_first.map(i => `<li>${i}</li>`).join("")}</ul>`
      );
      createCard(
        "🧊 Items in Fridge",
        `<ul>${data.items.map(i => `<li>${i}</li>`).join("")}</ul>`
      );
    });
}

function loadEnergy() {
  clearCards();
  fetch(API + "/energy")
    .then(res => res.json())
    .then(data => {
      createCard(
        "🧛 Vampire Devices",
        `<ul>${data.vampire_devices.map(d => `<li>${d}</li>`).join("")}</ul>`
      );
      createCard(
        "💰 Monthly Savings",
        `<p><strong>${data.monthly_savings}</strong></p>
         <p>Energy Reduced: ${data.energy_reduction}</p>`
      );
    });
}

function loadCommute() {
  clearCards();
  fetch(API + "/commute")
    .then(res => res.json())
    .then(data => {
      createCard("⏰ Best Leave Time", `<p>${data.leave_time}</p>`);
      createCard("🔋 Alert", `<p>${data.alert}</p>`);
      createCard("🛣 Route Status", `<p>${data.best_route}</p>`);
    });
}


