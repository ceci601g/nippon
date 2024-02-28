const openingHours = {
    mandag: { open: 10, close: 17 },
    tirsdag: { open: 10, close: 17 },
    onsdag: { open: 10, close: 17 },
    torsdag: { open: 10, close: 17 },
    fredag: { open: 10, close: 16 },
};

document.addEventListener('DOMContentLoaded', function () {
    let today = new Date();
    let currentDay = today.toLocaleDateString("da-DK", { weekday: "long" }).toLowerCase();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentOpeningHours = openingHours[currentDay];
    let openingHoursMessage;

    if (currentOpeningHours) {
        if (currentOpeningHours.open === null || currentOpeningHours.close === null) {
            openingHoursMessage = "Telefonen har lukket idag.";
        } else {
            let timeUntilClosing = (currentOpeningHours.close - currentHour) * 60 - currentMinute;

            if (timeUntilClosing > 180) {
                openingHoursMessage = `Telefonen har åben indtil ${currentOpeningHours.close}:00 idag.`;
            } else if (timeUntilClosing > 120) {
                openingHoursMessage = `Telefonen lukker snart. Åben indtil ${currentOpeningHours.close}:00.`;
            } else if (timeUntilClosing > 60) {
                openingHoursMessage = `Telefonen lukker meget snart. Åben indtil ${currentOpeningHours.close}:00.`;
            } 
             else {
                openingHoursMessage = `Telefonen er lukket. Vi åbner igen kl 10`;
            }
        }
    }

    let message = document.getElementById("openingHoursMessage");
    message.textContent = openingHoursMessage;
});
