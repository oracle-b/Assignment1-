function learnMore() {
    alert("Learn more about the Engineering Club by exploring our About section below!");
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  });
  