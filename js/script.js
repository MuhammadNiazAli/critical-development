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

/* ================= NEW: stats counter ================= */
const statNums = document.querySelectorAll(".stat-num");
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = +el.getAttribute("data-count");
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 60));
            const tick = () => {
                current += step;
                if (current >= target) {
                    el.textContent = target;
                } else {
                    el.textContent = current;
                    requestAnimationFrame(tick);
                }
            };
            tick();
            statsObserver.unobserve(el);
        }
    });
}, { threshold: 0.4 });
statNums.forEach((el) => statsObserver.observe(el));

gsap.to(".stat-item", {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.9,
    scrollTrigger: {
        scroller: "body",
        trigger: ".stats",
        start: "top 75%",
        end: "top 35%",
        scrub: 1.5,
    },
});

/* ================= NEW: portfolio reveal ================= */
gsap.to(".portfolio-heading", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".portfolio",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
    },
});

gsap.to(".portfolio-sub", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".portfolio",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
    },
});

gsap.to(".port-item", {
    opacity: 1,
    scale: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        scroller: "body",
        trigger: ".portfolio",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});

/* ================= NEW: testimonials slider ================= */
const testiSlides = document.querySelectorAll(".testi-slide");
const testiDotsWrap = document.querySelector(".testi-dots");
let testiIndex = 0;

if (testiSlides.length && testiDotsWrap) {
    testiSlides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("testi-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToTesti(i));
        testiDotsWrap.appendChild(dot);
    });
}

function updateTesti() {
    testiSlides.forEach((slide, i) => slide.classList.toggle("active", i === testiIndex));
    document.querySelectorAll(".testi-dot").forEach((dot, i) => dot.classList.toggle("active", i === testiIndex));
}

function goToTesti(i) {
    testiIndex = i;
    updateTesti();
}

document.querySelector(".testi-next")?.addEventListener("click", () => {
    testiIndex = (testiIndex + 1) % testiSlides.length;
    updateTesti();
});

document.querySelector(".testi-prev")?.addEventListener("click", () => {
    testiIndex = (testiIndex - 1 + testiSlides.length) % testiSlides.length;
    updateTesti();
});

gsap.to(".testi-heading", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".testimonials",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
    },
});

/* ================= NEW: FAQ accordion ================= */
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        const answer = item.querySelector(".faq-answer");
        const isOpen = item.classList.contains("open");

        document.querySelectorAll(".faq-item").forEach((el) => {
            el.classList.remove("open");
            el.querySelector(".faq-answer").style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add("open");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

gsap.to(".faq-heading", {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".faq",
        start: "top 75%",
        end: "top 40%",
        scrub: 1.5,
    },
});

gsap.to(".faq-item", {
    opacity: 1,
    y: 0,
    stagger: 0.12,
    duration: 0.8,
    scrollTrigger: {
        scroller: "body",
        trigger: ".faq",
        start: "top 70%",
        end: "top 30%",
        scrub: 1.5,
    },
});

/* ================= NEW: contact form validation ================= */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        const name = document.getElementById("cfName");
        const email = document.getElementById("cfEmail");
        const message = document.getElementById("cfMessage");
        const nameErr = document.getElementById("cfNameErr");
        const emailErr = document.getElementById("cfEmailErr");
        const msgErr = document.getElementById("cfMsgErr");
        const success = document.getElementById("cfSuccess");

        nameErr.textContent = "";
        emailErr.textContent = "";
        msgErr.textContent = "";
        success.classList.remove("show");

        if (name.value.trim().length < 2) {
            nameErr.textContent = "Please enter your name.";
            valid = false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            emailErr.textContent = "Please enter a valid email.";
            valid = false;
        }
        if (message.value.trim().length < 10) {
            msgErr.textContent = "Message should be at least 10 characters.";
            valid = false;
        }

        if (valid) {
            success.classList.add("show");
            contactForm.reset();
        }
    });
}

/* ================= NEW: newsletter form validation ================= */
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("newsletterEmail");
        const msg = document.getElementById("newsletterMsg");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailInput.value.trim())) {
            msg.textContent = "Thanks for subscribing!";
            newsletterForm.reset();
        } else {
            msg.textContent = "Please enter a valid email address.";
        }
    });
}
