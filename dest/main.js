if ($('.mainwrapper').hasClass('isParticle')) {
    //Particles JS
    particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 250
                    }
                },
                "color": {
                    "value": "#000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 7,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 80,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#000",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 8,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
}

// Glitch Effect

$(function () {
    $('.avatar').mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 400,
        glitch1TimeMax: 500,
        glitch2TimeMin: 20,
        glitch2TimeMax: 300,
        zIndexStart: 8,
    })
})

// Custom cursor

const cursor = $('.cursor');
$(window).on('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.clientX - (cursor.width() / 2),
        y: e.clientY - (cursor.height() / 2),
        duration: .1
    })
})

const hoverEffect = $('.hover');
hoverEffect.on('mouseenter', function () {
    cursor.addClass('active');
})
hoverEffect.on('mouseleave', function () {
    cursor.removeClass('active');
})


// Hamburger
const hamburger = document.querySelector('.hamburger'),
    navbar = document.querySelector('.nav');

const navtl = gsap.timeline({
    default: {
        ease: 'power4.inOut'
    }
})

$(hamburger).on('click', function (e) {
    e.stopPropagation();
    $(hamburger).toggleClass('active')
    $(navbar).toggleClass('active')
    if ($(navbar).hasClass('active')) {
        navtl.from('nav a', {
            y: '100%',
            opacity: 0,
            duration: .4,
            delay: .5,
            stagger: .15
        })
    }
})

$(document).on('click', (e) => {
    e.stopPropagation();
    $(hamburger).removeClass('active')
    $(navbar).removeClass('active')
})

// Window onLoad

$(window).on('load', () => {
    setTimeout(() => {
        $('.loading').addClass('hide');

        if ($('.loading').hasClass('hide')) {
            introPage();
            if ($('.mainwrapper').hasClass('isHome')) {
                homePage();
            }
            if ($('.mainwrapper').hasClass('isAbout')) {
                aboutPage();
            }
        }
    }, 1500)
})

//Intro
const tl = gsap.timeline({
    default: {
        ease: 'expo.inOut'
    }
})

const introPage = () => {

    if ($('.intro').hasClass('isHome')) {
        tl.from('.intro-logo svg .t-1', {
            x: '-200%',
            duration: .4,
            delay: .7
        })
        tl.from('.intro-logo svg .n-3', {
            x: '200%',
            duration: .4,
            delay: .1
        }, '-=.5')
        tl.from('.intro-logo svg .t-2', {
            y: '-200%',
            duration: .4,
        }, '-=.5')
        tl.from('.intro-logo svg .l-1', {
            x: '-51.29px',
            y: '-200%',
            duration: .4,
        }, '-=.3')
        tl.from('.intro-logo svg .l-2', {
            x: '200%',
            y: '-50.22px',
            duration: .4,
        }, '-=.3')
        tl.from('.intro-logo svg .h-1', {
            y: '200%',
            duration: .4,
        }, '-=.4')
        tl.from('.intro-logo svg .h-2', {
            y: '200%',
            duration: .4,
        }, '-=.2')
        tl.from('.intro-logo svg .h-3', {
            x: '-200%',
            duration: .4,
        }, '-=.5')
        tl.from('.intro-logo svg .n-1', {
            y: '200%',
            duration: .4,
        }, '-=.2')
        tl.from('.intro-logo svg .n-2', {
            y: '200%',
            duration: .4,
        }, '-=.2')
        // name
        tl.to('.intro-text h3', {
            y: '0%',
            opacity: 1,
            stagger: .12,
        }, '-=.3')
        //hide
        tl.to('.intro-content', {
            opacity: 0,
            duration: .5,
            delay: 1
        }, '-=.1')
        // slice line
        tl.to('.load-line', {
            bottom: '-200%',
            opacity: 0,
            duration: .7,
        })
    } else {
        tl.to('.load-line', {
            bottom: '-200%',
            opacity: 0,
            duration: .7,
            delay: .7
        })
    }

    tl.to('.left-slide', {
        x: '-100%',
        duration: .5
    })
    tl.to('.right-slide', {
        x: '100%',
        duration: .5
    }, '-=.5')
}

const homePage = () => {

    tl.from('.avatar-wrapper', {
        y: '-5%',
        opacity: 0,
        duration: .7,
    })

    tl.from('.greeting h5', {
        y: '-100%',
        opacity: 0,
        duration: .5,
        stagger: .11
    }, '-=.5')
    tl.from('.name h2', {
        y: '100%',
        opacity: 0,
        duration: .2,
        stagger: .1
    }, '-=.7')
    tl.from('.name .line', {
        width: '0px',
        duration: .5,
        stagger: .11
    }, '-=.7')
    tl.from('.name-desc h3', {
        opacity: 0,
        duration: .3,
        stagger: .1
    }, '-=.2')
    tl.from('.contact-btn', {
        opacity: 0,
        duration: .5,
        stagger: .11
    }, '-=.5')
}

const aboutPage = () => {
    tl.from('.abt-title h3', {
        x: '-100%',
        opacity: 0,
        duration: .5,
        stagger: .2
    })
    tl.from('.abt-title .titleLine', {
        flex: 0,
        opacity: 0,
        duration: 1,
        stagger: .3
    }, '-=.5')
    tl.from('.abt-content p', {
        y: '50%',
        opacity: 0,
        duration: .5,
        stagger: .1
    }, '-=1')
    tl.from('.abt-content .timeLine', {
        height: '0%',
        opacity: 0,
        duration: 1,
        stagger: .5
    }, '-=1')
    tl.from('.abt-content li', {
        x: '50%',
        opacity: 0,
        duration: .5,
        stagger: .05
    }, '-=1.5')
    tl.from('.abt-content h5', {
        x: '50%',
        opacity: 0,
        duration: .5,
        stagger: .1
    }, '-=1')

}