var foodRecipe = document.querySelector('#food-recipe-list'); // unordered list for food recipes (parent of li child)
var foodButton = document.querySelector('#food-button'); // food recipe submit button
var foodInput = document.querySelector('#food-input'); // food input value
var drinkRecipe = document.querySelector('#drink-recipe-list'); // unordered list for drink recipes (parent of li child)
var foodFormEl = document.querySelector('#food-form');
var drinkButton = document.querySelector('#drink-button'); // drink recipe submit button
var drinkInput = document.querySelector('#drink-input'); // drink input value


// capture form submission
var foodFormSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var ingredient = foodInput.value.trim();
    if (ingredient) {
        getFoodRecipe(ingredient);
        foodInput.value="";
    } else {
        alert("Please enter an ingredient.");
    }
};

foodFormEl.addEventListener("submit", foodFormSubmitHandler);

// request recipe from themealdb
var getFoodRecipe = function(ingredient) {
    // format the themealdb api url
    var foodRequestUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
    // make a request to the url
    fetch(foodRequestUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {
                response.json().then(function(data){
                    //displayRecipes();
                    console.log(response);
                });
            } else {
                alert("Error: Ingredient Not Found");
            }
        })
        .catch(function(error) {
            alert("Unable to connect to TheMealDB");
        });
};


// inside fetch API function
//var FoodRequestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'; // =chicken will be replaced with '= + meal' from search

// create a new list item for the unordered list
// content of the new list item (comes from input value)
// appending the part of the html that will be updated (include classes to match html - establish separately in css)
// add food ingredient input to local storage and create persistent html (e.g. buttons)


// inside fetch API function
var drinkRequestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'; // =vodka will be replaced with '= + meal' from search

// create a new list item for the unordered list
// content of the new list item
// appending the part of the html that will be updated (include classes to match html - establish separately in css)
// add drink ingredient input to local storage and create persistent html (e.g. buttons)