// Smooth Scrolling for Navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing Effect
const text = "Hi, I'm Vivika Martini";
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let index = 0;
function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust speed
  } else {
    // Stop the cursor from blinking after typing is complete
    cursor.style.animation = "none"; // Removes the blinking effect
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Smooth scrolling for the arrow
document.querySelector('.bouncing-arrow span').addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});