import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import Home from '../views/Home.vue'
import DrinksByIngredient from '../views/DrinksByIngredient.vue'
import DrinksByLetter from '../views/DrinksByLetter.vue'
import DrinksByName from '../views/DrinksByName.vue'
import DrinkDetails from '../views/DrinkDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: DrinksByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: DrinksByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: DrinksByIngredient,
      },
      {
        path: '/drink/:id',
        name: 'drinkDetails',
        component: DrinkDetails
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
