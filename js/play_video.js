$('.video>.play').click(function () {
    $('#v1').show();
    $(this).hide();
    $('.video>img').hide();

});

let vid = document.getElementById("v1");
vid.onended = function () {
    $('.video>.play').show();
    $('.video>img').show();
    $('#v1').hide();
};

$('.intro>.play').click(function () {
    $('#v2').show();
    $(this).hide();
    $('.intro>img').hide();
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('v2', {
        height: '415',
        width: '415',
        videoId: 'c-XG8k_w1LM', //https://www.youtube.com/embed/c-XG8k_w1LM
        playerVars: {
            'autoplay': 1,
            'mute': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}



function onPlayerStateChange(event) {
    console.log(event.data)
    if (event.data == 0) {

        stopVideo();
        $('#v2').hide();
        $('.intro>.play').show();
        $('.intro>img').show();
    }
}

function stopVideo() {
    player.stopVideo();
}
