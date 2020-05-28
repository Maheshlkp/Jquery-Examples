$(document).ready(function(){
    $("button").click(function(){
        $("p:first").hide();  //selectors in jquery
        $("h1").hide();
    })
})

$(function(){ 
    $("h1").click(function(){
        $("img").fadeOut(1000);
        $("img").toggle(1000);
        $("img").slideUp(1000);
        $("img").slideToggle(1000);
        $("img").animate({
            height:'+=300px',
            width:'+=300px' 
        },1000);
        $("img").css('background-color','purple').slideUp(1000).slideDown(1500);


    })
})