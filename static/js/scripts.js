(function ($) {
    "use strict";
    $(function () {
        $('.header-menu a[href="#"]').on('click', function (event) {
            event.preventDefault();
        });
        var mainHeader = $('.main-header');
        if (mainHeader.length) {
            var sticky = new Waypoint.Sticky({
                element: mainHeader[0],
                stuckClass: 'sticking',
                offset: -1
            });
        }
        $('form').parsley();
        var $mainBanner = $('.main-banner');
        $mainBanner.on('click', '.goDown', function () {
            var $target = $mainBanner.next();
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 50
                }, 500);
            }
        });
        var $commentContent = $('.comment-content > a');
        $commentContent.on('click', function () {
            var $target = $('.comment-form');
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - 120
                }, 500);
                $target.find('textarea').focus();
            }
        });
        // var swiperTeam = new Swiper('.review-slider', {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     autoplay: {
        //         delay: 5000,
        //         disableOnInteraction: true,
        //     },
        //     pagination: {
        //         el: '.review-pagination',
        //         clickable: true,
        //     },
        //     breakpoints: {
        //         575: {
        //             slidesPerView: 1
        //         },
        //         991: {
        //             slidesPerView: 2
        //         }
        //     }
        // });
        var $youtubePopup = $('.youtube-popup');
        if ($youtubePopup.length) {
            $youtubePopup.magnificPopup({
                type: 'iframe'
            });
        }
        var $backToTopBtn = $('.back-to-top');
        if ($backToTopBtn.length) {
            var scrollTrigger = 400,
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $backToTopBtn.addClass('show');
                    } else {
                        $backToTopBtn.removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $backToTopBtn.on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
        var happyCounter = $('.happy-counter li');
        if (happyCounter.length) {
            var a = 0;
            $(window).scroll(function () {
                var oTop = happyCounter.offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    var $dataCount = $('[data-count]');
                    $dataCount.each(function () {
                        var $this = $(this),
                            countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            }, complete: function () {
                                $this.text(this.countNum);
                            }
                        });
                    });
                    a = 1;
                }
            }).scroll();
        }
        var $map = $('[data-trigger="map"]'),
            $mapOps;
        if ($map.length) {
            $mapOps = $map.data('map-options');
            window.initMap = function () {
                $map.css('min-height', '410px');
                $map.each(function () {
                    var $t = $(this),
                        map, lat, lng, zoom;
                    $mapOps = $t.data('map-options');
                    lat = parseFloat($mapOps.latitude, 10);
                    lng = parseFloat($mapOps.longitude, 10);
                    zoom = parseFloat($mapOps.zoom, 10);
                    map = new google.maps.Map($t[0], {
                        center: {
                            lat: lat,
                            lng: lng
                        },
                        zoom: zoom,
                        scrollwheel: false,
                        disableDefaultUI: true,
                        zoomControl: true,
                        styles: [{
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#e9e9e9"
                            }, {
                                "lightness": 17
                            }]
                        }, {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }, {
                                "lightness": 20
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#ffffff"
                            }, {
                                "lightness": 17
                            }]
                        }, {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#ffffff"
                            }, {
                                "lightness": 29
                            }, {
                                "weight": 0.2
                            }]
                        }, {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }, {
                                "lightness": 18
                            }]
                        }, {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#ffffff"
                            }, {
                                "lightness": 16
                            }]
                        }, {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#f5f5f5"
                            }, {
                                "lightness": 21
                            }]
                        }, {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#dedede"
                            }, {
                                "lightness": 21
                            }]
                        }, {
                            "elementType": "labels.text.stroke",
                            "stylers": [{
                                "visibility": "on"
                            }, {
                                "color": "#ffffff"
                            }, {
                                "lightness": 16
                            }]
                        }, {
                            "elementType": "labels.text.fill",
                            "stylers": [{
                                "saturation": 36
                            }, {
                                "color": "#333333"
                            }, {
                                "lightness": 40
                            }]
                        }, {
                            "elementType": "labels.icon",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        }, {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [{
                                "color": "#f2f2f2"
                            }, {
                                "lightness": 19
                            }]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#fefefe"
                            }, {
                                "lightness": 20
                            }]
                        }, {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "color": "#fefefe"
                            }, {
                                "lightness": 17
                            }, {
                                "weight": 1.2
                            }]
                        }]
                    });
                    map = new google.maps.Marker({
                        position: {
                            lat: lat,
                            lng: lng
                        },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        draggable: true,
                        icon: 'img/marker.png'
                    });
                });
            };
            var googleAPI = document.createElement('script');
            googleAPI.type = 'text/javascript';
            googleAPI.src = 'https://maps.googleapis.com/maps/api/js?key=' + $mapOps.api_key + '&callback=initMap';
            $('body').append(googleAPI);
        }
        jQuery('img.svg').each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function (data) {
                var $svg = jQuery(data).find('svg');
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' replaced-svg');
                }
                $svg = $svg.removeAttr('xmlns:a');
                if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                }
                $img.replaceWith($svg);
            }, 'xml');
        });
    });
    $(window).on('load', function () {
        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });
    $(window).on('load', function () {
        var $animateEl = $('[data-animate]');
        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');
            $duration = typeof $duration === 'undefined' ? '0.6' : $duration;
            $delay = typeof $delay === 'undefined' ? '0' : $delay;
            $el.waypoint(function () {
                $el.addClass('animated ' + $name).css({
                    'animation-duration': $duration + 's',
                    'animation-delay': $delay + 's'
                });
            }, {
                offset: '93%'
            });
        });
    });
})(jQuery);
