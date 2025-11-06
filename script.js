/* ===============================
   IMAGE SLIDER
=============================== */

let currentSlide = 0;

function setSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // Prevent errors if pages have different number of slides
  if (!slides.length) return;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;
  currentSlide = (currentSlide + 1) % slides.length;
  setSlide(currentSlide);
}, 5000);



/* ===============================
   EMAIL VALIDATION (Contact page)
=============================== */
function validateEmailMatch() {
  const email = document.getElementById('email')?.value;
  const confirm = document.getElementById('confirm-email')?.value;

  if (email && confirm && email !== confirm) {
    alert("Emails do not match!");
    return false;
  }
  return true;
}



/* ===============================
   FUN FACT POPUP SIGN CONTROLS
=============================== */

function showFact(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "block";
}

function closeFact(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}