document.addEventListener("DOMContentLoaded", function (event) {
    var popups = document.querySelectorAll(".popup");
    var closeButtons = document.querySelectorAll(".closeBtn");
    var background = document.querySelector(".background");
    scrollcontroller.disabledscroll();
    closeButtons.forEach(function (btn, index) {
        btn.addEventListener("click", function () {
            popups[index].style.display = "none";
            background.style.display = "none";
            scrollcontroller.enabledscroll();
        });
    });

    // Отображение popup при первом запуске страницы
    popups[0].style.display = "block";
    background.style.display = "block";
});
