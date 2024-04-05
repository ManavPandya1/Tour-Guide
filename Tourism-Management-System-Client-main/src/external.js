$(window).scroll(function(){
    if($(this).scrollTop()>=100) {
        $('nav').addClass('nav-fixed');
    }
    else{
        $nav('nav').removeClass('nav-fixed');
    }
});

//typewrite
