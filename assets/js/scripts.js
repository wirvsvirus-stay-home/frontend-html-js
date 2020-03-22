$(document).ready(function(){

    $("cg-start-game").click(function(){
        setCookie("cguard-user", createUUID(), 365);
        $.post("https://www.cguard.de/api/v1/users",
            {
                "country": "",
                "latitude": "",
                "longitude":"",
                "radius": 100
            },
            function(data){

            }
        )
    });

    if(getCookie("cguard-user") === ""){
        setCookie("cguard-user", createUUID(), 365);
    }else{
    }

    setInterval(get_leaderboard, 30000);
    var protected_interval = setInterval(function(){
        var time_ms_old = getCookie("cguard-time");
        var time_ms_now = Date.now();
        var time_left = (1000 * 60 * 60) - (time_ms_now - time_ms_old);
        var time_string = parseInt(time_left/1000/60/60)+":"+parseInt(time_left/1000/60)+" h";
        update_progress(protected_interval, time_string);
        if(time_left < 600000 && $(".cg-recharge-base").css("display") == "none"){
            $(".cg-recharge-base").fadeIn();
        }else if(time_left <= 0){
            $('body').addClass('baseOrangeStatusActive');
            $('body').removeClass('baseRedStatusActive');
            $(".cg-base-status-headline").text("Return to base");
            $(".cg-base-status-subline").text("0:30 h");
            var abandoned_interval = setInterval(function(){
                var time_ms_now = Date.now();
                var time_left = (1000 * 60 * 30) - (time_ms_now - time_ms_old);
                var time_string = parseInt(time_left/1000/60/60)+":"+parseInt(time_left/1000/60)+" h";
                update_progress(abandoned_interval, time_string);
            }, 2000);
        }
    }, 36000);
    

    var user = null;


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

 function update_progress(interval, time){
    var current_height = $('.cg-progress-mask').css("height");
    if(current_height[0] === "9"){
        current_height = current_height.substring(0, 2);
    }else{
        current_height = current_height.substring(0, 3);
    }
    console.log(current_height);
    if(current_height === "261"){
        clearInterval(interval);
    }else{
        current_height++;
        $('.cg-progress-mask').css("height", current_height + "px");
        $(".cg-base-status-subline").text(time);
    }
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
