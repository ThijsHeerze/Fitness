document.addEventListener('DOMContentLoaded', () => {
    const abonnementType = "1 keer per week"; // Verander dit naar het gekozen abonnementstype

    const toegangButton = document.getElementById('toegangButton');
    const inschrijvenCursusButton = document.getElementById('inschrijvenCursusButton');
    const afspraakCoachButton = document.getElementById('afspraakCoachButton');
    const annulerenButton = document.getElementById('annulerenButton');

    const afspraakModal = document.getElementById('afspraakModal');
    const annulerenModal = document.getElementById('annulerenModal');
    const closeButtons = document.querySelectorAll('.close');

    // Toegang sportschool
    toegangButton.addEventListener('click', () => {
        let message;
        switch (abonnementType) {
            case "1 keer per week":
                message = "Je hebt geen toegang meer na dit bezoek, Fijne dag!";
                break;
            case "2 keer per week":
                message = "Je hebt nog 1 toegang mogelijkheid deze week, Fijne dag!";
                break;
            case "Ongelimiteerd":
                message = "Je hebt ongelimiteerde toegang tot de sportschool, Fijne dag!";
                break;
            default:
                message = "Onbekend abonnementstype.";
        }
        alert(message);
    });

    // Inschrijven voor cursus
    inschrijvenCursusButton.addEventListener('click', () => {
        const cursussen = ["Yoga", "Pilates", "Paaldansen"];
        const gekozenCursus = prompt("Kies een cursus: " + cursussen.join(", "));
        if (cursussen.includes(gekozenCursus)) {
            alert("Je bent ingeschreven voor " + gekozenCursus + ".");
        } else if (gekozenCursus) {
            alert("Ongeldige keuze.");
        }
    });

    // Afspraak met personal coach
    afspraakCoachButton.addEventListener('click', () => {
        afspraakModal.style.display = "block";
    });

    document.getElementById('bevestigAfspraak').addEventListener('click', () => {
        const gekozenDatum = document.getElementById('datum').value;
        const gekozenTijd = document.getElementById('tijd').value;
        try {
            const date = new Date(gekozenDatum);
            const time = gekozenTijd.split(":");
            if (date && time.length === 2) {
                alert(`Afspraak gemaakt op ${gekozenDatum} om ${gekozenTijd}.`);
                afspraakModal.style.display = "none";
            } else {
                throw new Error();
            }
        } catch {
            alert("Ongeldige datum of tijd! Gebruik het formaat yyyy-mm-dd voor de datum en HH:mm voor de tijd.");
        }
    });

    // Abonnement annuleren
    annulerenButton.addEventListener('click', () => {
        annulerenModal.style.display = "block";
    });

    document.getElementById('bevestigAnnuleren').addEventListener('click', () => {
        alert("Je abonnement is geannuleerd.");
        annulerenModal.style.display = "none";
    });

    document.getElementById('annuleerAnnuleren').addEventListener('click', () => {
        annulerenModal.style.display = "none";
    });

    // Modals sluiten
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = "none";
        });
    });

    window.onclick = function (event) {
        if (event.target === afspraakModal || event.target === annulerenModal) {
            event.target.style.display = "none";
        }
    };
});
