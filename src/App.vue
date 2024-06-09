<script setup>
import CharacterCard from './components/CharacterCard.vue'
import CardList from './components/CardList.vue'
import Pagination from './components/Pagination.vue'
import SearchForm from './components/SearchForm.vue'
import getCharacters from './utils/rickAndMortyAPI.js'
import { ref, onMounted } from 'vue'

// let characters = await getCharacters()
const characters = ref([])
const totalPages = ref(0)
const currentPage = ref(1)

onMounted(async () => {
  const response = await getCharacters()
  characters.value = response.results
  totalPages.value = response.info.pages
})
</script>

<template>
  <header>
    <h1 class="header">Rick and Morty's Characters</h1>
  </header>

  <main>
    <SearchForm />
    <CardList v-if="characters" :items="characters">
      <template #default="{ item }">
        <CharacterCard :character="item" />
      </template>
    </CardList>
  </main>

  <Pagination
    v-if="totalPages !== 0"
    v-bind:current-page="currentPage"
    v-bind:total-pages="totalPages"
  />
</template>

<style scoped>
.header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}
</style>
