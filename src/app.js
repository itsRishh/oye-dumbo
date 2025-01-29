// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Sync Locomotive Scroll with GSAP
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

// GSAP SCRIPTS
function heroAnim() {
  gsap.to(".hero .left", {
    x: 200,
    scrollTrigger: {
      trigger: ".hero",
      scroller: "[data-scroll-container]",
      // markers: true,
      scrub: 2,
    },
  });

  gsap.to(".hero .right", {
    x: -300,
    scrollTrigger: {
      trigger: ".hero",
      scroller: "[data-scroll-container]",
      // markers: true,
      scrub: 2,
    },
  });
}

function dragMarquee() {
  document.querySelectorAll(".brandMarquee").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var rot = 0;
      var diffrot = 0;
      elem.addEventListener("mousemove", function (details) {
        // console.log(details.clientX, details.clientY);
        diffrot = details.clientX - rot;
        rot = details.clientX;
        var xpx = details.clientX - details.clientX / 2;
        var ypx = details.clientY - elem.getBoundingClientRect().top;
        gsap.to(elem.querySelector(".brand-float"), {
          opacity: 1,
          ease: Power2,
          x: xpx,
          y: ypx,
          rotate: gsap.utils.clamp(-20, 20, diffrot),
        });
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.querySelector(".brand-float"), {
        opacity: 0,
        ease: Power1,
      });
    });
  });
}

function marquee() {
  gsap.to(".brand-name", {
    x: -500,
    scrollTrigger: {
      trigger: ".brandMarquee ",
      scroller: "[data-scroll-container]",
      start: "top 70%",
      scrub: 1,
    },
  });

  gsap.to(".saleMarquee .sale-name", {
    x: -500,
    scrollTrigger: {
      trigger: ".saleMarquee",
      scroller: "[data-scroll-container]",
      start: "20% 70%",
      scrub: 1,
    },
  });
}

function catalogue() {
  gsap.to("#tshirt", {
    x: -1200,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#tshirt",
      scroller: "[data-scroll-container]", 
      start: "top top", 
      end: "200% top", 
      scrub: 0.5, 
      pin: true,
      anticipatePin: 1,
      pinReparent: true,
      invalidateOnRefresh: true, 
    },
  });
}

function catalogueH() {
  gsap.to("#hoodies", {
    x: -1200,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#hoodies",
      scroller: "[data-scroll-container]", 
      start: "top top", 
      end: "100% top", 
      scrub: 1, 
      pin: true,
      pinReparent: true,
      invalidateOnRefresh: true, 
    },
  });
}

function breakText() {
  var h1 = document.querySelector(".msganim");
  var h1text = h1.textContent;
  var splittedText = h1text.split(" ");

  var parts = "";

  splittedText.forEach(function (elem) {
    parts += `<span class="word">${elem}</span>&nbsp;`;
  });
  // console.log(parts)

  h1.innerHTML = parts;
}

breakText();


const words = document.querySelectorAll(".msganim span");
console.log(words);

gsap.timeline({
  scrollTrigger: {
    trigger: ".message",
    scroller: "[data-scroll-container]",
    start: "5% top", 
    end: "105% top",
    scrub: 0.5,
    // pin: true,
    // anticipatePin: 1,
    // pinReparent: true,
    // markers: true,
  }
})
.fromTo(
  ".msganim .word",
  { opacity: 0.3 }, // Initial faded state
  {
    opacity: 1, // Fully visible state
    color: "white", // Highlighted color
    stagger: 0.3, // Animate one word at a time
    duration: 0.5,
  }
);








// CALLING ALL THE FUNCTIONS HERE
catalogue();
catalogueH();
heroAnim();     
dragMarquee();
marquee();

// Refresh both ScrollTrigger and Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

