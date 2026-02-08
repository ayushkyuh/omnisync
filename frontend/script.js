const API = "https://omnisync-1-il7e.onrender.com";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.getElementById("cards");

  const fridgeBtn = document.getElementById("fridgeBtn");
  const energyBtn = document.getElementById("energyBtn");
  const commuteBtn = document.getElementById("commuteBtn");

  function clearCards() {
    cards.innerHTML = "";
  }

  function createCard(title, content) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${title}</h3>${content}`;
    cards.appendChild(div);
  }

  fridgeBtn.addEventListener("click", () => {
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
      })
      .catch(() => alert("Backend not reachable"));
  });

  energyBtn.addEventListener("click", () => {
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
      })
      .catch(() => alert("Backend not reachable"));
  });

  commuteBtn.addEventListener("click", () => {
    clearCards();
    fetch(API + "/commute")
      .then(res => res.json())
      .then(data => {
        createCard("⏰ Best Leave Time", `<p>${data.leave_time}</p>`);
        createCard("🔋 Alert", `<p>${data.alert}</p>`);
        createCard("🛣 Route Status", `<p>${data.best_route}</p>`);
      })
      .catch(() => alert("Backend not reachable"));
  });
});




