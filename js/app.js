// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Form validation using Constraint Validation API
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    if (!form.reportValidity()) {
      e.preventDefault();
      alert('Please fill out all required fields correctly.');
    }
  });
}

// Auto-rotating slider on index.html with fade effect
const posts = document.querySelectorAll('.post-list article');
let index = 0;
function showPost(i) {
  posts.forEach((post, idx) => {
    post.style.opacity = idx === i ? '1' : '0';
    post.style.transition = 'opacity 0.5s';
  });
}
if (posts.length) {
  showPost(index);
  setInterval(() => {
    index = (index + 1) % posts.length;
    showPost(index);
  }, 6000);
}