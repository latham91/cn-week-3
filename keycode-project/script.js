// Element selector variables
const eventKey = document.querySelector(".event-key");
const eventCode = document.querySelector(".event-code");
const eventWhich = document.querySelector(".event-which");
const eventLocation = document.querySelector(".event-location");
const codeH1 = document.querySelector(".code-h1");
const codeH2 = document.querySelector(".code-h2");
const mobileInput = document.querySelector(".mobile-input");
const mobileInputBtn = document.querySelector(".mobile-input-btn");

const charKeyCodes = {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    0: 48,
    1: 49,
    2: 50,
    3: 51,
    4: 52,
    5: 53,
    6: 54,
    7: 55,
    8: 56,
    9: 57,
    SPACE: 32,
    ENTER: 13,
    BACKSPACE: 8,
    // Needed to add these for the mobile version because the event object wasnt working on mobile.
    // They are key value pairs for the key and the key code.
};

// On key down event
window.addEventListener("keydown", (e) => {
    // Set the text of elements
    eventKey.textContent = e.key;
    eventCode.textContent = e.code;
    eventWhich.textContent = e.which;
    codeH1.textContent = `Key Code: ${e.keyCode}`;
    codeH2.textContent = e.keyCode;

    // Manually setting the location of the keys because e.location just returns a number.
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

    // If the key is a space, set the text to "Blank"
    if (e.key === " ") {
        eventKey.textContent = "Blank";
    }
});

mobileInput.addEventListener("input", (e) => {
    // Set the text of elements
    eventKey.textContent = e.data;
    eventCode.textContent = charKeyCodes[e.data];
    eventWhich.textContent = e.which;
    codeH1.textContent = `Key Code: ${e.keyCode}`;
    codeH2.textContent = e.keyCode;
    eventLocation.textContent = "Standard";

    // If the key is a space, set the text to "Blank"
    if (e.key === " ") {
        eventKey.textContent = "Blank";
    }

    // If the input is empty, set the text to "Blank"
    if (!e.target.value) {
        eventKey.textContent = "Blank";
    }
});
