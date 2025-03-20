document.addEventListener("DOMContentLoaded", () => {
      const welcomeMessage = document.createElement("p");
      welcomeMessage.textContent = "Bienvenue sur mon portfolio !";
      document.querySelector("main").prepend(welcomeMessage);
    });

    // Validation du formulaire de contact
    document.querySelector('form').addEventListener('submit', function(e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
        alert("Tous les champs sont obligatoires !");
        e.preventDefault();
      } else {
        alert("Merci pour votre message !");
      }
    });