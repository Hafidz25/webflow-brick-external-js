let splitText;
function runSplit() {
  splitText = new SplitType("[stagger-link]", {
    types: "words, chars"
  });
}
runSplit();

// ————— Update on window resize
let windowWidth = window.innerWidth;
window.addEventListener("resize", function () {
  if (windowWidth !== window.innerWidth) {
    windowWidth = window.innerWidth;
    splitText.revert();
    runSplit();
  }
});

// ———— animation
const staggerLinks = document.querySelectorAll("[stagger-link]");
staggerLinks.forEach((link) => {
  const letters = link.querySelectorAll("[stagger-link-text] .char");
  link.addEventListener("mouseenter", function () {
    gsap.to(letters, {
      yPercent: -100,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "start" },
      overwrite: true
    });
  });
  link.addEventListener("mouseleave", function () {
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.4,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "random" }
    });
  });
});

// On page load, animate all links
window.onload = function () {
  staggerLinks.forEach((link) => {
    const letters = link.querySelectorAll("[stagger-link-text] .char");
    gsap.set(letters, { yPercent: -100 });
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: { each: 0.04, from: "random" }
    });
  });
};
