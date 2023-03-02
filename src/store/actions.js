import axiosClient from '../axiosClient';

export function drinkSearch({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setDrinksSearched', data.drinks)
    })
}

export function drinkSearchByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setDrinksByLetter', data.drinks)
    })
}

export function drinkSearchByIngredient({ commit }, ing) {
  axiosClient.get(`filter.php?i=${ing}`)
    .then(({ data }) => {
      commit('setDrinkIngredients', data.drinks)
    })
}