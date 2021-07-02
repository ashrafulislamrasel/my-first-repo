/*============================== 
	- Template Name: The Day - Responsive HTML Wedding Template
	- Author: Ashraful
	- Version: 1.00
	- Website: www.ashrafulislam.xyz
================================= */
/* 
Script Guide
============================
1.timeline 
2.bridesmaids&groomMens 
3.counter 
4.blog 
5.Gift 
============================*/
(function ($) {

    "use strict";
    
     /*------------------------------------------
        = pre-loader starts
    -------------------------------------------*/

    $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
    })
    
     /*------------------------------------------
        = pre-loader starts
    -------------------------------------------*/
    
    /*------------------------------------------
        = Headhesive starts
    -------------------------------------------*/
        // Set options
        var options = {
            offset: '#showHere',
            offsetSide: 'top',
            classes: {
                clone:   'banner--clone',
                stick:   'banner--stick',
                unstick: 'banner--unstick'
            }
        };

        // Initialise with options
        var banner = new Headhesive('.banner', options);
    /*------------------------------------------
        = Headhesive ends
    -------------------------------------------*/
    
    
    /*------------------------------------------
        = timeline starts
    -------------------------------------------*/
//    $.fn.timeline = function () {
//        var selectors = {
//            id: $(this),
//            item: $(this).find(".timeline-item"),
//            activeClass: "timeline-item--active",
//            img: ".timeline__img"
//        };
//        selectors.item.eq(0).addClass(selectors.activeClass);
//        selectors.id.css(
//            "background-image",
//            "url(" +
//            selectors.item
//            .first()
//            .find(selectors.img)
//            .attr("src") +
//            ")"
//        );
//        var itemLength = selectors.item.length;
//        $(window).scroll(function () {
//            var max, min;
//            var pos = $(this).scrollTop();
//            selectors.item.each(function (i) {
//                min = $(this).offset().top;
//                max = $(this).height() + $(this).offset().top;
//                var that = $(this);
//                if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
//                    selectors.item.removeClass(selectors.activeClass);
//                    selectors.id.css(
//                        "background-image",
//                        "url(" +
//                        selectors.item
//                        .last()
//                        .find(selectors.img)
//                        .attr("src") +
//                        ")"
//                    );
//                    selectors.item.last().addClass(selectors.activeClass);
//                } else if (pos <= max - 40 && pos >= min) {
//                    selectors.id.css(
//                        "background-image",
//                        "url(" +
//                        $(this)
//                        .find(selectors.img)
//                        .attr("src") +
//                        ")"
//                    );
//                    selectors.item.removeClass(selectors.activeClass);
//                    $(this).addClass(selectors.activeClass);
//                }
//            });
//        });
//    };
//    $("#timeline-1").timeline();
    /*------------------------------------------
        = timeline ends
    -------------------------------------------*/
    
    /*------------------------------------------
        = BridesMaid & GroomsMen's ends
    -------------------------------------------*/
    $('.people_slide').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '.slidPrv',
        nextArrow: '.slidNext',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    /*------------------------------------------
        = BridesMaid & GroomsMen's ends
    -------------------------------------------*/
    
    
    /*------------------------------------------
        = counter starts
    -------------------------------------------*/
    function makeTimer() {

        var endTime = new Date("05 March 2020 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");

    }
    setInterval(function () {
        makeTimer();
    }, 1000);
    /*------------------------------------------
        = counter ends
    -------------------------------------------*/

    /*------------------------------------------
        = blog starts
    -------------------------------------------*/
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

    /*------------------------------------------
        = blog ends
    -------------------------------------------*/
    

    /*------------------------------------------
        = Gift starts
    -------------------------------------------*/
    $('.Gift').slick({
        autoplay:true,
  autoplaySpeed:1500,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    /*------------------------------------------
        = Gift ends
    -------------------------------------------*/


    
    

})(window.jQuery);