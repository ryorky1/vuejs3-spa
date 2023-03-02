<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-mono font-bold mb-4 text-cyan-500">Drinks by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
    >
      {{ letter }}
    </router-link>
  </div>

  <Drinks :drinks="drinks" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Drinks from "../components/Drinks.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const drinks = computed(() => store.state.drinksByLetter);

watch(route, () => {
  store.dispatch("drinkSearchByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("drinkSearchByLetter", route.params.letter);
});
</script>
