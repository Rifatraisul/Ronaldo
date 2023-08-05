var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets. x+1 + "px"
    crsr.style.top = dets. y +0 + "px"
    blur.style.left = dets. x - 200 + "px"
    blur.style.top = dets. y - 250 + "px"
    
})


gsap.to("#head-nav",{
    backgroundColor: "#000",
    duration: 0.5, 
    height:"110px", 
    scrollTrigger:{
        trigger: "#head-nav", 
        scroller: "body", 
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1,
    }


 })


 var h4all = document.querySelectorAll("#head-nav img,#head-nav ul li a, #arrow,#scroller-in,.card, .img-of-about,a,.elem h2,.elem img,#f1 img");
 h4all.forEach(function (elem) {
   elem.addEventListener("mouseenter", function () {
     crsr.style.scale = 3;
     crsr.style.border = "1px solid #fff";
     crsr.style.backgroundColor = "transparent";
   });
   elem.addEventListener("mouseleave", function () {
     crsr.style.scale = 1;
     crsr.style.border = "0px solid #95C11E";
     crsr.style.backgroundColor = "#95C11E";
   });
 });




gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30vh",
        end:"top -90%",
        scrub:2,

    }
})


 

gsap.from(".img-of-about,#about-us-in",{
  y:80,
  opacity:0,
  duration:1,
  // stagger:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%", 
    scrub:2,
    

  }
})


gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%", 
    scrub:1,
    

  }
})
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%", 
    scrub:5,
    

  }
})

gsap.from("#colon2",{
  y:+70,
  x:+70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true, 
    start:"top 55%",
    end:"top 45%", 
    scrub:5,
    

  }
})


gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true, 
    start:"top 75%",
    end:"top 70%", 
    scrub:3,
    

  }
})