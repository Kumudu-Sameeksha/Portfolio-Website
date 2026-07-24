// Form and Popup
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");

// Show popup on form submit
contactForm.addEventListener("submit", e => {
  e.preventDefault(); // prevent real submit
  popup.style.display = "flex";
  contactForm.reset();
});

// Close popup on X click
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside the box
window.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
