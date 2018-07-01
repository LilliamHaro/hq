
wow = new WOW({
  animateClass: 'animated',
  offset: 100
});
wow.init();

$(document).ready(function() {
  // var scroll = function() {
  //   if ($(document).scrollTop() > 60) {
  //       $('.nav-2').removeClass('mg-top-100');
  //     $('.nav-2').removeClass('hideme');
  //     // $('.navbar-fixed-top').removeClass('height-10');
  //   } else {
  //       $('.nav-2').addClass('mg-top-100');
  //     $('.nav-2').addClass('hideme');
  //     // $('.navbar-fixed-top').addClass('height-10');
  //   }
  // };
  // scroll();
  // $(window).scroll(function() {
  //   scroll();
  // });




function move() {
  var elem = document.getElementsByClassName("hinata-home")[0];   
  var width = 60;
  var id = setInterval(frame, 100);
  function frame() {
    if (width == 70) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + 'vw'; 
    }
  }
}
// move();
});