<template>
	<div class='main__perweek'>
		<h3 class='main__perweek-day'>{{ getWeekDay }}</h3>
		<p class='main__perweek-calendar'>{{ getDay }} {{ getMonth }}</p>
		<div class='main__perweek-images'>
			<img src='@/assets/img/sun.svg' v-if='descr == "ясно"'>
			<img src='@/assets/img/rain.svg' v-else-if='descr == "дождь"'>
			<img src='@/assets/img/rain-mix.svg' v-else-if='descr == "проливной дождь"'>
			<img src='@/assets/img/rain-mix.svg' v-else-if='descr == "небольшой моросящий дождь"'>
			<img src='@/assets/img/cloud.svg' v-else-if='descr == "облако"'>
			<img src='@/assets/img/cloud.svg' v-else-if='descr == "небольшая облачность"'>
			<img src='@/assets/img/cloudy.svg' v-else-if='descr == "переменная облачность"'>
			<img src='@/assets/img/day-cloudy.svg' v-else-if='descr == "облачно с прояснениями"'>
			<img src='@/assets/img/wind.svg' v-else-if='descr == "ветер"'>
			<img src='@/assets/img/sandstorm.svg' v-else-if='descr == "песчаная буря"'>
			<img src='@/assets/img/fog.svg' v-else-if='descr == "туман"'>
			<img src='@/assets/img/mainly-cloudy.svg' v-else-if='descr == "пасмурно"'>
			<img src='@/assets/img/fog.svg' v-else-if='descr == "дымка"'>
			<img src='@/assets/img/rain-wind.svg' v-else-if='descr == "небольшой дождь"'>
			<img src='@/assets/img/rain-wind.svg' v-else-if='descr == "сильный дождь"'>
			<img src='@/assets/img/hail.svg' v-else-if='descr == "град"'>
			<img src='@/assets/img/thunderstorm.svg' v-else-if='descr == "гроза"'>
			<img src='@/assets/img/storm-showers.svg' v-else-if='descr == "ливни"'>
			<img src='@/assets/img/sleet.svg' v-else-if='descr == "гроза с небольшим дождём"'>
			<img src='@/assets/img/snow.svg' v-if='descr == "снег"'>
		</div>
		<span class='main__perweek-maxtemp'>{{ Math.round(day.temp.max) }}°</span>
		<span class='main__perweek-mintemp'>{{ Math.round(day.temp.min) }}°</span>
		<p class='main__perweek-descr'>{{ day.weather[0].description }}</p>
	</div>
</template>

<script>
import unix from '@/timestamp'
import { mapGetters } from 'vuex'

export default {
	props: {
		day: Object,
	},
	computed: {
		...mapGetters(['getFullWeather']),
		descr() {
      return this.day.weather[0].description
    },
		getWeekDay() {
			return unix(this.day.dt, 'weekday')
		},
		getDay() {
			return unix(this.day.dt, 'day')
		},
		getMonth() {
			return unix(this.day.dt, 'month')
		},
	},
}
</script>
