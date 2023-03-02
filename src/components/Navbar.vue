<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-emerald-500 font-bold"
    >
    <img class="wineglass" src="../assets/wine_glass.png" alt="Wine Glass"/>
    </router-link>
    <div>
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-600 hover:text-gray-600 focus:outline-none focus:text-gray-600 mt-5 mr-3">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-5 mr-3">
        <li>
          <div class="relative">
            <!-- Dropdown toggle button -->
            <button @click="show = !show" class="flex items-center text-cyan-500 font-bold bg-white rounded-md focus:outline-none">
              <span class="mr-4">Search Menu</span>
              <svg class="w-5 h-5 text-cyan-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div v-show="show" class="py-2 mt-2 bg-cyan-500 rounded-md shadow-xl lg:absolute lg:right-0 w-44">
              <router-link
                :to="{ name: 'home' }"
                class="block px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400 hover:text-cyan-100">
                Home
              </router-link>
              <router-link
                :to="{ name: 'byName' }"
                class="block px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400 hover:text-cyan-100">
                Drinks By Name
              </router-link>
              <router-link
                :to="{ name: 'byLetter' }"
                class="block px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400 hover:text-cyan-100">
                Drinks by Letter
              </router-link>
              <router-link
                :to="{ name: 'ingredients' }"
                class="block px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400 hover:text-cyan-100">
                Drinks By Ingredients
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup() {
      let showMenu = ref(false);
      let show = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, show, toggleNav };
    },
  };
</script>
<style scoped>
  .wineglass {
    height:2em;
    width:2em;
  }
</style>
