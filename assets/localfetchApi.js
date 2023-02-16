const APICard = "https://api.pokemontcg.io/v2/cards/";
const optionsCard = {
  method: "GET",
  Headers: {
    "X-API-KEY" : "e45a77d6-5b1b-465d-a0ae-67038c51e6e8",
  },
};

//--------------------------------------------------------//

let cache;

const fetchDataCard = async (urlApi, options) => {
  const response = await fetch(urlApi, options);
  const data = await response.json();

  return data;
};

const getData = async () => {
  const all = await fetchDataCard(APICard, optionsCard);
  return all;
};

const getCache = () => {
  (async () => {
    try {
      if (!localStorage.data) {
        data = await getData();
        let dataData = data.data;
        const stringData = JSON.stringify(dataData);
        localStorage.setItem("data", stringData);
        cache = JSON.parse(localStorage.data);
        btnStart.classList.remove("hidden");
        loadingSpinner.classList.add("hidden")
        return
        
      } else {
        cache = JSON.parse(localStorage.data);
         return cache

      }
    } catch (error) {
      console.log(error);
    }
  })();
};

const showBtn = () => {
  if( window.location.pathname === '/src/generator-cards.html' || window.location.pathname === '/src/generator-cards.html' ){
    const btnStart = null || document.getElementById("start-button");
    const loadingSpinner = null || document.getElementById("loading-spinner");  
    if(localStorage.data) {
      btnStart.classList.remove("hidden");
      loadingSpinner.classList.add("hidden")
      return 
    }
    return
  }
  return 
}

getCache();
showBtn();