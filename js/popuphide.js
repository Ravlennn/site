var modalbutton = document.getElementById("open-modal-btn")
let onclick = 0;
document.getElementById("open-modal-btn").addEventListener("click", function () {
    window.scrollTo(0,0);
    if (onclick === 0) {
    video.pause();
    modalbutton.innerHTML = "Продолжить";
    onclick = 1;
    document.getElementById("my-modal").classList.add("open");
    scrollcontroller.disabledscroll();
    }
    else {
        video.play();
        modalbutton.innerHTML = "Пауза";
        onclick = 0;
    }
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn-1").addEventListener("click", function () {
    scrollcontroller.enabledscroll();
    document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-my-modal-btn-2").addEventListener("click", function () {
    scrollcontroller.enabledscroll();
    document.getElementById("my-modal").classList.remove("open")
    modalbutton.innerHTML = "Пауза";
    onclick = 0;
})
document.getElementById("close-my-modal-btn-3").addEventListener("click", function () {
    scrollcontroller.enabledscroll();
    document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
