"use strict";

try {
  const registerButtons = document.querySelectorAll(".webinar-main-button");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalCloserElements = document.querySelectorAll("[data-modal-close]");
  const form = document.querySelector(".form");

  // Modal ochish
  registerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modalBackdrop.classList.add("modal-backdrop--open");
    });
  });

  // Modal yopish
  function closeModal() {
    modalBackdrop.classList.remove("modal-backdrop--open");
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  modalCloserElements.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-modal-close")) closeModal();
    });
  });

  // Forma yuborish
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitButton = e.target.querySelector(".form-button");
    const name = e.target.querySelector("#name").value.trim();
    const phone = e.target.querySelector("#phone").value.replace(/\D/g, "");

    if (!name || phone.length !== 12) {
      alert("Iltimos, ism va 998xxxxxxxxx formatidagi telefon raqamingizni kiriting.");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Yuborilmoqda…";

    const gForm = new FormData();
    gForm.append("entry.1541950515", name);
    gForm.append("entry.136366351", phone);

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSc9EYg4CagQfv52PDnHiOXdCl12PC7nIVRd7GYJo_6bBUr_bg/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: gForm,
    }).catch(() => {});

    window.location.href = "https://t.me/+bV98hXcZ58g5ODcy";
  });
} catch (e) {
  console.error(e);
}
