// gsap

const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text',{y: '0%', duration: 1, stagger: 0.25 })
//stagger do gsap permite que o span tenha um intervalo de tempo entre cada um

tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5})

tl.to('.intro', {y: "-100%", duration: 1}, "-=1") // -=1 says start 1second faster

tl.fromTo('nav', {opacity:0}, {opacity:1 , duration: 1})

tl.fromTo('.shadow', {opacity:0}, {opacity:1, duration: 1})

tl.fromTo('.shadow2', {opacity:0}, {opacity:1, duration: 1})

