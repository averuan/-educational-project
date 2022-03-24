$(function(){
  $(window).scroll(function() {
    
    if ($(this).scrollTop() >= 90) {
      $(".header").addClass("header--fix");
    } else {
      $(".header").removeClass("header--fix");
    }
  });

  $(".header__inner a, .hero__content a, footer a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
 
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.burger').click(function (event) {
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');
    $('.menu__link').toggleClass('menu__link--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link').click(function (event) {
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
    $('.burger').toggleClass('burger--active');
  });
  
  
  var Mixer = mixitup ( '.portfolio__content' );
    
  
});













 // var HeaderTop = $('#header').offset().top;
        
    //    $(window).scroll(function(){
        //        if( $(window).scrollTop() > HeaderTop ) {
           //             $('#header').css({position: 'fixed', top: '0px'});
          //      } else {
           //             $('#header').css({position: 'static'});
         //       }
      //  });

