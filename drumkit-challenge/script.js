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
const snareBody = document.querySelector(".snare-body-outer");
const tomBody = document.querySelector(".tom-body-outer");
const keysContainer = document.querySelector(".keys-container");

// Refactor
const playBase = () => {
    bassAnim.style.animation = "bass 0.2s linear";

    setTimeout(() => {
        bassAnim.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    boom.pause();
    boom.currentTime = 0;
    boom.play();
};

const playClap = () => {
    clap.pause();
    clap.currentTime = 0;
    clap.play();
};

const playHihat = () => {
    hihatAnimTop.style.animation = "hihatTopRotate 0.2s linear";
    hihatAnimBottom.style.animation = "hihatBottomRotate 0.2s linear";

    setTimeout(() => {
        hihatAnimTop.style.removeProperty("animation");
        hihatAnimBottom.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
};

const playKick = () => {
    bassAnim.style.animation = "bass 0.2s linear";

    setTimeout(() => {
        bassAnim.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    kick.pause();
    kick.currentTime = 0;
    kick.play();
};

const playRide = () => {
    rideAnimTop.style.animation = "rideRotate 0.2s linear";
    rideAnimBottom.style.animation = "rideRotate 0.2s linear";

    setTimeout(() => {
        rideAnimTop.style.removeProperty("animation");
        rideAnimBottom.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    ride.pause();
    ride.currentTime = 0;
    ride.play();
};

const playOpenHat = () => {
    hihatAnimTop.style.animation = "hihatTopOpen 0.2s linear";
    hihatAnimBottom.style.animation = "hihatBottomOpen 0.2s linear";

    setTimeout(() => {
        hihatAnimTop.style.removeProperty("animation");
        hihatAnimBottom.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
};

const playSnare = () => {
    snareAnim.style.animation = "tomShake 0.2s linear";

    setTimeout(() => {
        snareAnim.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    snare.pause();
    snare.currentTime = 0;
    snare.play();
};

const playTink = () => {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
};

const playTom = () => {
    tomAnim.style.animation = "tomShake 0.2s linear";

    setTimeout(() => {
        tomAnim.style.removeProperty("animation");
    }, 200); // Removes animation after 200ms

    tom.pause();
    tom.currentTime = 0;
    tom.play();
};

keysContainer.childNodes.forEach((key, index) => {
    key.addEventListener("click", () => {
        switch (index) {
            case 1:
                playBase();
                break;
            case 3:
                playClap();
                break;
            case 5:
                playHihat();
                break;
            case 7:
                playKick();
                break;
            case 9:
                playOpenHat();
                break;
            case 11:
                playRide();
                break;
            case 13:
                playSnare();
                break;
            case 15:
                playTink();
                break;
            case 17:
                playTom();
                break;
        }
    });
});

bassAnim.addEventListener("click", playBase);
hihatAnimBottom.addEventListener("click", playHihat);
hihatAnimTop.addEventListener("click", playOpenHat);
rideAnimBottom.addEventListener("click", playRide);
snareBody.addEventListener("click", playSnare);
tomBody.addEventListener("click", playTom);

document.addEventListener("keypress", (e) => {
    if (e.keyCode === 65 || e.keyCode === 97) {
        playBase();
    } else if (e.keyCode === 83 || e.keyCode === 115) {
        playClap();
    } else if (e.keyCode === 68 || e.keyCode === 100) {
        playHihat();
    } else if (e.keyCode === 70 || e.keyCode === 102) {
        playKick();
    } else if (e.keyCode === 71 || e.keyCode === 103) {
        playOpenHat();
    } else if (e.keyCode === 72 || e.keyCode === 104) {
        playRide();
    } else if (e.keyCode === 74 || e.keyCode === 106) {
        playSnare();
    } else if (e.keyCode === 75 || e.keyCode === 107) {
        playTink();
    } else if (e.keyCode === 76 || e.keyCode === 108) {
        playTom();
    }
});
