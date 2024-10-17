// Écouteur d'événements pour le formulaire de réservation
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Validation des champs vides
    if (!name || !email || !checkin || !checkout) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Validation des dates
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    if (checkoutDate <= checkinDate) {
        alert("La date de départ doit être après la date d'arrivée.");
        return;
    }

    // Préparation des données à envoyer
    const reservationData = { name, email, checkin, checkout };

    // Envoi des données via EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", reservationData)
    .then(function(response) {
        alert("Réservation envoyée avec succès !");
        // Réinitialiser le formulaire après envoi
        document.getElementById('reservationForm').reset();
    })
    .catch(function(error) {
        alert("Erreur lors de l'envoi de la réservation. Veuillez réessayer.");
        console.error("Erreur d'envoi : ", error);
    });
});
