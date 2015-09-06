
//========================================
// <<<<<<<<<< Start Countdown >>>>>>>>>>>>
//========================================
var redirect = "/workout1";
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        //minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            window.location.href = redirect;
        }
    }, 1000);
}

window.onload = function () {
    var tenSeconds = 10 * 1,
        display = document.querySelector('#time');
    startTimer(tenSeconds, display);
};



// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});




