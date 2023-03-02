export function setDrinksSearched(state, drinks) {
  state.searchedDrinks = drinks || []
}
export function setDrinksByLetter(state, drinks) {
  state.drinksByLetter = drinks || []
}
export function setDrinkIngredients(state, drinks) {
  state.drinksByIngredient = drinks || []
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}