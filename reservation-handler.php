<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $arrivalDate = $_POST['arrival-date'];
    $departureDate = $_POST['departure-date'];
    $guests = $_POST['guests'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Email configuration
    $to = "zakaria.belkhenfar17@gmail.com";
    $subject = "Nouvelle réservation pour Hôtel Tiznit";
    $headers = "From: noreply@hoteltiznit.com" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $message = "Détails de la réservation :\n\n";
    $message .= "Nom : $name\n";
    $message .= "Email : $email\n";
    $message .= "Date d'arrivée : $arrivalDate\n";
    $message .= "Date de départ : $departureDate\n";
    $message .= "Nombre de personnes : $guests\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Votre réservation a été envoyée avec succès.";
    } else {
        echo "Erreur lors de l'envoi de votre réservation. Veuillez réessayer.";
    }
}
?>
