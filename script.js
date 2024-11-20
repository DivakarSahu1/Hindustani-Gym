var crscr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  console.log(dets);
  crscr.style.left = dets.x + "px";
  crscr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

document.addEventListener("mousemove", function (dets) {});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    // Corrected spelling here
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  });
});
