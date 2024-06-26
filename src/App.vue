<script setup>
import CharacterCard from './components/CharacterCard.vue'
import CardList from './components/CardList.vue'
import Pagination from './components/Pagination.vue'
import SearchForm from './components/SearchForm.vue'
import getCharacters from './utils/rickAndMortyAPI.js'
import { ref, onMounted } from 'vue'

const characters = ref([])
const totalPages = ref(0)
const currentPage = ref(1)
const filterOptions = ref({
  name: '',
  status: ''
})

onMounted(async () => {
  loadData()
})

async function loadData() {
  try {
    const response = await getCharacters({
      page: currentPage.value,
      name: filterOptions.value.name,
      status: filterOptions.value.status
    })
    characters.value = response.results
    totalPages.value = response.info.pages
  } catch (error) {
    console.log(error, error.code, error.body)
    if (error.code === 404) {
      characters.value = []
      totalPages.value = 0
    } else {
      alert(
        'Unable to find any characters. You might have a problem with your internet connection. Please, try again later'
      )
    }
  }
}

function navigateToPage(page) {
  currentPage.value = page
  loadData()
}

function applyFilter(filter) {
  filterOptions.value = filter
  currentPage.value = 1
  loadData()
}
</script>

<template>
  <header>
    <h1 class="header">Rick and Morty's Characters</h1>
  </header>

  <main>
    <SearchForm @filter-submit="(filter) => applyFilter(filter)" />
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
    @change-page="(page) => navigateToPage(page)"
  />
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 500;
  line-height: 1.5;
}
</style>
