<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
  >
    <router-link :to="{ name: 'drinkDetails', params: { id: drink.idDrink } }">
      <img
        :src="drink.strDrinkThumb"
        :alt="drink.strDrink"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ drink.strDrink }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(drink.strInstructions, 20) }}
      </p>
    </div>
  </div>
</template>

<script setup>

const { drink } = defineProps({
  drink: {
    required: true,
    type: Object
  }
})

</script>
