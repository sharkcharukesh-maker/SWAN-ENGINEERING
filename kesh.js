document.addEventListener("DOMContentLoaded", () => {
  // Animate blue box moving horizontally left and right
  const box = document.getElementById("movingBox");
  let pos = 0;
  let direction = 1;
  const maxPos = window.innerWidth - 80;

  function animateBox() {
    pos += direction * 2;
    if (pos > maxPos) direction = -1;
    else if (pos < 0) direction = 1;
    box.style.right = `${pos}px`;
    requestAnimationFrame(animateBox);
  }
  animateBox();

  // Alert when Contact Us button clicked
  const contactBtn = document.querySelector('.contact-button[href^="mailto"]');
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("An email client will open to contact Swan Engineering.");
    });
  }

  // Register form password validation
  const registerForm = document.getElementById("registerForm");
  if (registerForm){
    registerForm.addEventListener("submit", (event)=>{
      const pwd = document.getElementById("password").value;
      if (pwd.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
      } else {
        alert("Registration successful!");
      }
    });
  }
});