//========================================
// <<<<<<<<<< Start Countdown >>>>>>>>>>>>
//========================================



// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//         //minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         //minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var thirtySeconds = 3,
//         display = document.querySelector('#thirtySeconds');
//     startTimer(thirtySeconds, display);
// };

$( document ).ready(function() {


$('#myCarousel').bind('slide.bs.carousel', function (e) {
    console.log('slide event!');
});

$('#myCarousel').on('slide.bs.carousel', function (e) {
    console.log('slide ON event!');
    $('#myModal').modal('show'); 
});


});

// $("#carousel-example-generic").on('slide.bs.carousel', function () {
//             console.log('A new slide is about to be shown!');
//             // $('#myModal').modal('show'); 
//     });



// // Activate Carousel
// $("#myCarousel").carousel();

// // Enable Carousel Indicators
// $(".item").click(function(){
//     $("#myCarousel").carousel(1);
// });

// // Enable Carousel Controls
// $(".left").click(function(){
//     $("#myCarousel").carousel("prev");
// });

