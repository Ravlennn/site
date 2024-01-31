document.addEventListener("DOMContentLoaded", function (event) {
    var modal = document.getElementById("my-modal");

    function showModalWhenInactive() {
        if (document.hidden) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }

    document.addEventListener("visibilitychange", showModalWhenInactive);
});