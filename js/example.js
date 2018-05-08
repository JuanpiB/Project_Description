/* =====================
  Global Variables
===================== */
var data;  // for holding data
var stringFilter = "";
var selectValue = 'All';
var currentSlide = 1;
var numSlides = 6;
$('#Previous').hide();
$('#Slide2').hide();
$('#Slide3').hide();
$('#Slide4').hide();
$('#Slide5').hide();
$('#Slide6').hide();
$('#Slide7').hide();
$('#Slide8').hide();

//Slide Functions

function displaySlide(currentSlide) {
  $('.slide').hide();
  $('#Slide${currentSlide}').show();
  if (currentSlide==1) {
    $('#Slide1').show();
  }
}

$('#Previous').click(function() {
    if (currentSlide > 1) {
    currentSlide -= 1;
    }
    if (currentSlide == 1) { $("#Previous").hide();
    }
    else if (currentSlide < numSlides) {
     $('#Next').show();
    }
    if (currentSlide ==1) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==2) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==3) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==4) map.setView ([20.743199, -100.446984], 15);
    if (currentSlide ==5) map.setView ([20.589122, -100.380699], 15);
    if (currentSlide ==6) map.setView ([20.666493, -100.422462], 15);
    displaySlide(currentSlide);
    console.log(currentSlide);
});

$('#Next').click(function() {
  if (currentSlide < numSlides) {
  currentSlide += 1;
    }
  if (currentSlide == numSlides) {
  $( "#Next" ).hide();
    }
   else if (currentSlide > 1) {
    $('#Previous').show();
    }
    if (currentSlide ==1) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==2) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==3) map.setView ([20.614533, -100.401637], 11);
    if (currentSlide ==4) map.setView ([20.743199, -100.446984], 15);
    if (currentSlide ==5) map.setView ([20.589122, -100.380699], 16);
    if (currentSlide ==6) map.setView ([20.666493, -100.422462], 16);
    displaySlide(currentSlide);
    console.log(currentSlide);
});
