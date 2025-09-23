function loadinganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stragger: 0.2,
    })
    gsap.from(".book-pic img", {
        y: 100,
        opacity: 0,
        delay: 0.7,
        duration: 0.9,
        stragger: 0.2,
    })
    gsap.from(".nav", {
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stragger: 0.2,
    })
};

loadinganimation();