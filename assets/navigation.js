const navigator = () => {
  if (location.hash.startsWith("#Details=")) {
    detailsPage();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("hashchange", navigator, false);
window.addEventListener("DOMContentLoaded", navigator, false);

backArrow.addEventListener("click", () => {
  const stateLoad = window.history.state
    ? window.history.state.loadUrl
    : "home";
  if (stateLoad.includes("#")) {
    window.location.hash = "#home";
  } else {
    window.history.back();
  }
});

const detailsPage = () => {
  title.classList.add("hidden");
  listMovies.classList.add("hidden");
  mainDetails.classList.remove("hidden");
  containerLoadButton.classList.add("hidden");  // location.hash = ["#Details=", "id", "-", "TitleMovie"]
  const hashMovie = location.hash.split("=")[1];
  const hashIdMovie = hashMovie.split("-")[0];
  (async () => {
    try {
      const detailsMovie = await getDataTmdb(URL_API_MOVIE_DETAILS(hashIdMovie));
      console.log(detailsMovie)
      if(window.matchMedia("(min-width: 728px)").matches) {
        imgPortada.style.backgroundImage = ""
        if(detailsMovie.backdrop_path){
          imgPortada.style.backgroundImage = `url(${RUTA_URL_IMG_ORIGINAL_QUALITY}${detailsMovie.backdrop_path}`
        } else {
          imgPortada.style.backgroundImage = `url(${RUTA_URL_IMG_ORIGINAL_QUALITY}${detailsMovie.poster_path})`;
        }
      } else {
        imgPortada.style.backgroundImage = ""
        imgPortada.style.backgroundImage = `url(${RUTA_URL_IMG}${detailsMovie.poster_path})`;
      }
      const watchNowMovie = await getDataTmdb(URL_API_MOVIE_WATCH(hashIdMovie));
      const objVerificador = Object.entries(watchNowMovie.results).length

      if(watchNowMovie.results.US){
        containerWatchMovie.classList.remove("hidden")
        watchMovie.href = watchNowMovie.results.US.link;
      } else if (watchNowMovie.results.JP) {
        containerWatchMovie.classList.remove("hidden")
        watchMovie.href = watchNowMovie.results.JP.link
      } else if (objVerificador === 0) {
        containerWatchMovie.classList.add("hidden")
      }

      // font-black text-gray-300 text-3xl text-center w-max m-auto opacity-60
      containerTitle.innerHTML = "";
      
      const titleMovie = document.createElement("h1");
      titleMovie.classList.add("font-black");
      titleMovie.classList.add("text-gray-300");
      titleMovie.classList.add("text-3xl");
      titleMovie.classList.add("text-center");
      titleMovie.classList.add("w-max");
      titleMovie.classList.add("m-auto");
      titleMovie.classList.add("opacity-60");
      titleMovie.textContent = detailsMovie.title
      containerTitle.appendChild(titleMovie);
      
      containerOverview.innerHTML = "";

      const overviewTitle = document.createElement("h2");
      overviewTitle.textContent = "Overview"
      overviewTitle.classList.add("text-white");
      overviewTitle.classList.add("m-auto");
      overviewTitle.classList.add("w-3/4");
      overviewTitle.classList.add("text-xl");
      overviewTitle.classList.add("font-bold");

      const overviewMovie = document.createElement("p");
      overviewMovie.textContent = detailsMovie.overview;
      overviewMovie.classList.add("text-white");
      overviewMovie.classList.add("w-3/4");
      overviewMovie.classList.add("m-auto");
      overviewMovie.classList.add("mt-2");
      overviewMovie.classList.add("text-lg");

      containerOverview.appendChild(overviewTitle);
      containerOverview.appendChild(overviewMovie);

      certificationFacts.textContent = "PG";
      releaseFacts.textContent = detailsMovie.release_date;

      const runtime = convertTime(detailsMovie.runtime);
      runtimeFacts.textContent = `${runtime[0]}hr ${runtime[1]}m`;

      userScore.textContent = "Score: " + parseFloat(detailsMovie.vote_average).toFixed(2);
      
      const youtubeUrl = "https://www.youtube.com/watch?v="
      const dataTrailler = await getDataTmdb(URL_API_MOVIE_TRAILLERS(hashIdMovie));
      const youtubeId = dataTrailler.results[0].key;

      traillerUrl.href = youtubeUrl + youtubeId;

      const recommendationsAll = await getDataTmdb(URL_API_MOVIE_RECOMMENDATIONS(hashIdMovie));
      const recommendations = recommendationsAll.results.slice(0,8);

      createPoster(recommendationsContainer, recommendations);
    } catch (error) {
      console.log(error);
    }
  })();
};

const homePage = () => {
  title.classList.remove("hidden");
  listMovies.classList.remove("hidden");
  mainDetails.classList.add("hidden");
  containerLoadButton.classList.remove("hidden");
};
