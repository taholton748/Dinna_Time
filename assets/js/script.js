var foodRecipe = document.querySelector('#food-recipe-list'); // unordered list for food recipes (parent of li child)
var foodButton = document.querySelector('#food-button'); // food recipe submit button
var foodForm = document.querySelector('#food-form'); // food input value
var foodInput = document.querySelector('#food-input')
var ingredientSearchTerm = document.querySelector('#ingredient-search-term');
var drinkRecipe = document.querySelector('#drink-recipe-list'); // unordered list for drink recipes (parent of li child)
var drinkButton = document.querySelector('#drink-button'); // drink recipe submit button
var drinkInput = document.querySelector('#drink-input'); // drink input value

// form submission for recipes based on input ingredient
var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var ingredient = foodInput.value.trim(); // id of input element for submit form
  
    if (ingredient) {
      getIngredientRecipe(ingredient);
  
      // foodRecipe.textContent = ''; // where the ingredients list goes
      foodInput.value = '';
    } else {
      alert('Please enter an ingredient');
    }
  };

  var getIngredientRecipe = function (ingredients) { // request recipes based on ingredients function
    var apiUrl = 'www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredients; // API for fetching recipes based on ingredients
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (recipe) { // convert recipe response to json and function to console log them and display
            console.log(recipe); // console log recipes
            displayRecipes(recipe); // function to display
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to MealDB');
      });
  };
  
  var displayRecipes = function (meals, searchTerm) { // ingredients display function
    if (meals.length === 0) { // confirming recipes exist based on ingredient input
      foodRecipe.textContent = 'No recipes found.'; // if no recipes, add display that there aren't any
      return;
    }
     ingredientSearchTerm.textContent = searchTerm;

     for (var i = 0; i < meals.length; i++) {
      var mealName = meals[i].meals.strMeal; // pulling recipe names from API through meals then selecting meal name
       var recipesEl = document.createElement('li'); // create list element for recipe names
      recipesEl.classList = 'list-item flex-row justify-space-between align-center'; // add classes to list element --> I randomly threw this in here
      recipesEl.setAttribute('href', '' + mealName); // added the option to include links if we wanted to go that route
       var titleEl = document.createElement('span');
      titleEl.textContent = recipeName; // ingredient name goes here
       recipesEl.appendChild(titleEl); // append div or UL that the list element is going in
     }
  };
 
  
  foodForm.addEventListener('submit', formSubmitHandler); // event listener for submit button
  
  
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