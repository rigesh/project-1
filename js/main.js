//Main Menu
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");
$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});

//Append and Prepend
$('.first ul').clone().prependTo('.main-nav').addClass('desk-hide')
$('.last ul').clone().appendTo('.main-nav').addClass('desk-hide')



//slim header//


 $(window).scroll(function() {    
   var scroll = $(window).scrollTop();
    if (window.matchMedia('(min-width: 1200px)').matches) {
       if (scroll >= 50) {
         $(".top-header").addClass("slim-header");           
             
       } else {
         $(".top-header").removeClass("slim-header");   
         
        
        }
    } 


  });
//slim header End//