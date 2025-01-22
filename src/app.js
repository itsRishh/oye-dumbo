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
      scroller: "[data-scroll-container]", // The main scrolling container
      start: "top top", // Animation starts when the element enters the viewport
      end: "200% top", // Adjust the end to ensure the element is fully animated
      scrub: 0.5, // Make the animation smoother when scrolling
      pin: true, // Keeps the section pinned
      anticipatePin: 1,
    },
  });
}

function catalogueH() {
  gsap.to("#hoodies", {
    x: -1200,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#hoodies",
      scroller: "[data-scroll-container]", // The main scrolling container
      start: "top top", // Animation starts when the element enters the viewport
      end: "bottom top", // Adjust the end to ensure the element is fully animated
      scrub: 1, // Make the animation smoother when scrolling
      pin: true, // Keeps the section pinned
    },
  });
}

catalogue();
catalogueH();
heroAnim();     
dragMarquee();
marquee();

// Refresh both ScrollTrigger and Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// function breakText() {
//   var h1 = document.querySelector(".msganim");
//   var h1text = h1.textContent;
//   var splittedText = h1text.split(" ");

//   var parts = "";

//   splittedText.forEach(function (elem) {
//     parts += `<span>${elem}</span>`;
//   });

//   h1.innerHTML = parts;
// }

// // function catalogue() {
// //   gsap.to("#tshirt", {
// //     x: -1200,
// //     scrollTrigger:{
// //       trigger: "#tshirt",
// //       scroller: "[data-scroll-container]",
// //       end: "200% 0%",
// //       ease: Power2,
// //       pin: true,
// //       scrub: 5,
// //       markers: "True"
// //     }
// //   })
// // }
