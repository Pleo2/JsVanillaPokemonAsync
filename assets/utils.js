// utils][]

const filterDuplicateObj = (arr) => {
  let set = new Set(arr.map(JSON.stringify))
  let newArr = Array.from(set).map(JSON.parse);
  return newArr;
}

const sortMoviesScore = (obj) => {
  return obj.sort((a, b) => b.vote_average - a.vote_average);
};

const filterMoviesWithError = (arr) => {
  arr.shift();
  const filterArr = arr.slice(0, arr.length - 10);
  return filterArr;
};

const convertTime = (time) => {
  const minutosInt = parseInt(time);

  const horas = Math.floor(minutosInt / 60);
  const minutos = minutosInt % 60;

  return [horas, minutos];
};

const createPoster = (
  container,
  movies,
  { clean = true } = {}
) => {
  if (clean) {
    container.innerHTML = "";
  }

  movies.forEach((element) => {
    const imgPoster = document.createElement("img");
    const imgUrlSrc = RUTA_URL_IMG + element.poster_path;
    imgPoster.classList.add("w-32", "md:w-40", "xl:w-52");
    imgPoster.classList.add("rounded-lg");
    imgPoster.classList.add("cursor-pointer");
    imgPoster.classList.add("before-lazyLoading");
    imgPoster.setAttribute("id", "id" + element.id);
    imgPoster.setAttribute("data-src", imgUrlSrc);

    if (element.name) {
      imgPoster.setAttribute("alt", element.name.split("").join(""));
      imgPoster.addEventListener("click", () => {
        location.hash = `#Details=${element.id}-${element.name
          .split(" ")
          .join("")}`;
      });
    } else {
      imgPoster.setAttribute("alt", element.title.split("").join(""));
      imgPoster.addEventListener("click", () => {
        location.hash = `#Details=${element.id}-${element.title
          .split(" ")
          .join("")}`;
      });
    }
    lazyLoader.observe(imgPoster);
    

    container.appendChild(imgPoster);
  });
};
