/*My-Artists-Page-effect*/

$(window).scroll(function() {
   artists();
    function artists() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax--bg').css('background-position' , 'center '+(wScroll*.8) +'px')

}

});