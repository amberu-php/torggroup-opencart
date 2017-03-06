var gl_path = jQuery('#gl_path').html();
function include(scriptUrl) {
    document.write('<script src="catalog/view/theme/' + gl_path + '/' + scriptUrl + '"></script>');
}

// =====================================================================================
// amberu
// below: some scripts that replaced from html,
// all that replaced from this script.js file,
// and helpers for this script
var amberuTheme624Script = {
    getChar: function (event) {
        if (event.which == null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode) // IE
        }

        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which)
        }

        return null;
    }
}

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');


/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);


/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    var menu = $('#stuck');
    if (o.hasClass('desktop') && menu.length) {
        include('js/scrollfix.js');

        $(window).load(function () {
            menu.scrollFix({
                style: false
            });
        });
    }
})(jQuery);

/* Stick up menus
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.min.js');
})(jQuery);

/* Unveil
 ========================================================*/
;
(function ($) {
    amberuCommon.unveil.init();
})(jQuery);

/* Magnificent
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    if (o.length > 0) {
        include('js/magnificent/jquery.ba-throttle-debounce.js');
        include('js/magnificent/jquery.bridget.js');
        include('js/magnificent/magnificent.js');

        $(document).ready(function () {

            o.find('li:first-child a').addClass('active');

            $('#product-image').bind("click", function (e) {
                var imgArr = [];
                o.find('a').each(function () {
                    img_src = $(this).data("image");

                    //put the current image at the start
                    if (img_src == $('#product-image').find('img').attr('src')) {
                        imgArr.unshift({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    else {
                        imgArr.push({
                            href: '' + img_src + '',
                            title: $(this).find('img').attr("title")
                        });
                    }
                });
                $.fancybox(imgArr);
                return false;
            });


            o.find('[data-image]').click(function (e) {
                e.preventDefault();
                o.find('.active').removeClass('active');
                var img = $(this).data('image');
                $(this).addClass('active');
                $('#product-image').find('.inner img').each(function () {
                    $(this).attr('src', img);
                })
            })

        });

    }
})
(jQuery);


/* Bx Slider
 ========================================================*/
;
(function ($) {
    var o = $('#image-additional');
    var o2 = $('#gallery');
    if (o.length || o2.length) {
        include('js/jquery.bxslider/jquery.bxslider.js');
    }

    if (o.length) {
        $(document).ready(function () {
            $('#image-additional').bxSlider({
                mode: 'vertical',
                pager: false,
                controls: true,
                slideMargin: 13,
                minSlides: 4,
                maxSlides: 4,
                slideWidth: 88,
                nextText: '<i class="fa fa-chevron-down"></i>',
                prevText: '<i class="fa fa-chevron-up"></i>',
                infiniteLoop: false,
                adaptiveHeight: true,
                moveSlides: 1
            });
        });
    }

    if (o2.length) {
        include('js/photo-swipe/klass.min.js');
        include('js/photo-swipe/code.photoswipe.jquery-3.0.5.js');
        include('js/photo-swipe/code.photoswipe-3.0.5.min.js');
        $(document).ready(function () {
            $('#gallery').bxSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 1,
                infiniteLoop: false,
                moveSlides: 1
            });
        });
    }

})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.quickview');
    var o2 = $('#default_gallery');
    if (o.length > 0 || o2.length > 0) {
        include('js/fancybox/jquery.fancybox.js');
    }

    if (o.length) {
        $(document).ready(function () {
            o.fancybox({
                maxWidth: 800,
                maxHeight: 600,
                fitToView: false,
                width: '70%',
                height: '70%',
                autoSize: false,
                closeClick: false,
                openEffect: 'elastic',
                closeEffect: 'elastic',
                speedIn: 600,
                speedOut: 600
            });
        });
    }

})(jQuery);

/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
    $(window).load(function () {
        $('#tm_menu .menu').superfish();
    });
})(jQuery);

/*facebook
========================================================= */
$(window).load(function () {
	 
	 if ($('.facebook.info').length) {
		$('.facebook_box').append($('.facebook.info'));
	 };
	 
});

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.testimonials');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                // Most important owl features
                items: 1,
                itemsCustom: false,
                singleItem: true,

                // Navigation
                pagination: false,
                navigation: true,
                navigationText: ['<i class="material-design-keyboard54"></i>', '<i class="material-design-keyboard53"></i>'],


            });
        });
    }
})(jQuery);

