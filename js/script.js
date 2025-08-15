"use strict";

// DOM elementlarni bir marta olish
const registerButtons = document.querySelectorAll(".webinar-main-button");
const modalBackdrop = document.querySelector(".modal-backdrop");
const thanksModalBackdrop = document.querySelector(".thanks-modal-backdrop");
const modalCloserElements = document.querySelectorAll("[data-modal-close]");
const form = document.querySelector(".form");

// Modal yopish funksiyasi
function closeModal() {
  modalBackdrop.classList.remove("modal-backdrop--open");
  thanksModalBackdrop.classList.remove("modal-backdrop--open");
}

// Thanks modal ochish funksiyasi
function openThanksModal() {
  thanksModalBackdrop.classList.add("modal-backdrop--open");
}

// Event listener'lar
registerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalBackdrop.classList.add("modal-backdrop--open");
  });
});

// Escape tugmasi bilan modal yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Modal yopish elementlari
modalCloserElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-modal-close")) closeModal();
  });
});

// Forma yuborish
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = e.target.querySelector(".form-button");
  const nameInput = e.target.querySelector("#name");
  const phoneInput = e.target.querySelector("#phone");
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\D/g, "");

  // Validatsiya
  if (!name || phone.length !== 12) {
    alert("Iltimos, ism va 998xxxxxxxxx formatidagi telefon raqamingizni kiriting.");
    return;
  }

  // Loading holatini ko'rsatish
  submitButton.disabled = true;
  submitButton.textContent = "Yuborilmoqda…";

  try {
    // Google Forms ga ma'lumotlarni yuborish
    const gForm = new FormData();
    gForm.append("entry.1541950515", name);
    gForm.append("entry.136366351", phone);

    await fetch("https://docs.google.com/forms/d/e/1FAIpQLSc9EYg4CagQfv52PDnHiOXdCl12PC7nIVRd7GYJo_6bBUr_bg/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: gForm,
    });

    // Form modalini yopish va thanks modalini ochish
    closeModal();
    setTimeout(openThanksModal, 300);
    
  } catch (error) {
    console.error("Forma yuborishda xatolik:", error);
    // Xatolik bo'lsa ham thanks modalini ochish
    closeModal();
    setTimeout(openThanksModal, 300);
  }
});
