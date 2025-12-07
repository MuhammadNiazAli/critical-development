let hammeicon = document.querySelector(".ri-menu-line")
let croseicon = document.querySelector(".ri-close-large-line")
let ul = document.querySelector("ul")
let body = document.querySelector("body")
let overfla = document.querySelector(".overlay")
let gitback = 0

hammeicon.addEventListener("click",()=>{
    if(gitback==0){
        ul.style.marginLeft="-1rem"
        overfla.style.visibility="visible"
        overfla.style.transition="0.8"
    ul.style.transition="0.8s"
    body.style.overflowY="hidden"
    gitback=1
    }else{
        ul.style.marginLeft="-20rem"
        overfla.style.visibility="hidden"
        body.style.overflowY="visible"
    ul.style.transition="0.8s"
    gitback=0
    }
})
croseicon.addEventListener("click",()=>{
    ul.style.marginLeft="-20rem"
    overfla.style.visibility="hidden"
    body.style.overflowY="visible"
    ul.style.transition="0.8s"
})





gsap.to(".about-heading",{
    opacity:1,
    x:-700,
    y:280,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})
gsap.to(".about-p",{
    opacity:1,
    x:-700,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})
gsap.to(".aboutbtn",{
    opacity:1,
    x:-700,
    width:"190px",
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box1",{
    opacity:1,
    scale:1,
    ease: "elastic.out(0.8, 0.3)",
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:5,
    }
})

gsap.to(".box2",{
    opacity:1,
    y:-125,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box3",{
    opacity:1,
    y:-65,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box4",{
    opacity:1,
    y:-5,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box5",{
    opacity:1,
    y:30,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box6",{
    opacity:1,
    y:60,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".box7",{
    opacity:1,
    y:125,
    scrollTrigger:{
        scroller:"body",
        trigger:".about",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".about2b1pic1",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.to(".about2b1pic2",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})
gsap.to(".about2b1pic3",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.to(".about2b1pic4",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})
gsap.to(".about2b1pic5",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.to(".about2b1pic6",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})
gsap.to(".about2b1pic7",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:2,
    }
})
gsap.to(".about2b1pic8",{
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about2",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".free-heading",{
    y:350,
    opacity:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".free",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".contact-h1",{
    opacity:1,
    x:50,
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }  
})

gsap.to(".contactp",{
    opacity:1,
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }  
})

gsap.to(".phone",{
    opacity:1,
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }  
})

gsap.to(".sech4",{
    opacity:1,
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }  
})

gsap.to(".lastcont",{
    opacity:1,
    scale:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }   
})

gsap.to(".contact-pic",{
    opacity:1,
    scale:1.5,
    x:-430,
    y:10,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact",
        start:"top 50%",
        end:"top 50%",
        scrub:3,
    }
})

gsap.to(".main-heading",{
    opacity:1,
    x:36,
    duration:1,
    delay:0.8,
})

gsap.to(".main-p1",{
    opacity:1,
    x:-80,
    duration:1,
    delay:0.8,
})

gsap.to(".main-p2",{
    opacity:1,
    duration:1,
    delay:0.8,
    y:-60,
})

gsap.to(".mainfree",{
    y:-50,
    duration:1,
    delay:0.8,
    opacity:1,
})

gsap.to(".contactbtn",{
    y:-50,
    duration:1,
    delay:0.8,
    opacity:1,
})

gsap.to(".main-pic",{
    opacity:1,
    duration:1,
    delay:1,
    y:-10,
})


gsap.to(".gol1",{
    opacity:1,
    duration:1,
    delay:1,
})

gsap.to(".gol2",{
    opacity:1,
    duration:1,
    delay:1,
})

gsap.to(".gol3",{
    opacity:1,
    duration:1,
    delay:1,
})

gsap.to(".gol4",{
    opacity:1,
    duration:1,
    delay:1,
})

gsap.to(".gol5",{
    opacity:1,
    duration:1,
    delay:1,
})

gsap.to(".gol1-h4",{
    scale:1,
    x:-70,
    delay:1.2,
    duration:1,
    opacity:1,
})
gsap.to(".gol2-h4",{
    scale:1,
    x:-70,
    delay:1.2,
    duration:1,
    opacity:1,
})
gsap.to(".gol3-h4",{
    scale:1,
    x:-70,
    delay:1.2,
    duration:1,
    opacity:1,
})
gsap.to(".gol4-h4",{
    scale:1,
    x:-70,
    delay:1.2,
    duration:1,
    opacity:1,
})
gsap.to(".gol5-h4",{
    scale:1,
    x:-70,
    delay:1.2,
    duration:1,
    opacity:1,
})