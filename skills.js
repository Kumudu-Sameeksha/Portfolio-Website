// Animate skill bars on page load
window.addEventListener("load", () => {
    const progresses = document.querySelectorAll(".progress");
    progresses.forEach(progress => {
      let width = progress.style.width;
      progress.style.width = "0";
      setTimeout(() => {
        progress.style.width = width;
      }, 300);
    });
  });
  