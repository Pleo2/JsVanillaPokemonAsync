const loadPoster = (entrys, observer) => {
  entrys.forEach((entry) => {
    if (entry.isIntersecting) {
      const Poster = entry.target;
      const urlDataSrc = Poster.getAttribute("data-src");
      entry.target.src = urlDataSrc;
      entry.target.classList.add("img-lazyTransition");
    }
  });
};

const lazyLoader = new IntersectionObserver(loadPoster, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
});