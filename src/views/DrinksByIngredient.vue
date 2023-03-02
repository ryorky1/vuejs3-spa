<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-mono font-bold mb-4 text-cyan-500">Drinks for {{ ingredient.strIngredient1 }}</h1>
  </div>
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from '../components/Drinks.vue'

const route = useRoute();
const ingredient = computed(() => store.state.ingredient)
const drinks = computed(() => store.state.drinksByIngredient)

onMounted(() => {
  store.dispatch('drinkSearchByIngredient', route.params.ingredient)
})

</script>
