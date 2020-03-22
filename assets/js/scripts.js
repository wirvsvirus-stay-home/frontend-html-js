$(document).ready(function(){

    var user = null;

    if(getCookie("cguard-user") === ""){
        setCookie("cguard-user", createUUID(), 365);
    }else{
        // $.get("localhost:3000/users/" + getCookie("cguard-user"), function(data){
        //     console.log(data);
        // });
    }
    
    get_leaderboard();

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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

 function get_leaderboard(){
    $.get("https://www.cguard.de/api/v1/leaders", function(data){
        var list = "";
        for(index in data["content"]){
            var leader = data["content"][index];
            console.log(leader);
            list += '<li class="cg-mission-item cg-player-bar cg-player-background cg-column-wrapper">' +
                        '<div class="cg-column cg-player-global-rank cg-w10">'+
                            leader.rank +
                        '</div>' +
                        '<div class="cg-mission-complete cg-player-background cg-player-name-wrapper cg-column cg-w75">' +
                            '<img class="cg-player-name-avatar" src="assets/img/fake-avatar.png" />' +
                            '<div>' +
                                '<img class="cg-player-name-rank" src="assets/img/ranks/rank-4.png" />' +
                                '<h2><img class="cg-player-flag" src="assets/img/flags/de.png" />' + leader.username + '</h2>' +
                                '<p>Rank #' + leader.rank + '</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="cg-column cg-player-background cg-w15">' +
                            '<strong class="cg-score">' + leader.score + ' C</strong>' +
                        '</div>' +
                    '</li>'
        }
        $('#leaderboard').html(list);
    });
 }