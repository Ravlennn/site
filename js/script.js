var video = document.getElementById("video");
var Element = document.getElementById("box");
var btn = document.getElementById("close-my-modal-btn-1");
const progressCookie = document.cookie.match(/progress=([0-9]+)/);
progress = progressCookie ? parseInt(progressCookie[1]) : 0;
if (progress) {
    video.currentTime = progress;
}

function handleButtonClick() {
    Element.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener("click", handleButtonClick);

function togglePlay() {
    let progress = video.currentTime;
    document.cookie = `progress=${progress}`;
    console.log(progress);
    video.pause();
}

function resumeVideo() {
    video.play();
}

function toggleFullScreen() {
    if (video.requestFullscreen) {
        if (document.fullScreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen();
        }
    }
}

function skipAhead(seconds) {
    if (video.duration < video.currentTime) { return; }
    video.currentTime += seconds;
}

function playAgain(second) {
    video.currentTime = second;
    video.play();
}
