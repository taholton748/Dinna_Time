// ingredient variables
var foodForm = document.querySelector('#food-form'); // food input value
var foodInput = document.querySelector('#food-input'); // food form
var recipeContainer = document.querySelector('#recipe-containers'); // container for recipe list
var ingredientSearchTerm = document.querySelector('#ingredient-search-term'); // recipe section header

// drink variables - need to be updated once recipes is confirmed and working
var drinkForm = document.querySelector('#drink-form'); // drink input value
var drinkInput = document.querySelector('#drink-input'); // drink form
var drinkContainer = document.querySelector('#drink-containers'); // container for drink list
var drinkSearchTerm = document.querySelector('#drink-search-term'); // drink section header

// form submission for recipes based on input ingredient
var formSubmitHandler = function (event) {
    event.preventDefault();
    localStorage.setItem("food input", JSON.stringify(foodInput.value));
  
    var ingredient = foodInput.value.trim(); // id of input element for submit form
  
    if (ingredient) {
      getIngredientRecipe(ingredient);
  
      recipeContainer.textContent = ''; // where the ingredients list goes
      foodInput.value = '';
    } else {
      recipeContainer.textContent = 'Enter a protein to see recipes.'; // notification presents if no protein is entered
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
          recipeContainer.textContent = 'Error:' + response.statusText; // notification presents if bad connection to the MealDB
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
    if (!meals) { // confirming recipes exist based on ingredient input
      recipeContainer.textContent = 'No recipes found.'; // if no recipes, add display that there aren't any
      return;
    }
    
    for (var i = 0; i < 5; i++) {
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

// ------------------------------------------------------------------------------------------------------------------------------------------------ //

// form submission for recipes based on input ingredient
var formSubmitHandlerDrink = function (event) {
    event.preventDefault();
    localStorage.setItem("drink input", JSON.stringify(drinkInput.value));
  
    var drinkBase = drinkInput.value.trim(); // id of input element for submit form
  
    if (drinkBase) {
      getDrinkAbv(drinkBase);
  
      drinkContainer.textContent = ''; // where the ingredients list goes
      drinkInput.value = '';
    } else {
      drinkContainer.textContent = 'Enter a base liquor for your drink.'; // notification presents if no liquor is entered
    }
  };

  // fetching the recipes from API
  var getDrinkAbv = function (drinks) { // request recipes based on ingredients function
    var apiUrlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + drinks; // API for fetching recipes based on ingredients
  
    fetch(apiUrlDrink)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          // set to local storage
          return response.json()
        } else {
          recipeContainer.textContent = 'Error:' + response.statusText; // notification presents if bad connection to the CocktailDB
        }
      }).then(function(drink) { // convert recipe response to json and function to console log them and display
        console.log('drink', drink); // console log recipes
        displayDrinks(drink.drinks); // function to display
      })
      .catch(function (error) {
        drinkContainer.textContent = 'No drinks found.'; // change this to match above
      });
  };
  
  // displaying the recipes from the API
  var displayDrinks = function (drinks) { // ingredients display function
    for (var i = 0; i < 5; i++) {
        var liquorName = drinks[i].strDrink; // pulling recipe names from API through meals then selecting meal name (maybe remove .meals?)
        var liquorsEl = document.createElement('li'); // create list element for recipe names
        liquorsEl.textContent = liquorName; // adding text content for list element (meal options)
        liquorsEl.classList = ''; // add classes to list element --> I randomly threw this in here, must be determined
        //liquorsEl.setAttribute('href', '' + mealName); // added the option to include links if we wanted to go that route --> delete if not neededs
        drinkContainer.appendChild(liquorsEl);
    }

  };
 
  // recipes sevent listeners
  drinkForm.addEventListener('submit', formSubmitHandlerDrink); // event listener for submit button