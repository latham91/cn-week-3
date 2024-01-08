const activityOneBtn = document.querySelector(".btn-activity-one");
const activityOneImg = document.querySelector(".img-activity-one");

// ACTIVITY 1 CODE
// Ive create a utility class called hidden
// that has 'display: none' as a style

activityOneBtn.addEventListener("click", () => {
    // Toggle the hidden class on the image
    activityOneImg.classList.toggle("hidden");

    // If the image is hidden, change the button text to "SHOW"
    if (activityOneImg.classList.contains("hidden")) {
        activityOneBtn.textContent = "SHOW";
    } else {
        activityOneBtn.textContent = "HIDE";
    }
});

// ACTIVITY 2 CODE
const activityTwoBtn = document.querySelector(".btn-activity-two");
const activityTwoImg = document.querySelector(".img-activity-two");
const activityTwoInput = document.querySelector(".input-activity-two");

activityTwoBtn.addEventListener("click", () => {
    if (activityTwoInput.value === "") {
        // Validate the input value to check if it has text
        alert("Please enter a valid URL");
    } else {
        // Set the image src to the input value
        activityTwoImg.src = activityTwoInput.value;
    }
});

// ACTIVITY 3 CODE
const activityThreeBtn = document.querySelector(".btn-activity-three");
const activityThreeHeading = document.querySelector(".activity-three-heading");
const activityThreeInput = document.querySelector(".input-activity-three");

activityThreeBtn.addEventListener("click", () => {
    // Validate input value to check if it has text
    if (activityThreeInput.value === "") {
        alert("Please a colour");
    } else {
        // Set the heading colour to the input value
        activityThreeHeading.style.color = activityThreeInput.value.toLowerCase();
    }
});

// ACTIVITY 4 CODE
const activityFourParagraph = document.querySelector(".activity-four-coords");

document.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Change p tag to contain the x and y coordinates
    activityFourParagraph.textContent = `X: ${x}, Y: ${y}`;
});
