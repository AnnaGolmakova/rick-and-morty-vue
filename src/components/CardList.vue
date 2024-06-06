<script setup>
defineProps(['items'])
</script>

<template>
  <ul>
    <li v-if="!items.length">Ничего не найдено</li>
    <li v-for="item in items" :key="item.id">
      <slot :item />
    </li>
  </ul>
</template>

<style scoped></style>
