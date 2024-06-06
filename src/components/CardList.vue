<script setup>
defineProps(['items'])
</script>

<template>
  <ul class="card-list">
    <li class="card-list__item" v-if="!items.length">Ничего не найдено</li>
    <li class="card-list__item" v-for="item in items" :key="item.id">
      <slot :item />
    </li>
  </ul>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  gap: 37px 24px;
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media only screen and (max-width: 767px) {
  .card-list {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
