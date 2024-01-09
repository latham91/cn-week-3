const boom = document.getElementById("boom-wav");
const clap = document.getElementById("clap-wav");
const hihat = document.getElementById("hihat-wav");
const kick = document.getElementById("kick-wav");
const openhat = document.getElementById("openhat-wav");
const ride = document.getElementById("ride-wav");
const snare = document.getElementById("snare-wav");
const tink = document.getElementById("tink-wav");
const tom = document.getElementById("tom-wav");

const bassAnim = document.querySelector(".bass-body-inner");
const hihatAnimTop = document.querySelector(".hihat-symbal-top");
const hihatAnimBottom = document.querySelector(".hihat-symbal-bottom");
const rideAnimTop = document.querySelector(".ride-symbal-top");
const rideAnimBottom = document.querySelector(".ride-symbal-bottom");
const snareAnim = document.querySelector(".snare-top");
const tomAnim = document.querySelector(".tom-top");

document.addEventListener("keypress", (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 65 || e.keyCode === 97) {
        bassAnim.style.animation = "bass 0.2s linear";

        setTimeout(() => {
            bassAnim.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        boom.pause();
        boom.currentTime = 0;
        boom.play();
    } else if (e.keyCode === 83 || e.keyCode === 115) {
        clap.pause();
        clap.currentTime = 0;
        clap.play();
    } else if (e.keyCode === 68 || e.keyCode === 100) {
        hihatAnimTop.style.animation = "hihatTopRotate 0.2s linear";
        hihatAnimBottom.style.animation = "hihatBottomRotate 0.2s linear";

        setTimeout(() => {
            hihatAnimTop.style.removeProperty("animation");
            hihatAnimBottom.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        hihat.pause();
        hihat.currentTime = 0;
        hihat.play();
    } else if (e.keyCode === 70 || e.keyCode === 102) {
        bassAnim.style.animation = "bass 0.2s linear";

        setTimeout(() => {
            bassAnim.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        kick.pause();
        kick.currentTime = 0;
        kick.play();
    } else if (e.keyCode === 71 || e.keyCode === 103) {
        hihatAnimTop.style.animation = "hihatTopOpen 0.2s linear";
        hihatAnimBottom.style.animation = "hihatBottomOpen 0.2s linear";

        setTimeout(() => {
            hihatAnimTop.style.removeProperty("animation");
            hihatAnimBottom.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        openhat.pause();
        openhat.currentTime = 0;
        openhat.play();
    } else if (e.keyCode === 72 || e.keyCode === 104) {
        rideAnimTop.style.animation = "rideRotate 0.2s linear";
        rideAnimBottom.style.animation = "rideRotate 0.2s linear";

        setTimeout(() => {
            rideAnimTop.style.removeProperty("animation");
            rideAnimBottom.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        ride.pause();
        ride.currentTime = 0;
        ride.play();
    } else if (e.keyCode === 74 || e.keyCode === 106) {
        snareAnim.style.animation = "tomShake 0.2s linear";

        setTimeout(() => {
            snareAnim.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        snare.pause();
        snare.currentTime = 0;
        snare.play();
    } else if (e.keyCode === 75 || e.keyCode === 107) {
        tink.pause();
        tink.currentTime = 0;
        tink.play();
    } else if (e.keyCode === 76 || e.keyCode === 108) {
        tomAnim.style.animation = "tomShake 0.2s linear";

        setTimeout(() => {
            tomAnim.style.removeProperty("animation");
        }, 200); // Removes animation after 200ms

        tom.pause();
        tom.currentTime = 0;
        tom.play();
    }
});
