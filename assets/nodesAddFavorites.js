const $ = (id) => document.getElementById(id);

const btn = $("btn");
const containerSpecialCard = $("container-special-card")
const specialCard = $("special-card")
const btnFavorite = $("btn-favorite");

const btnSelect = (number) => $(`btn-delete${number}`);

const btnStart = $("start-button");
const loadingSpinner = $("loading-spinner");

const containerFavoriteSection = $("container--favorite-cards");
const arrowDown = $("container-arrow-down");
