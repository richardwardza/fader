/**
 * Created by richard on 2015/07/26.
 */

var fade_timeout;

function startFadeout() {
    fade_timeout = setTimeout(function() {
        $('.fade').addClass('out');
    }, 4000);
}

$(document).ready(function() {

    startFadeout();

    $(document).mousemove(function(){
        clearTimeout(fade_timeout);

        $('.fade.out').removeClass('out');
        startFadeout();
    });

});