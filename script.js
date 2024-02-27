let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18) {
    greeting = "God aften!";
} else if (hourNow >= 13) {
    greeting = "God eftermiddag!";
} else if (hourNow >= 10) {
    greeting = "God formiddag!";
} else if (hourNow >= 5) {
    greeting = "Godmorgen!";
} else {
    greeting = "Velkommen";
}

let greetingMessage = document.getElementById("greetingMessage")
greetingMessage.textContent = greeting;