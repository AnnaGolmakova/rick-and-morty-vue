<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <nav role="navigation" aria-label="pagination" class="pagination">
    <ul class="pagination__container">
      <li
        v-for="index in totalPages"
        :key="index"
        :class="['pagination__item', index == currentPage ? 'pagination__item_active' : '']"
      >
        <button type="button" @click="$emit('changePage', index)" class="pagination-button">
          {{ index }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination__container {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
}
.pagination__item {
  width: 40px;
  height: 40px;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.pagination__item:hover {
  opacity: 0.8;
  background-color: lightgray;
}

.pagination__item_active {
  background-color: lightgray;
}

.pagination-button {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-family: inherit;
}
</style>
