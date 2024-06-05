<template>
	<div class='modal' @click='closeModal'>
		<div class='modal__content' @click.stop>
			<div class='modal__content-left'>
				<span class='modal__content-left-degree'>{{ Math.round(day.temp.max) }}°</span>
				<h3 class='modal__content-left-day'>{{ getWeekDay }}</h3>
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
				<p class='modal__content-left-calendar'>{{ getDay }} {{ getMonth }}</p>
				<p class='modal__content-left-city'>Город: {{ getFullWeather.name }}</p>
      </div>
			<div class="modal__content-right">
				<div class='modal__content-right-item'>
					<div><img src='@/assets/img/temp.svg' alt='temp.svg'></div>
					<span>Температура</span>
					<p>{{ Math.round(day.temp.day) }}° - ощущается как {{ Math.round(day.feels_like.day) }}</p>
				</div>
				<div class='modal__content-right-item'>
					<div><img src='@/assets/img/pressure.svg' alt='pressure.svg'></div>
					<span>Давление</span>
					<p>
						{{ day.pressure }} мм ртутного столба -
						{{
							day.pressure >= 1000 &&
							day.pressure <= 1010
								? "нормальное"
								: day.pressure < 1000
								? "пониженное"
								: day.pressure > 1010
								? "повышенное"
								: ""
						}}
					</p>
				</div>
				<div class='modal__content-right-item'>
					<div><img src='@/assets/img/precipitation.svg' alt='precipitation.svg'></div>
					<span>Влажность</span>
					<p>{{ day.humidity ? day.humidity + '%' : 'Без осадков' }}</p>
				</div>
				<div class='modal__content-right-item'>
					<div><img src='@/assets/img/windy.svg' alt='wind.svg'></div>
					<span>Ветер</span>
					<p>
						{{ Math.round(day.wind_speed) }} м/с - {{ day.wind_deg ? day.wind_deg + '°' : '' }}
						{{
							day.wind_speed >= 0.3 &&
							day.wind_speed <= 1.5
								? "тихий"
								: day.wind_speed >= 1.6 &&
									day.wind_speed <= 3.3
								? "лёгкий ветер"
								: day.wind_speed >= 3.4 &&
									day.wind_speed <= 5.4
								? "слабый ветер"
								: day.wind_speed >= 5.5 &&
									day.wind_speed <= 7.9
								? "умеренный ветер"
								: day.wind_speed >= 8.0 &&
									day.wind_speed <= 10.7
								? "свежий ветер"
								: day.wind_speed >= 10.8 &&
									day.wind_speed <= 13.8
								? "сильный ветер"
								: day.wind_speed >= 13.9 &&
									day.wind_speed <= 17.1
								? "крепкий ветер"
								: day.wind_speed >= 17.2 &&
									day.wind_speed <= 20.7
								? "очень крепкий ветер"
								: day.wind_speed >= 20.8 &&
									day.wind_speed <= 24.4
								? "шторм"
								: day.wind_speed >= 24.5 &&
									day.wind_speed <= 28.4
								? "сильный шторм"
								: day.wind_speed >= 28.5 &&
									day.wind_speed <= 32.6
								? "жестокий шторм"
								: day.wind_speed >= 32.7
								? "ураган"
								: ""
						}}
					</p>
				</div>
				<img
					@click="closeModal"
					src="@/assets/img/close.svg"
					alt="close.svg"
					class="modal__content-right-close"
				>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import unix from '@/timestamp'

export default {
	props: {
		day: Object
	},
	methods: {
		closeModal() {
			this.$emit('closeModal', false)
		}
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
