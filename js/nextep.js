class ModalWindow {
    constructor(title, button1, button2, nextVideoId1, nextVideoId2) {
        this.title = title;
        this.button1 = button1;
        this.button2 = button2;
        this.nextVideoId1 = nextVideoId1;
        this.nextVideoId2 = nextVideoId2;
    }
}

class ModalWindows {
    constructor() {
        this.modalWindows = [];
    }

    addWindow(title, button, button2, nextVideoId1, nextVideoId2) {
        var mw = new ModalWindow(title, button, button2, nextVideoId1, nextVideoId2);
        this.modalWindows.push(mw);
    }

    getLength() { return this.modalWindows.length; }

    getById(id) { return this.modalWindows[id]; }
}

var currentVideoIndex = 0;
const videos = [
    "videos/video.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4"
];

const titles = ["Нюхать меф?", "Кому позвонить?", "Кому позвонить?", "Согласиться?"];
const button1 = ["Да", "Позвонить Артёму", "Позвонить Артёму", "Да","Да"];
const button2 = ["Нет", "Позвонить Еве", "Позвонить Еве", "Нет","Нет"];
const nextVideoId1 = [1, 3, 3, 0]
const nextVideoId2 = [2, 0, 0, 4];
const scrollcontroller = {
    disabledscroll() {
        document.body.style.overflow = 'hidden';
    },
    enabledscroll() {
        document.body.style.overflow = '';
    },
}
var modalWindows = new ModalWindows();
for (var i = 0; i < titles.length; i++) {
    modalWindows.addWindow(titles[i], button1[i], button2[i], nextVideoId1[i], nextVideoId2[i]);
}

function videoChange(id) {
    currentVideoIndex = id;
    var video = document.getElementById("video");
    var source = document.getElementById("source");
    source.src = videos[id];
    video.load();
    video.play();
}

document.addEventListener("DOMContentLoaded", function (event) {
    var imageBoxes = document.querySelectorAll(".image-box");
    imageBoxes.forEach(function (box, index) {
        box.addEventListener("click", function () {
            window.scrollTo(0,0);
            videoChange(index);
            modalbutton.innerHTML = "Пауза";
            onclick = 0;

        });
    });

    var modalTitle = document.getElementById("modalTitle");
    var modalContent = document.getElementById("modalContent");
    var modalButton = document.getElementById("modalButton");
    var popup = document.getElementById("modalwindow");
    var background2 = document.getElementById("background2");
    var player = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
        player[i].addEventListener('ended', function() {
            showModal();
            scrollcontroller.disabledscroll();
            currentVideoIndex = Array.from(videos).indexOf(this);
        });
    }

    function showModal() {
        var modalTitle = document.getElementById("modalTitle");
        var modalButton1 = document.getElementById("closeButton1");
        var modalButton2 = document.getElementById("closeButton2");
        modalTitle.innerHTML = modalWindows.getById(currentVideoIndex).title;
        modalButton1.innerHTML = modalWindows.getById(currentVideoIndex).button1;
        modalButton2.innerHTML = modalWindows.getById(currentVideoIndex).button2;
        var next1 = modalWindows.getById(currentVideoIndex).nextVideoId1;
        var next2 = modalWindows.getById(currentVideoIndex).nextVideoId2;
        modalButton1.addEventListener('click', function() {
            videoChange(next1);
            popup.style.display = "none";
            background2.style.display = "none";
            scrollcontroller.enabledscroll();
        });
        modalButton2.addEventListener('click', function() {
            videoChange(next2);
            popup.style.display = "none";
            background2.style.display = "none";
            scrollcontroller.enabledscroll();
        });
        background2.style.display = "flex";
        popup.style.display = "block";
    }


    function resumeVideo() {
        popup.style.display = "none";
        videos[currentVideoIndex].play();
    }
});
