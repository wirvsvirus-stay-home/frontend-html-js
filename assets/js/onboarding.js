$(document).ready(function(){

  $('.cg-onboarding-slider').slick({
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.cg-onboarding-slider').slick('slickGoTo', slideno - 1);
  });

 });
