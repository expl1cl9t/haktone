let header = $(".header");
let lastScroll = 0;
$(window).scroll(() => {
    header.css("opacity",1 - $(this).scrollTop() / 500);
    if(header.css("opacity") == 0){
        header.css("display","none");
    }
    else if(header.css("opacity") > 0){
        header.css("display","inherit");
    }
});