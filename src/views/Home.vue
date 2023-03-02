<template>
  <div class="p-8 pb-0 text-cyan-500">
    <h1 class="text-4xl font-mono font-bold mb-4">Drinks</h1>
  </div>
  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import Drinks from "../components/Drinks.vue";
import axiosClient from "../axiosClient.js";

const drinks = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => drinks.value.push(data.drinks[0]));
  }
  console.log(data.drinks)
});
</script>
