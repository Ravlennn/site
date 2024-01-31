document.addEventListener("DOMContentLoaded", function (event) {
    var video = document.getElementById("video");
    var volumeSlider = document.getElementById("volumeSlider");

    const volumeCookie = document.cookie.match(/volume=((-?\d+)(\.\d+)?)/);
    volume = volumeCookie ? parseFloat(volumeCookie[1]) : 0;
    console.log(volume);

    if (volume) {
        video.volume = volume;
        volumeSlider.value = volume;
    }


    volumeSlider.addEventListener("input", function () {
        video.volume = volumeSlider.value;
        volume = volumeSlider.value;
        document.cookie = `volume=${volume}`;
    });
});
