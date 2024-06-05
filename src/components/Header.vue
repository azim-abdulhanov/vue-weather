<template>
  <div class='header'>
    <div class='header__nav'>
      <a href='/' class='header__nav-logo'>
        <img src='@/assets/img/logo.svg' alt='logo' />
        <span>vue weather</span>
      </a>
      <div class='header__nav-search'>
        <img
          src='@/assets/img/theme-swicher.svg'
          alt='theme-swicher'
          @click="this.$emit('theme')"
        />
        <input
          type='text'
          placeholder='Выбрать город...'
          v-model='query'
          @keydown.enter='getWeather(query)'
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    ...mapActions(['getWeather']),
  },
}
</script>
