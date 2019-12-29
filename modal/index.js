const body = document.querySelector("body");
const modal = document.getElementById("jsModal");
const overlay = modal.querySelector(".modal__overlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

function openModal() {
  body.classList.add("not_scroll");
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  body.classList.remove("not_scroll");
}

overlay.addEventListener("click", closeModal);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