/* Box Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.box-carousel');
    if (o.length > 0) {
        $(document).ready(function () {
            $.each(o, function () {
                if ($(this).parents('aside').length == 0) {
                    o.owlCarousel({
                        // Most important owl features
                        items: 4,
                        itemsCustom: false,
                        itemsDesktop: [1199, 3],
                        itemsDesktopSmall: [980, 3],
                        itemsTablet: [767, 2],
                        itemsTabletSmall: false,
                        itemsMobile: [480, 1],

                        // Navigation
                        pagination: false,
                        navigation: true,
                        navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
                    });
                }
            });
        });
    }
})(jQuery);

/* GREEN SOCKS
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.find('body').hasClass('common-home')) {
        include('js/greensock/jquery.gsap.min.js');
        include('js/greensock/TimelineMax.min.js');
        include('js/greensock/TweenMax.min.js');
        include('js/greensock/jquery.scrollmagic.min.js');

        function listBlocksAnimate(block, element, row, offset, difEffect) {
            if ($(block).length) {
                var i = 0;
                var j = row;
                var k = 1;
                var effect = -1;

                $(element).each(function () {
                    i++;

                    if (i > j) {
                        j += row;
                        k = i;
                        effect = effect * (-1);
                    }

                    if (effect == -1 && difEffect == true) {
                        ef = TweenMax.from(element + ':nth-child(' + i + ')', 0.5, {
                            left: -1 * 200 - i * 300 + "px",
                            alpha: 0,
                            ease: Power1.easeOut
                        })

                    } else {
                        ef = TweenMax.from(element + ':nth-child(' + i + ')', 0.5, {
                            right: -1 * 200 - i * 300 + "px",
                            alpha: 0,
                            ease: Power1.easeOut
                        })
                    }

                    var scene_new = new ScrollScene({
                        triggerElement: element + ':nth-child(' + k + ')',
                        offset: offset,
                    }).setTween(ef)
                        .addTo(controller)
                        .reverse(false);
                });
            }
        }

        function listTabsAnimate(element) {
            if ($(element).length) {
                TweenMax.staggerFromTo(element, 0.3, {alpha: 0, rotationY: -90, ease: Power1.easeOut}, {
                    alpha: 1,
                    rotationY: 0,
                    ease: Power1.easeOut
                }, 0.1);
            }
        }

        $(document).ready(function () {
            controller = new ScrollMagic();
        });

        $(window).load(function () {
            //if ($(".fluid_container").length) {
            //    var welcome = new TimelineMax();
            //
            //    welcome.from(".fluid_container h2", 0.5, {top: -300, autoAlpha: 0})
            //        .from(".fluid_container h4", 0.5, {bottom: -300, autoAlpha: 0});
            //
            //    var scene_welcome = new ScrollScene({
            //        triggerElement: ".fluid_container",
            //        offset: -100
            //    }).setTween(welcome).addTo(controller).reverse(false);
            //}
        });
    }
})(jQuery);

/* Swipe Menu
 ========================================================*/
;
(function ($) {
    $(document).ready(function () {
        $('#page').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                return false
            }
        })

        $('.swipe-control').click(function () {
            if ($(this).parents('body').hasClass('ind')) {
                $(this).parents('body').removeClass('ind');
                $(this).removeClass('active');
                return false
            }
            else {
                $(this).parents('body').addClass('ind');
                $(this).addClass('active');
                return false
            }
        })
    });

})(jQuery);


/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* Toggle
 ========================================================*/
;
(function ($) {
    var o = $('.toggle');
    $(document).ready(function () {
        $('.toggle').click(function (e) {
            e.preventDefault();
            var tmp = $(this);
            o.each(function () {
                if ($(this).hasClass('active') && !$(this).is(tmp)) {
                    $(this).parent().find('.toggle_cont').slideToggle();
                    $(this).removeClass('active');
                }
            });
            $(this).toggleClass('active');
            $(this).parent().find('.toggle_cont').slideToggle();
        });
        $(document).on('click touchstart', function (e) {
            var container = $(".toggle-wrap");
            if (!container.is(e.target)
                && container.has(e.target).length === 0 && container.find('.toggle').hasClass('active')) {
                container.find('.active').toggleClass('active').parent().find('.toggle_cont').slideToggle();
            }
        })
    });
})(jQuery);

/* Radio Replacement
 ========================================================*/
;
(function ($) {
   amberuCommon.radioReplacer.replace();
})(jQuery);

function replaceForm() {
    var o = $('.radio');
    var input;
    o.each(function () {
        input = $(this).find('input[type="radio"]');
        input.attr('id', input.attr('name') + input.attr('value'));
        input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value')));
    });
    o = $('label.radio-inline');
    o.each(function () {
        input = $(this).find('input[type="radio"]');
        input.attr('id', input.attr('name') + input.attr('value'));
        input.insertBefore($(this).attr('for', input.attr('name') + input.attr('value')));
    });
    o = $('.checkbox');
    o.each(function () {
        input = $(this).find('input[type="checkbox"]');
        input.attr('id', input.attr('name') + input.attr('value'));
        input.insertBefore($(this).find('label').attr('for', input.attr('name') + input.attr('value')));
    });
    o = $('input[name=\'agree\'][type=\'checkbox\']');
    if (o.length) {
        o.attr('id', o.attr('name') + o.attr('value'));
        o.parent().append('<label for="' + o.attr('name') + o.attr('value') + '"></label>');
        $('label[for="' + o.attr('name') + o.attr('value') + '"]').insertAfter(o);
    }
    // amberu
    o = $('input.checkbox-agree[type=\'checkbox\']');
    if (o.length) {
        o.attr('id', o.attr('class') + o.attr('value'));
        o.parent().append('<label for="' + o.attr('class') + o.attr('value') + '"></label>');
        $('label[for="' + o.attr('class') + o.attr('value') + '"]').insertAfter(o);
    }
    // end
    o = $('select');
    o.selectbox({
        effect: "slide",
        speed: 400
    });
    var o = $('textarea');
    o.removeClass('form-control');
    var zone = $('select[name=\'zone_id\']');
    if (zone.length) {
        var timerId = 0;
        zone.each(function (i) {
            if ($(this).prev().find('.sbOptions li').length == 0) {
                var tmp = $(this);
                timerId = setInterval(function () {
                    tmp.selectbox('detach');
                    tmp.selectbox('attach');
                    if (tmp.prev().find('.sbOptions li').length != 0) {
                        clearInterval(timerId);
                    }
                }, 300);
            }
        })

        $('select[name=\'country_id\']').on('change', function () {
            setTimeout(function () {
                zone.selectbox('detach');
                zone.selectbox('attach');
            }, 300);

        })
    }
}


