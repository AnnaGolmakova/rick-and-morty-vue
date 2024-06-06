<script setup>
defineProps(['character'])
</script>

<template>
  <div class="card">
    <div class="card__image-wrapper">
      <img :src="character.image" class="card__image" alt="character.name" />
    </div>
    <div class="card__details">
      <h2 class="card__title">{{ character.name }}</h2>
      <dl class="card__description">
        <dt class="label">Species</dt>
        <dd class="description">{{ character.species }}</dd>
        <dt class="label">Last known location:</dt>
        <dd class="description">{{ character.location.name }}</dd>
        <dt class="label">First seen in:</dt>
        <dd class="description">{{ character.origin.name }}</dd>
      </dl>
    </div>
    <div :class="`card__status card__status_${character.status.toLowerCase()}`">
      {{ character.status }}
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: grid;
  grid-template-rows: auto min-content;
  background-color: #222;
  border-radius: 6px;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
  aspect-ratio: 364 / 280;
  margin: 0;
  overflow: hidden;
  color: white;
}

@media only screen and (max-width: 767px) {
  .card {
    aspect-ratio: 300 / 237;
  }
}

.card__image-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card__image-wrapper:hover {
  opacity: 0.7;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.card__details {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 13px;
  gap: 8px;
  padding: 16px;
  overflow: hidden;
}

@media only screen and (max-width: 1024px) {
  .card__details {
    padding: 14px;
    gap: 4px;
  }
}

@media only screen and (max-width: 767px) {
  .card__details {
    gap: 4px;
  }
}

.card__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 16px;
  height: 16px;
  width: calc(100% - 40px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
}

.card__description {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  align-items: center;
  gap: 2px 16px;
}

.label {
  color: #8b8b8b;
  font-weight: 400;
  line-height: 13px;
}

.card__status {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 8px 2px 8px;
  border-radius: 8px;
}

.card__status::before {
  content: ' ';
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-right: 4px;
}

.card__status_alive::before {
  background-color: greenyellow;
}

.card__status_dead::before {
  background-color: red;
}

.card__status_unknown::before {
  background-color: grey;
}
</style>
