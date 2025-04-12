// Sélection des éléments
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');
const contactButtons = document.querySelectorAll('.contact-btn, .btn-secondary, .btn-primary');

// Affiche la modale au clic sur les boutons
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

// Ferme la modale au clic sur le bouton de fermeture
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Ferme la modale au clic en dehors de la fenêtre modale
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Validation du formulaire
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi par défaut

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    alert('Votre message a été envoyé avec succès !');
    modal.style.display = 'none'; // Ferme la modale après soumission
    this.reset(); // Réinitialise le formulaire
});

// Fonction pour valider l'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}