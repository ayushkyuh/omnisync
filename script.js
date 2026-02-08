const API = "https://omnisync-7kgy.onrender.com";

function loadFridge() {
  fetch(API + "/fridge")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
    });
}

function loadEnergy() {
  fetch(API + "/energy")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
    });
}

function loadCommute() {
  fetch(API + "/commute")
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
    });
}

