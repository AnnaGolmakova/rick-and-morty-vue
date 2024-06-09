<script setup>
import { ref } from 'vue'

const statusSelected = ref('')
const name = ref('')
</script>

<template>
  <form name="search" class="search-form" noValidate>
    <div class="search-form__wrapper">
      <div class="search-form__container">
        <input
          id="search"
          name="query"
          type="search"
          placeholder="Character"
          class="search-form__input"
          v-model="name"
        />
        <select name="status" id="status" class="search-form__status" v-model="statusSelected">
          <option value="">Any status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button
          type="submit"
          @click.prevent="$emit('filterSubmit', { name: name, status: statusSelected })"
          class="search-form__button"
        >
          Search
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.search-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: stretch;
  margin: 40px 0 40px 0;
}

@media only screen and (max-width: 767px) {
  .search-form {
    padding: 0 4px;
  }
}

.search-form__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-form__container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 8px;
  background-color: #2f2f2f;
  border: 1px #2f2f2f solid;
  border-radius: 40px;
  height: 46px;
  overflow: hidden;
  padding: 6px 6px 6px 22px;
}

.search-form__container:has(.search-form__input:focus) {
  border: 1px rgba(255, 255, 255, 0.2) solid;
}

.search-form__input {
  height: 100%;
  flex: 1;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  line-height: 17px;
}

.search-form__input:focus {
  outline: none;
}

.search-form__status {
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  color: white;
  padding: 0 32px 0 8px;
  height: 100%;
  background-color: transparent;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 10px) 1em;
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;
  border: none;
  font-size: 14px;
  font-family: inherit;
}

.search-form__status:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.search-form__button {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  height: 32px;
  padding: 0 24px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-family: inherit;
}

.search-form__button:hover {
  opacity: 0.8;
}
</style>
