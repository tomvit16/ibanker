(function ($) {
    $(document).ready(function () {
        $("a").click(function (event) {
            event.preventDefault();
        });

        $('div.lang a').click(function () {
            $('div.lang a.active').removeClass('active');
            $(this).addClass('active');
        });

        $('ul.nav li').click(function () {
            $('ul.nav li.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.footer__arrow a').click(function () {
            $('.footer__arrow a.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.hamburger').click(function () {
            $('#menu').toggleClass('d-block');
        });

        $('#menu ul li').click(function () {
            $('#menu ul li.active').removeClass('active');
            $(this).addClass('active');
        });
 
        var article = 'article1';
            
        $('.footer__arrow__2, .footer__arrow__1').click(function () {
            
            if (article == 'article1') { 
                article = 'article2';
                $('.footer__rectangle__2').css('border-bottom', '2px solid #fff');
                $('.footer__rectangle__1').css('border-bottom', '2px solid rgba(255, 255, 255, 0.1)');
                $('.footer__rectangle__2 a').css('color', '#fff');
                $('.footer__rectangle__1 a').css('color', 'rgba(255, 255, 255, 0.1)');
              $('.dropping-texts > p:nth-child(1)').css('animation', 'roll2 .5s linear');
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(1)').css('display', 'none');
            }, 500);
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(2)').css('display', 'block');
                $('.dropping-texts > p:nth-child(2)').css('animation', 'roll 0.5s linear');
            }, 500);
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(2)').css('animation', 'none');
            }, 1000);                   
            } else {
                    article = 'article1';
                 $('.footer__rectangle__1').css('border-bottom', '2px solid #fff');
                $('.footer__rectangle__2').css('border-bottom', '2px solid rgba(255, 255, 255, 0.1)');  
                $('.footer__rectangle__1 a').css('color', '#fff');
                $('.footer__rectangle__2 a').css('color', 'rgba(255, 255, 255, 0.1)');
              $('.dropping-texts > p:nth-child(2)').css('animation', 'roll2 .5s linear');
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(2)').css('display', 'none');
            }, 500);
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(1)').css('display', 'block');
                $('.dropping-texts > p:nth-child(1)').css('animation', 'roll 0.5s linear');
            }, 500);
            setTimeout(function () {
                $('.dropping-texts > p:nth-child(1)').css('animation', 'none');
            }, 1000);   
            }
        });

    });
})(jQuery);
