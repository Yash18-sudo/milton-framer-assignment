document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".anim");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing once section is visible
        }
      });
    },
    { threshold: 0.5, rootMargin: "0px", once: true } // Add the "once" option
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".animrotate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // Stop observing once section is visible
        }
      });
    },
    { threshold: 0.5, rootMargin: "0px", once: true } // Add the "once" option
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
