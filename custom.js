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

  //Animaciones//

let animado = document.querySelectorAll (".animado");

function mostrarScroll() {
      let scrollTop = document.documentElement.scrollTop;
      for(var i=0; i< animado.length; i ++ ) {
            let alturaAnimado = animado[i].offsetTop;
            if( alturaAnimado - 500 < scrollTop) {
                  animado[i].style.opacity = 1;
                  animado[i].classList.add("mostrarArriba");
            }
      }

}

window. addEventListener ('scroll', mostrarScroll);

//gallery
