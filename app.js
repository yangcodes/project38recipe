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
  displayRecipes(responseData.hits);
}

function displayRecipes(recipeResults) {
  let recipeEl = "";
  recipeResults.forEach((recipeResult) => {
    recipeEl += `
    <div class="item">
      <img src="${recipeResult.recipe.image}" />
      <div class="content-wrapper">
        <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
        <a href="${
          recipeResult.recipe.url
        }" target="_blank" class="view-recipe">View Recipe</a>
      </div>
      <div class="recipe-desc">
        <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
          2
        )}</p>
        <p class="item-data">Diet Label: ${recipeResult.recipe.dietLabels}</p>
        <p class="item-data">Health Label: ${
          recipeResult.recipe.healthLabels
        }</p>
        <p class="item-data">Source: ${recipeResult.recipe.source}</p>
      </div>
  </div>
    `;
    searchResults.innerHTML = recipeEl;
  });
}
