$(window).on("load", function() {
    $(".preloader").fadeOut('slow');
})

$(document).ready(function() {
    // ----------------Navbar Shrink------------
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    })

    // ------------video popup-------------------------

    const videoSrc = $("#palyer-1").attr("src");
    $(".vedio-play-btn, .video-popup").on("click", function() {
            if ($(".video-popup").hasClass("open")) {
                $(".video-popup").removeClass("open");
                $("#player-1").attr("src", "");
            } else {
                $(".video-popup").addClass("open");
                if ($("#palyer-1").attr("src") == '') {
                    $("#player-1").attr("src", videoSrc);
                }
            }
        })
        //------------------- Features Carousel---------------------
    $('.fectures-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // --------------App-scrrenshot-------------

    $('.sereenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    // --------------testimonial carousel-------------

    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // --------------testimonial carousel-------------
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // --------------page scrolling -scrollIt---------------
    $.scrollIt({
        topOffset: -50
    });

    // ------------Navbar collapse--------
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    // -------toggle theme- dark & light--------------
    function toggleTheme() {
        if (localStorage.getItem("app-theme") !== null) {
            if (localStorage.getItem("app-theme") === "dark") {
                $("body").addClass("dark");
            } else {
                $("body").removeClass("dark");
            }
        }
        updateIcon();
    }
    toggleTheme()

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("app-theme", "dark")
        } else {
            localStorage.setItem("app-theme", "light")
        }
        updateIcon();
    });


    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-mood");
            $(".toggle-theme i").addClass("fa-sun");
        } else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
})