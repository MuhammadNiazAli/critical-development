/* ================= mobile / responsive nav drawer ================= */
let hammeicon = document.querySelector(".ri-menu-line");
let croseicon = document.querySelector(".ri-close-large-line");
let ul = document.querySelector("ul");
let overlay = document.querySelector(".overlay");
let navLinks = document.querySelectorAll("ul li");

function openMenu(){
    ul.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu(){
    ul.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

hammeicon.addEventListener("click", () => {
    ul.classList.contains("active") ? closeMenu() : openMenu();
});

croseicon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

/* ================= gsap entrance / scroll animations =================
   Same elements/classes animate as before. The old large fixed-pixel
   x/y jumps (e.g. x:-700, margin-left:1150px based offsets) have been
   removed because they were tuned for one fixed desktop layout and
   would fling elements off-screen on smaller viewports now that the
   layout is fluid. The animation *feel* (fade / slide-up / scale /
   stagger) is kept so nothing looks "removed" -- it now just works at
   every screen size. */

gsap.registerPlugin(ScrollTrigger);

/* ---- about section reveal ---- */
gsap.to(".about-heading", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});
gsap.to(".about-p", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});
gsap.to(".aboutbtn", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});

gsap.to([".box1", ".box2", ".box3", ".box4", ".box5", ".box6", ".box7"], {
    opacity: 1,
    scale: 1,
    stagger: 0.12,
    ease: "elastic.out(0.8, 0.5)",
    scrollTrigger: {
        scroller: "body",
        trigger: ".about",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});

/* ---- leadership team reveal ---- */
gsap.to(
    [
        ".about2b1pic1", ".about2b1pic2", ".about2b1pic3", ".about2b1pic4",
        ".about2b1pic5", ".about2b1pic6", ".about2b1pic7", ".about2b1pic8",
    ],
    {
        scale: 1,
        stagger: 0.1,
        scrollTrigger: {
            scroller: "body",
            trigger: ".about2",
            start: "top 75%",
            end: "top 30%",
            scrub: 1.5,
        },
    }
);

/* ---- free trial CTA reveal ---- */
gsap.to(".free-heading", {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".free",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
    },
});

/* ---- contact section reveal ---- */
gsap.to(".contact-h1", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

gsap.to(".contactp", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

gsap.to(".phone", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

gsap.to(".sech4", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

gsap.to(".lastcont", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

gsap.to(".contact-pic", {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".contact",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

/* ---- hero section load-in ---- */
gsap.to(".main-heading", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
});

gsap.to(".main-p1", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.65,
});

gsap.to(".main-p2", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
});

gsap.to(".mainfree", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.95,
});

gsap.to(".contactbtn", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1,
});

gsap.to(".main-pic", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8,
});

gsap.to([".gol1", ".gol2", ".gol3", ".gol4", ".gol5"], {
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.2,
});

gsap.to([".gol1-h4", ".gol2-h4", ".gol3-h4", ".gol4-h4", ".gol5-h4"], {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)",
    delay: 1.3,
});
