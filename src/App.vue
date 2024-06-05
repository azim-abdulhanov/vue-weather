<template>
  <div :class='{ active: themeWeather }'>
    <div class='container' v-if='getFullWeather'>
      <Header @theme='theme' />
      <Main />
    </div>

    <div class='loading' v-else>
      <div class='loading__spinner'>
        <div class='loading__spinner-set1'>
          <div class='loading__spinner-ball'></div>
          <div class='loading__spinner-ball'></div>
        </div>
        <div class='loading__spinner-set2'>
          <div class='loading__spinner-ball'></div>
          <div class='loading__spinner-ball'></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  data() {
    return {
      themeWeather: false
    }
  },
  components: {
		Header,
    Main
	},
  methods: {
    ...mapActions(['getWeather']),
    theme() {
      this.themeWeather = !this.themeWeather
      this.$emit('themeChanged', this.themeWeather)
    },
  },
  computed: {
    ...mapGetters(['getFullWeather']),
  },
  created() {
    this.getWeather('Tashkent')
  },
  watch: {
    themeWeather(val) {
      document.body.classList.toggle('active', val)
    }
  }
}
</script>
