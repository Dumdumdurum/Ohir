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
    vid.onpause = function(){
        vid.style.display = 'none';
        document.getElementById('playBtn').style.display = 'block';
    };
}



function pauseFunction(){
    document.getElementById('videoStory').style.display = 'none';
    document.getElementById('playBtn').style.display = 'block';
}
$(function() {
    console.log('DOM1');
    $(document).ready(function () {
        //rotation speed and timer
        console.log('DOM');
        var speed = 5000;

        var run = setInterval(rotate, speed);
        var slides = $('.slide');
        var container = $('#slides ul');
        var elm = container.find(':first-child').prop("tagName");
        var item_width = container.width();
        var prev = 'prev'; //id of previous button
        var next = 'next'; //id of next button
        slides.width(item_width); //set the slides to the correct pixel width
        container.parent().width(item_width);
        container.width(slides.length * item_width); //set the slides container to the correct total width
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();


        //if user clicked on prev button

        $('#buttons a').click(function (e) {
            //slide the item

            if (container.is(':animated')) {
                return false;
            }
            if (e.target.id === prev) {
                container.stop().animate({
                    'left': 0
                }, 1000, function () {
                    container.find(elm + ':first').before(container.find(elm + ':last'));
                    resetSlides();
                });
            }

            if (e.target.id === next) {
                container.stop().animate({
                    'left': item_width * -2
                }, 1000, function () {
                    container.find(elm + ':last').after(container.find(elm + ':first'));
                    resetSlides();
                });
            }

            //cancel the link behavior
            return false;

        });

        //if mouse hover, pause the auto rotation, otherwise rotate it
        $('#carousel').mouseenter(function () {
            clearInterval(run);
        }).mouseleave(function () {
            run = setInterval(rotate, speed);
        });


        function resetSlides() {
            //and adjust the container so current is in the frame
            container.css({
                'left': -1 * item_width
            });
        }

    });
//a simple function to click next link
//a timer will call this function, and the rotation will begin

    function rotate() {
        $('#next').click();
    }
});
function nextFunction(){
    var active = $('.active');
    var last = $('.dot:last-child');
    var first = $('.dot:first-child');
    if(last.hasClass('active')){
        last.removeClass('active');
        first.addClass('active');
    } else {
        $('.active').next().addClass('active');
        active.removeClass('active');
    }
}
function prevFunction() {

}

$('#OVERLAY').click(function(){
    console.log('hello');
  $('.OVERLAY').toggleClass('hidden')
});

function hideOverlayFunction(){
    console.log('bye');
    $('.OVERLAY').toggleClass('hidden');
}
