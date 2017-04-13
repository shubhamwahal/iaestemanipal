$("audio").prop('unmuted', true);

$(".unmute-audio").click(function () {
    if ($("audio").prop('muted')) {
        $("audio").prop('muted', false);
        $(this).addClass('unmute-audio');

    } else {
        $("audio").prop('muted', true);
        $(this).removeClass('unmute-audio');
    }
    console.log($("audio").prop('unmuted'))
});