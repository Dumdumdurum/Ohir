window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function playFunction(){
    var vid = document.getElementById('videoStory');
    vid.style.display = 'block';
    document.getElementById('playBtn').style.display = 'none';
    vid.play();
}
var vid = document.getElementById('videoStory');

document.getElementById('videoStory').onpause = function(){
    document.getElementById('videoStory').style.display = 'none';
    document.getElementById('playBtn').style.display = 'block';
    alert("video paused")
};

function pauseFunction(){
    document.getElementById('videoStory').style.display = 'none';
    document.getElementById('playBtn').style.display = 'block';
}

