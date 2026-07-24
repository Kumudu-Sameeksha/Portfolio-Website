// Select all education cards and modals
const eduCards = document.querySelectorAll(".edu-card");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");

// Open modal when clicking a card
eduCards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
    }
  });
});

// Close modal when clicking the "X"
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});

// Close modal when clicking outside content
window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
