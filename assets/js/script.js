// ingredient variables
var foodButton = document.querySelector('#food-button'); // food recipe submit button
var foodForm = document.querySelector('#food-form'); // food input value
var foodInput = document.querySelector('#food-input'); // food form
var recipeContainer = document.querySelector('#recipe-containers'); // container for recipe list
var ingredientSearchTerm = document.querySelector('#ingredient-search-term'); // recipe section header

// drink variables - need to be updated once recipes is confirmed and working
var drinkRecipe = document.querySelector('#drink-recipe-list'); // unordered list for drink recipes (parent of li child)
var drinkButton = document.querySelector('#drink-button'); // drink recipe submit button
var drinkForm = document.querySelector('#drink-form'); // drink input value
var drinkInput = document.querySelector('#drink-input'); // drink input value
var drinkSearchTerm = document.querySelector('#drink-search-term'); // drink section header

// form submission for recipes based on input ingredient
var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var ingredient = foodInput.value.trim(); // id of input element for submit form
  
    if (ingredient) {
      getIngredientRecipe(ingredient);
  
      recipeContainer.textContent = ''; // where the ingredients list goes
      foodInput.value = '';
    } else {
      alert('Please enter an ingredient');
    }
  };

  // fetching the recipes from API
  var getIngredientRecipe = function (ingredients) { // request recipes based on ingredients function
    var apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredients; // API for fetching recipes based on ingredients
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          return response.json()
        } else {
          alert('Error: ' + response.statusText);
        }
      }).then(function(recipe) { // convert recipe response to json and function to console log them and display
        console.log('recipe', recipe); // console log recipes
        displayRecipes(recipe.meals); // function to display
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  // displaying the recipes from the API
  var displayRecipes = function (meals) { // ingredients display function
    if (meals.length === 0) { // confirming recipes exist based on ingredient input
      foodRecipe.textContent = 'No recipes found.'; // if no recipes, add display that there aren't any
      return;
    }
    
    for (var i = 0; i < meals.length; i++) {
        var mealName = meals[i].strMeal; // pulling recipe names from API through meals then selecting meal name (maybe remove .meals?)
        var recipesEl = document.createElement('li'); // create list element for recipe names
        recipesEl.textContent = mealName; // adding text content for list element (meal options)
        recipesEl.classList = ''; // add classes to list element --> I randomly threw this in here, must be determined
        //recipesEl.setAttribute('href', '' + mealName); // added the option to include links if we wanted to go that route --> delete if not neededs
        recipeContainer.appendChild(recipesEl);
    }

  };
 
  // recipes sevent listeners
  foodForm.addEventListener('submit', formSubmitHandler); // event listener for submit button


// inside fetch API function
var drinkRequestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'; // =vodka will be replaced with '= + meal' from search

// create a new list item for the unordered list
// content of the new list item
// appending the part of the html that will be updated (include classes to match html - establish separately in css)
// add drink ingredient input to local storage and create persistent html (e.g. buttons)