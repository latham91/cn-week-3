const eventKey = document.querySelector(".event-key");
const eventCode = document.querySelector(".event-code");
const eventWhich = document.querySelector(".event-which");
const eventLocation = document.querySelector(".event-location");
const codeH1 = document.querySelector(".code-h1");
const codeH2 = document.querySelector(".code-h2");
const mobileInput = document.querySelector(".mobile-input");

window.addEventListener("keydown", (e) => {
    eventKey.textContent = e.key;
    eventCode.textContent = e.code;
    eventWhich.textContent = e.which;
    codeH1.textContent = `Key Code: ${e.keyCode}`;
    codeH2.textContent = e.keyCode;

    if (e.location === 0) {
        eventLocation.textContent = "Standard";
    } else if (e.location === 1) {
        eventLocation.textContent = "Left";
    } else if (e.location === 2) {
        eventLocation.textContent = "Right";
    } else if (e.location === 3) {
        eventLocation.textContent = "Numpad";
    } else {
        eventLocation.textContent = "Unknown";
    }

    if (e.key === " ") {
        eventKey.textContent = "Blank";
    }
});

mobileInput.addEventListener("keydown", (e) => {
    eventKey.textContent = e.key;
    eventCode.textContent = e.code;
    eventWhich.textContent = e.which;
    codeH1.textContent = `Key Code: ${e.keyCode}`;
    codeH2.textContent = e.keyCode;

    if (e.location === 0) {
        eventLocation.textContent = "Standard";
    } else if (e.location === 1) {
        eventLocation.textContent = "Left";
    } else if (e.location === 2) {
        eventLocation.textContent = "Right";
    } else if (e.location === 3) {
        eventLocation.textContent = "Numpad";
    } else {
        eventLocation.textContent = "Unknown";
    }

    if (e.key === " ") {
        eventKey.textContent = "Blank";
    }
});