/* Accordion fix
 ========================================================*/
;
(function ($) {
    var o = $('#accordion');
    if (o.length) {
        include('js/jquery.selectbox-0.2.min.js');
        $(window).load(function () {
            $('body').delegate('.accordion-toggle', 'click', replaceForm);
            $('.accordion-toggle').trigger('click');
        });
    }
})(jQuery);


/* Checkbox Replacement
 ========================================================*/
;
(function ($) {
    amberuCommon.checkBoxReplacer.replace();
})(jQuery);


/* DatetimePicker
 ========================================================*/
;
(function ($) {
    amberuCommon.dateTimePicker.init();
})(jQuery);

/* Select Replacement
 ========================================================*/
;
(function ($) {
    var o = $('select');
    if (o.length) {
        include('js/jquery.selectbox-0.2.js');
        $(document).ready(function () {
            o.selectbox({
                effect: "slide",
                speed: 400
            })
            var zone = $('select[name=\'zone_id\']');
            if (zone.length) {
                setTimeout(function () {
                    zone.selectbox('detach');
                    zone.selectbox('attach');
                }, 900);
                $('select[name=\'country_id\']').on('change', function () {
                    setTimeout(function () {
                        zone.selectbox('detach');
                        zone.selectbox('attach');
                    }, 300);
                })
            }

        });
    }
})(jQuery);


/* Textarea Replacement
 ========================================================*/
;
(function ($) {
    amberuCommon.textAreaReplacer.replace();
})(jQuery);

/* Quantity Counter
 ========================================================*/
;
(function ($) {
    amberuCommon.quantityCounter.init();
})(jQuery);


$(document).ready(function () {
    if ($('.breadcrumb').length) {
        var o = $('.breadcrumb li:last-child');
        var str = o.find('a').html();
        o.find('a').css('display', 'none');
        o.append('<span>' + str + '</span>');
    }
	$('.nav__primary .menu > li > a').each(function(){
		var title = $(this).html();
		$(this).html('<span>'+title+'</span>');
	});
});

var flag = true;

function respResize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if ($('aside').length) {
        var leftColumn = $('aside');
    } else {
        return false;
    }


    if (width > 767) {
        if (!flag) {
            flag = true;
            leftColumn.insertBefore('#content');
            $('.col-sm-3 .box-heading').unbind("click");

            $('.col-sm-3 .box-content').each(function () {
                if ($(this).is(":hidden")) {
                    $(this).slideToggle();
                }
            })
        }
    } else {
        if (flag) {
            flag = false;
            leftColumn.insertAfter('#content');

            $('.col-sm-3 .box-content').each(function () {
                if (!$(this).is(":hidden")) {
                    $(this).parent().find('.box-heading').addClass('active');
                }
            });

            $('.col-sm-3 .box-heading').bind("click", function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').parent().find('.box-content').slideToggle();
                }
                else {
                    $(this).addClass('active');
                    $(this).parent().find('.box-content').slideToggle();
                }
            })
        }
    }
}

$(window).load(respResize);
$(window).resize(function () {
    clearTimeout(this.id);
    this.id = setTimeout(respResize, 500);
});

// moved from checkout/cart.tpl
$(document).ready(function() {
	$("input[name='quantity-counter'].cart-q").keypress(function(e) {
		e = e || event;

		if (e.ctrlKey || e.altKey || e.metaKey) return;

		var chr = amberuTheme624Script.getChar(e);

		if (chr == null) return;

		if (chr < '0' || chr > '9') {
			return false;
		}
	})
});
// pure js style
/*
document.getElementById('cart-q').onkeypress = function (e) {

	e = e || event;

	if (e.ctrlKey || e.altKey || e.metaKey) return;

	var chr = amberuTheme624Script.getChar(e);

	if (chr == null) return;

	if (chr < '0' || chr > '9') {
		return false;
	}

}
*/