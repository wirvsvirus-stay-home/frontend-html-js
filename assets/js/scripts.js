$(document).ready(function(){


  $("h3").on("click", function(){
      $('.cg-home-screen').fadeOut();
      $('.cg-home-screen').queue(function() {
          $('.cg-leaderboard-screen').fadeIn();
          $('body').addClass('cg-leaderboard-screen-active');
          $(this).dequeue();
      });
  });

  /* Leader Toggle Logic */

  /* Activate */

  $(".cg-leaderboard-toggle a").on("click", function(){
      $('.cg-home-screen').fadeOut();
      $('.cg-home-screen').queue(function() {
          $('.cg-leaderboard-screen').fadeIn();
          $('body').addClass('cg-leaderboard-screen-active');
          $(this).dequeue();
      });
  });

  /* Deactivate */

  $(".cg-leaderboard-back-button").on("click", function(){
    $('body').removeClass('cg-leaderboard-screen-active');
    $('.cg-leaderboard-screen').fadeOut();
    $('.cg-leaderboard-screen').queue(function() {
        $('.cg-home-screen').fadeIn();
        $(this).dequeue();
    });
  });

 });
