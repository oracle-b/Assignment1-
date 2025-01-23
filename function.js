function toggleNavbar() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }
  
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', toggleNavbar);