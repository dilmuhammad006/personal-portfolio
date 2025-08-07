if (localStorage.getItem("modal") === null) {
  localStorage.setItem("modal", "false");
}

const button = document.querySelector(".more");
const cards = document.querySelector(".more-card");

const initialModal = localStorage.getItem("modal") === "true";
cards.style.display = initialModal ? "grid" : "none";

button.addEventListener("click", (e) => {
  e.preventDefault();

  const currentModal = localStorage.getItem("modal") === "true";
  const newModal = !currentModal;
  localStorage.setItem("modal", newModal.toString());

  cards.style.display = newModal ? "grid" : "none";
});
