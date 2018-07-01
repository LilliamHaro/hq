
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
  var elem = document.getElementsByClassName("hinata-jumping")[0];   
  var right = -100;
  var id = setInterval(frame, 100);
  function frame() {
    if (right == 0) {
      clearInterval(id);
    } else {
      right++; 
      elem.style.right = right + 'px'; 
    }
  }
}
move();
});