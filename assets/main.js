const APIyoutube =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCcqvmc1uRblenC_-z2pizfA&part=snippet%2Cid&order=date&maxResults=16";

  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": "bfa734cd8emsh6bd35a5af181555p1d441ajsnd13d8ac0acbe",
    },
  };

const YOUTUBE_RUTA = "https://www.youtube.com/watch?v=";

//----------------------------------------------------------------------------------------------------------------------------//  

const content = null || document.getElementById("content");

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videosData = await fetchData(APIyoutube);
    const videos = videosData.items;
    createImgYoutube(content, videos);
  } catch (error) {
    console.log(error)
  }
})();

const createImgYoutube = (container, videos) => {
  container.innerHTML = ""
  videos.forEach(element => {
    const divContenedor = document.createElement("div");
    divContenedor.classList.add("group","relative");

    const linkVideo = document.createElement("a");
    linkVideo.href = YOUTUBE_RUTA + element.id.videoId;

    const divContainerImgVideo = document.createElement("div");
    divContainerImgVideo.classList.add("w-full", "bg-black", "aspect-w-1", "aspect-h-1", "rounded-md", "overflow-hidden", "group-hover:opacity-75", "lg:aspect-none");
    
    const imgVideo = document.createElement("img");
    imgVideo.setAttribute("data-src", element.snippet.thumbnails.medium.url);
    imgVideo.alt = element.snippet.title;
    imgVideo.classList.add("w-full", "before-lazyLoading");

    const containerTitle = document.createElement("div");
    containerTitle.classList.add("mt-0", "flex", "justify-between");

    const h3Title = document.createElement("h3");
    h3Title.classList.add("text-sm", "text-gray-500", "mt-3", "font-semibold");
    h3Title.textContent = element.snippet.title;

    const spanTitle = document.createElement("span");
    spanTitle.classList.add("absolute", "inset-0");

    divContenedor.appendChild(divContainerImgVideo);
    divContenedor.appendChild(containerTitle);

    divContainerImgVideo.appendChild(linkVideo);
    linkVideo.appendChild(imgVideo)
    containerTitle.appendChild(h3Title);

    lazyLoader.observe(imgVideo);

    container.appendChild(divContenedor);
  })
}