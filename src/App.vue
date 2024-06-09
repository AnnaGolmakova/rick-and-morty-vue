<script setup>
import CharacterCard from './components/CharacterCard.vue'
import CardList from './components/CardList.vue'
import Pagination from './components/Pagination.vue'
import SearchForm from './components/SearchForm.vue'
import characters from './data/character.js'
</script>

<template>
  <header>
    <h1 class="header">Rick and Morty's Characters</h1>
  </header>

  <main>
    <SearchForm />
    <CardList :items="characters">
      <template #default="{ item }">
        <CharacterCard :character="item" />
      </template>
    </CardList>
  </main>

  <Pagination v-bind:current-page="2" v-bind:total-pages="10" />
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
