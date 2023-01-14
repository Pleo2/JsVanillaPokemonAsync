const favoritesLimitNumber = 12;
let idFavoriteCard;
let favoriteArray;
let favoritesString;
let parceDataSpecialCard;
let imgId;

let articleParent = () => event.target.parentNode.parentNode;

document.addEventListener("DOMContentLoaded", () => {
  favoriteArray = JSON.parse(localStorage.getItem("Favorites")) || [];
  domListener();
  if(localStorage.Favorites) {  
    arrowDown.innerHTML = `<a href="#container--favorite-cards">
                            <span id="down-arrows-button" class="animate-ping lg:opacity-100 lg:scale-100" style="animation-duration: 3s">
                              <svg class="-rotate-90" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="48" width="48"><path d="m22.65 35.95-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Zm12.65 0-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Z"/></svg>
                            </span>
                          </a>`
  }
});

const domListener = () => {
  favoriteArray = JSON.parse(localStorage.getItem("Favorites")) || [];
  
  if (!localStorage.Favorites) {
    return;
  } else {
    const parceDataSpecialCard = getArticules();
    showArticules(parceDataSpecialCard);
    
    if (favoriteArray.length > 0) {
      const btn0 = btnSelect(0);
      btn0.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        deleteFavorites(articleId);
        event.target.parentNode.parentNode.remove();
        domListener();
      };
    }

    if (favoriteArray.length > 1) {
      const btn1 = btnSelect(1);
      btn1.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 2) {
      const btn2 = btnSelect(2);
      btn2.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 3) {
      const btn3 = btnSelect(3);
      btn3.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 4) {
      const btn4 = btnSelect(4);
        btn4.onclick = (event) => {
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }

    if (favoriteArray.length > 5) {
      const btn5 = btnSelect(5);
      btn5.onclick = (event) => {  
        let article = articleParent();
        let articleId = article.getAttribute("id");
        event.target.parentNode.parentNode.remove();
        deleteFavorites(articleId);
        domListener();
      };
    }
  }
};

const getFavorites = () => {
  if (favoriteArray.length === 0) {
    favoriteArray.push({
      img: specialCard.src,
      id: randomNumber,
      alt: specialCard.alt
    }); 
  } 
  
  if (favoriteArray[favoriteArray.length - 1].img !== specialCard.src && favoriteArray.length < favoritesLimitNumber) {
    favoriteArray.push({
      img: specialCard.src,
      id: randomNumber,
      alt: specialCard.alt
    });
  }
  return favoriteArray;
};

const stringifyFavorites = () => {
  favoritesString = JSON.stringify(favoriteArray);
  return favoritesString;
};

const setLocalStorage = () => {
  localStorage.setItem("Favorites", favoritesString);
};

const getArticules = () => {
  const stringsUrl = localStorage.getItem("Favorites");
  const parceDataSpecialCard = JSON.parse(stringsUrl);
  return parceDataSpecialCard;
};

const showArticules = (parceDataSpecialCard) => {
  const content = document.createElement("div");
  content.classList.add("mx-auto", "w-72","h-auto", "flex", "flex-col", "gap-8", "pb-8", "md:flex-row", "md:flex-wrap", "md:w-5/6", "lg:mt-16");
  let btnNumber = 0;
  content.innerHTML = ""
  containerFavoriteSection.innerHTML = ""
  
  if(parceDataSpecialCard.length >= 1) {
    
    arrowDown.innerHTML = `<a href="#container--favorite-cards">
                            <span id="down-arrows-button" class="animate-ping lg:opacity-100 lg:scale-100" style="animation-duration: 3s">
                              <svg class="-rotate-90" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="48" width="48"><path d="m22.65 35.95-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Zm12.65 0-12-12 12-12 2.1 2.1-9.9 9.9 9.9 9.9Z"/></svg>
                            </span>
                           </a>`
  
    
    
    const h2Title = document.createElement("h2");
    h2Title.classList.add("favoriteCardTitle", "mt-32", "cursor-pointer", "text-center", "font-sans", "font-black", "text-gray-400", "text-2xl", "mt-80","xl:text-8xl", "transition-colors", "duration-500", "ease-out");
  
    const favoriteSpan = document.createElement("span");
    favoriteSpan.classList.add("block", "text-2xl", "h-18", "md:h-18", "md:text-4xl", "lg:text-6xl", "xl:h-24", "xl:text-7xl");
    favoriteSpan.textContent = "Favorite"
    
    const cardSpan = document.createElement("span");
    cardSpan.classList.add("block", "text-xl", "text-red-700", "transition-colors", "duration-500", "ease-out", "hover:text-orange-500", "md:text-3xl", "lg:text-5xl", "xl:text-6xl");
    cardSpan.textContent = "Cards"
    
    h2Title.appendChild(favoriteSpan);
    h2Title.appendChild(cardSpan);
    containerFavoriteSection.appendChild(h2Title);
  }
  
  
  
  const imgCard  = parceDataSpecialCard.forEach(element => {
    const articleContainer = document.createElement("article");
    articleContainer.classList.add("w-max", "mx-auto", "transition-opacity", "duration-300", "w-max" );
    articleContainer.setAttribute("id", element.id);
    
    const img = document.createElement("img");
    img.setAttribute("data-src", element.img);
    img.setAttribute("alt", element.alt);
    img.classList.add("w-40", "pb-2", "mx-auto", "before-lazyLoading", "lg:w-56");
    
    const containerBtn = document.createElement("div");
    containerBtn.classList.add("w-full", "flex", "justify-center", "mt-4");
    
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", `btn-delete${btnNumber++}`);
    deleteBtn.textContent = "delete card 🗑";
    deleteBtn.classList.add("text-gray-300", "font-mono", "font-black", "text-sm", "opacity-75", "border-2", "border-gray-300", "rounded-lg", "w-48", "h-max", "lg:w-56", "lg:p-2", "lg:text-lg");

    
    lazyLoader.observe(img);
    
    content.appendChild(articleContainer)
    articleContainer.appendChild(img);
    articleContainer.appendChild(containerBtn);
    containerBtn.appendChild(deleteBtn);
  })
  containerFavoriteSection.appendChild(content);
};

const runfavoriteBtn = () => {

  if (specialCard.src !== "http://127.0.0.1:5500/src/generator-cards.html") {
    getFavorites();
    stringifyFavorites();
    setLocalStorage();
    parceDataSpecialCard = getArticules();
    showArticules(parceDataSpecialCard);
    domListener();
    
  }
};

const deleteFavorites = (imgId) => {
  let indexInArray = favoriteArray.findIndex((element) => element.id == imgId);
  favoriteArray.splice(indexInArray, 1);
  stringifyFavorites();
  setLocalStorage();
  parceDataSpecialCard = getArticules();
  showArticules(parceDataSpecialCard);
};

btnFavorite.onclick = runfavoriteBtn;
