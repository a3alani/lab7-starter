// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.

  let recipe_values = localStorage.getItem("recipes");
  if (!recipe_values) {
    return []; // no recipe in storage
  }
  recipe_values = JSON.parse(recipe_values);
  console.log(recipe_values);
  return recipe_values;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  let main_element = document.querySelector("main");

  recipes.forEach((recipe) => {
    let recipe_card = document.createElement("recipe-card");
    recipe_card.data = recipe;
    main_element.appendChild(recipe_card);
  });
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  // Not console logged
  let recipes_string = JSON.stringify(recipes);
  localStorage.setItem("recipes", recipes_string);
}

/**
 * Adds the necessary event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
  // B2. TODO - Get a reference to the <form> element
  let form = document.querySelector("form");

  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked

  // Steps B4-B9 will occur inside the event listener from step B3
  // B4. TODO - Create a new FormData object from the <form> element reference above
  // B5. TODO - Create an empty object (we'll refer to this object as recipeObject to
  //            make this easier to read), and then extract the keys and corresponding
  //            values from the FormData object and insert them into recipeObject
  // B6. TODO - Create a new <recipe-card> element
  // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
  // B8. TODO - Append this new <recipe-card> to <main>
  // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
  //            then save the recipes array back to localStorage

  // B3
  form.addEventListener("submit", function () {
    // B4
    let form_data = new FormData(form);

    // B5
    let recipe_object = {};
    form_data.forEach((value, key) => {
      recipe_object[key] = value;
    });

    // B6
    let recipe_card = document.createElement("recipe-card");

    // B7
    recipe_card.data = recipe_object;

    // B8
    let main_element = document.querySelector("main");
    main_element.appendChild(recipe_card);

    // B9
    let recipes = getRecipesFromStorage();
    recipes.push(recipe_object);
    saveRecipesToStorage(recipes);
  });

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  let clear_button = document.querySelector(".danger");

  // B11. TODO - Add a click event listener to clear local storage button
  clear_button.addEventListener("click", () => {
    // B12
    localStorage.clear();

    // B13
    let main = document.querySelector("main");
    main.innerHTML = "";
  });

  // Steps B12 & B13 will occur inside the event listener from step B11
  // B12. TODO - Clear the local storage
  // B13. TODO - Delete the contents of <main>
}
