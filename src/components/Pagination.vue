<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  maxVisiblePages: {
    type: Number,
    default: 10
  }
})

const pages = computed(() => {
  const result = []
  const visiblePages = Math.min(props.maxVisiblePages, props.totalPages)
  const start = Math.max(1, Math.ceil(props.currentPage - visiblePages / 2))

  for (let i = start; i <= Math.min(start + visiblePages - 1, props.totalPages); i++) {
    result.push(i)
  }
  return result
})
</script>

<template>
  <nav role="navigation" aria-label="pagination" class="pagination">
    <ul class="pagination__container">
      <li v-if="props.currentPage > maxVisiblePages / 2 + 1" class="pagination__item">
        <button type="button" @click="$emit('changePage', 1)" class="pagination-button">1</button>
      </li>
      <li v-if="props.currentPage > maxVisiblePages / 2 + 2">•••</li>
      <li
        v-for="index in pages"
        :key="index"
        :class="['pagination__item', index == props.currentPage ? 'pagination__item_active' : '']"
      >
        <button type="button" @click="$emit('changePage', index)" class="pagination-button">
          {{ index }}
        </button>
      </li>
      <li v-if="pages[pages.length - 1] < props.totalPages">•••</li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination__container {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 40px 0 0 0;
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
