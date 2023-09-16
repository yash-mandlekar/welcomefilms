function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();
if(window.innerWidth > 800){

var tl = gsap.timeline({
  scrollTrigger: {
    // trigger: ".svg",
    // scroller: "#main",
    // // markers: true,
    // start: "top 0%",
    // end: "top -40%",
    // scrub: true,
  },
});

tl.to(".svg", {
  // top: "32px",
  top: "4px",
  pointerEvents: "all",
  scale: 0.8,
  fill: "#111",
  opacity: 1,
  scrollTrigger: {
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -50%",
    scrub: true,
  },
});

tl.to("#nav", {
  gap: "13vmax",
  backgroundColor: "rgba(90, 90, 90, 0.513)",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -50%",
    scrub: true,
  },
});
tl.to("#nav h3", {
  color: "white",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -50%",
    scrub: true,
  },
});

gsap.to("#img", {
  rotate: 6,
  scrollTrigger: {
    trigger: "#img",
    scroller: "#main",
    // markers:true,
    start: "top 60%",
    scrub: 3,
  },
});
// gsap.to("#page2", {
//   y: -400,
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "#main",
//     scrub: 1,
//     start: "top 80%",
//     end: "top 50%",
//   },
// });

gsap.from("#img-cnt", {
  rotate: 5,
  y: 400,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 40%",
    end: "top 20%",
    scrub: 2,
    // markers:true,
  },
});
gsap.from("#img-cnt2", {
  rotate: -15,
  y: 570,
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    start: "top 10%",
    end: "top -10%",
    scrub: 2,
  },
});
gsap.from("#page2 h1", {
  y: 100,
  rotate: 6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: 3,
    start: "top 80%",
    end: "top 70%",
  },
});

gsap.from("#page4 h1", {
  y: 200,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    scrub: 3,
    start: "top 80%",
    end: "top 70%",
  },
});
// gsap.from("#page5 h1",{
//   y:100,
//   rotate:6,
//   duration:3,
//   stagger:0.5,
//   scrollTrigger:{
//     trigger:"#page5",
//     scroller:"#main",
//     scrub:3,
//     start:"top 60%",
//     end:"top 50%",
//   }
// })
// gsap.from("#page5 h2",{
//   y:100,
//   rotate:6,
//   duration:3,
//   stagger:0.5,
//   scrollTrigger:{
//     trigger:"#page5",
//     scroller:"#main",
//     scrub:3,
//     start:"top 60%",
//     end:"top 50%",
//   }
// })

// gsap.from("#page6", {
//   y: 700,
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: "#page6",
//     scroller: "#main",
//     scrub: 3,
//     start: "top 80%",
//     end: "top 70%",
//   },
// });
gsap.fromTo(
  ".photography",
  { opacity: 1 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: ".photography",
      scroller: "#main",
      scrub: 3,
      start: "-10%",
      end: "+=1600",
      toggleAction: "play play none reset",
      pin: true,
      // markers: true,
    },
  }
);
gsap.fromTo(
  "#overlay",
  { opacity: 1 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: "#overlay",
      scroller: "#main",
      scrub: 3,
      start: "-10%",
      end: "+=1500",
      toggleAction: "play play none reset",
      pin: true,
      // markers: true,
    },
  }
);

gsap.from("#top h1", {
  stagger: 0.1,
  rotate: 30,
  y: 200,
});
}
if(window.innerWidth < 800){
  gsap.fromTo(
    ".video2",
    { opacity: 1 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".video2",
        scroller: "#main",
        scrub: 3,
        start: "0%",
        end: "+=1500",
        toggleAction: "play play none reset",
        pin: true,
        // markers: true,
      },
    }
  );
}