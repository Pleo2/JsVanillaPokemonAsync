const minNumber = 0;
const maxNumber = 249;
let result = "";
let contador = "";
let randomNumber;

const generateRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const getCard = () => {
  randomNumber = generateRandomNumber(minNumber, maxNumber);
  resultUrl = cache[randomNumber].images.small;
  resultAlt = cache[randomNumber].name

  return  result = {
    url: resultUrl,
    alt: resultAlt,
  }
};

const showCard = () => {
  specialCard.setAttribute("src", result.url);
  specialCard.alt = result.alt;
};

const generateCard = () => {
  getCard();
  showCard();
  specialCard.classList.add("img-lazyTransition");
};

btn.onclick = generateCard;

