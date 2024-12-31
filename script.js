document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact-form");

  if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
          event.preventDefault();
          alert("Thank you for contacting us! We will get back to you soon.");
          contactForm.reset();
      });
  }
});
