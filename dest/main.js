//Particles JS

particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
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
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
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
                "speed": 6,
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

// Window onLoad

$(window).on('load', () => {
    $('.loading').addClass('hide');

    if ($('.loading').hasClass('hide')) {
        introPage();
    }
})

const introPage = () => {
    const tl = gsap.timeline({
        default: {
            ease: 'power3.out'
        }
    })

    tl.from('.intro-logo svg .t-1', {
        x: '-100%',
        duration: .3,
    })
    tl.from('.intro-logo svg .n-3', {
        x: '100%',
        duration: .3,
        delay: .1
    })
    tl.from('.intro-logo svg .t-2', {
        y: '-100%',
        duration: .3,
    })
    tl.from('.intro-logo svg .l-1', {
        x: '-51.29px',
        y: '-200%',
        duration: .3,
    })
    tl.from('.intro-logo svg .l-2', {
        x: '100%',
        y: '-50.22px',
        duration: .3,
    })
    tl.from('.intro-logo svg .h-1', {
        y: '100%',
        duration: .3,
    })
    tl.from('.intro-logo svg .h-2', {
        y: '100%',
        duration: .3,
    })
    tl.from('.intro-logo svg .h-3', {
        x: '-200%',
        duration: .3,
    })
    tl.from('.intro-logo svg .n-1', {
        y: '100%',
        duration: .3,
    })
    tl.from('.intro-logo svg .n-2', {
        y: '100%',
        duration: .3,
    })

    tl.to('.intro-text h3', {
        y: '0%',
        opacity: 1,
        stagger: .15,
    })

    tl.to('.intro-content', {
        opacity: 0,
        delay: 1
    })
    tl.to('.load-line', {
        bottom: '-200%',
        opacity: 0,
        duration: .7
    })

    tl.to('.left-slide', {
        x: '-100%',
        duration: .5
    })
    tl.to('.right-slide', {
        x: '100%',
        duration: .5
    }, '-=.5')


}

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

// Hamburger
const hamburger = document.querySelector('.hamburger'),
    hamburgerLine1 = document.querySelector('.hamburger .line1'),
    hamburgerLine2 = document.querySelector('.hamburger .line1'),
    hamburgerLine3 = document.querySelector('.hamburger .line1'),
    navbar = document.querySelector('.nav');


hamburger.addEventListener('click', function () {
    this.classList.toggle('active')
    navbar.classList.toggle('active')
})