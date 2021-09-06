// https://www.edamam.com/
// const appId = "61d778ac";
// const appKey = "30a0fe86c12488d5d14e30ae266a000e";
// const recipeURL = "https://api.edaman.com/search?q=";

// const searchInput = document.querySelector(".search-input");
// const searchResults = document.querySelector(".search-results");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchQuery = searchInput.value;
//   fetchRecipes(searchQuery);
// });

const appId = "b8357617";
const appKey = "5ac80a3a940c58f142083f2147089c67";
const recipeURL = "https://api.edamam.com/search?q=";

const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = searchInput.value;
  fetchRecipes(searchQuery);
});

async function fetchRecipes(searchQuery) {
  const response = await fetch(
    `${recipeURL}${searchQuery}&app_id=${appId}&app_key=${appKey}&to=30`
  );
  const responseData = await response.json();
  console.log(responseData.hits);
}
