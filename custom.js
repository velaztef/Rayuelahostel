jQuery(function($) {
      $(window).on('scroll', function() {
              if ($(this).scrollTop() >= 200) {
                    $('.navbar').addClass('fixed-top');
              } else if ($(this).scrollTop() == 0) {
                    $('.navbar').removeClass('fixed-top');
              }
        });
        
        function adjustNav() {
              var winWidth = $(window).width(),
                    dropdown = $('.dropdown'),
                    dropdownMenu = $('.dropdown-menu');
              
              if (winWidth >= 768) {
                    dropdown.on('mouseenter', function() {
                          $(this).addClass('show')
                                .children(dropdownMenu).addClass('show');
                    });
                    
                    dropdown.on('mouseleave', function() {
                          $(this).removeClass('show')
                                .children(dropdownMenu).removeClass('show');
                    });
              } else {
                    dropdown.off('mouseenter mouseleave');
              }
        }
        
        $(window).on('resize', adjustNav);
        
        adjustNav();
  });


//wow//

new WOW().init();


//boton arriba//

$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}