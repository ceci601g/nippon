let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18) {
    greeting = "Godaften";
} else if (hourNow >= 14) {
    greeting = "God eftermiddag";
} else if (hourNow >= 11) {
    greeting = "God formiddag";
} else if (hourNow >= 5) {
    greeting = "Godmorgen";
} else {
    greeting = "Velkommen";
}

let greetingMessage = document.getElementById("greetingMessage");
greetingMessage.textContent = greeting;
