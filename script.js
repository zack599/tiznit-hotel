// Écouteur d'événements pour le formulaire de réservation
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Préparation des données à envoyer
    const reservationData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value
    };

    // Envoi des données via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", reservationData)
    .then(function(response) {
        alert("Réservation envoyée avec succès !");
        // Réinitialiser le formulaire après envoi
        document.getElementById('reservationForm').reset();
    }, function(error) {
        alert("Erreur lors de l'envoi de la réservation. Veuillez réessayer.");
        console.error("Erreur d'envoi : ", error);
    });
});
