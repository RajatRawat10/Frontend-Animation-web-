//this is  for the locomotive smoothscroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
///func for animation on load
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
//function for image detail expand
function imgdetanimation() {
    let imgdet = document.querySelectorAll(".img-dets");
    let imgexpand = document.querySelectorAll(".img-expand");

    imgdet.forEach((det, index) => {
        const expandEl = imgexpand[index];

        // When mouse enters .img-dets → show
        det.addEventListener("mouseenter", () => {
            gsap.to(expandEl, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // When mouse leaves .img-dets → check if hovering on .img-expand
        det.addEventListener("mouseleave", (e) => {
            // If mouse goes to img-expand, do nothing (keep it visible)
            if (!expandEl.contains(e.relatedTarget)) {
                gsap.to(expandEl, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        });

        // When mouse leaves .img-expand → hide
        expandEl.addEventListener("mouseleave", () => {
            gsap.to(expandEl, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        });
    });

}
imgdetanimation();


document.addEventListener("mousemove", function (e) {
    gsap.to("#cursor", {
        left: e.clientX,
        top: e.clientY,
        opacity: 1,
        duration: 0.1, // small duration for smoother motion
        ease: "power3.out"
    });
});
const cursor = document.querySelector("#cursor");
const page3 = document.querySelector(".page3-imgcont");

page3.addEventListener("mousemove", function () {
    gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
        ease: "power3.out"
    });
});

page3.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in"
    });
});
