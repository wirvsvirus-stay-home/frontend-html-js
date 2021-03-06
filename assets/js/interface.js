$(document).ready(function(){

  /* Leaderboard Toggle Logic */

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
    event.preventDefault();
    $('body').removeClass('cg-leaderboard-screen-active');
    $('.cg-leaderboard-screen').fadeOut();
    $('.cg-leaderboard-screen').queue(function() {
        $('.cg-home-screen').fadeIn();
        $(this).dequeue();
    });
  });


  /* Mission */

  /* Check In Recharge Base Accept Ticket */

  /* Show Mission Ticket */
  $(".cg-recharge-base").on("click", function(){
    event.preventDefault();
    /* Show Ticket */
    $('.cg-ticket ul li:first-child').removeClass('cg-ticket-inactive');

    /* Recharge (Energy burst) Animation */;
    $('body').addClass('cg-power-item ').delay(1500).queue(function(next){
         $(this).removeClass('cg-power-item');
         next();
    });
    /**/

    /* Reset Height+ Timer  */
    $('.cg-progress-mask').css("height","261px");
    $(".cg-base-status-subline").text("1:00 h");

    /* Hide Mission Toggle */
    $(this).fadeOut('');
    $(this).queue(function() {
    /* Show Completed Mission */
        $('.cg-mission-item-hidden').fadeIn('slow');
        $(this).dequeue();
    });
  });

  /* Show Completed Mission */




  /* Remove */

  /* Fake Toggle Navigation */

  $("#toggle-green").on("click", function(){
    $('body').removeClass('baseOrangeStatusActive');
    $('body').removeClass('baseRedStatusActive');
    $(".cg-base-status-headline").text("Base protected");
    $(".cg-base-status-subline").text("0:10 h");
  });

  $("#toggle-orange").on("click", function(){
    $('body').addClass('baseOrangeStatusActive');
    $('body').removeClass('baseRedStatusActive');
    $(".cg-base-status-headline").text("Return to base");
    $(".cg-base-status-subline").text("0:30 h");
    $('.cg-progress-mask').css("height","90px");
  });

  $("#toggle-red").on("click", function(){
    $('body').addClass('baseRedStatusActive');
    $('body').removeClass('baseOrangeStatusActive');
    $(".cg-base-status-headline").text("Base unprotected");
    $(".cg-base-status-subline").text("0:10 h");
    $('.cg-progress-mask').css("height","90px");
  });

  /* Remove End*/

  /* Add On */


 });
