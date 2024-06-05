<template>
	<div class='main__content'>
		<div class='main__content-left'>
			<span class='main__content-left-degree'>{{ Math.round(getFullWeather.current.temp) }}°</span>
			<h3 class='main__content-left-day'>Сегодня</h3>
			<p class='main__content-left-time'>Время: {{ getTime }}</p>
			<p class='main__content-left-city'>Город: {{ getFullWeather.name }}</p>
			<div class='main__content-left-images'>
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
		</div>
		<div class='main__content-right'>
			<img
				src='@/assets/img/cloud-bg.svg'
				alt='cloud.svg'
				class='main__content-right-cloud'
			>
			<div class='main__content-right-item'>
				<div><img src='@/assets/img/temp.svg' alt='temp.svg'></div>
				<span>Температура</span>
				<p>{{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}°</p>
			</div>
			<div class='main__content-right-item'>
				<div><img src='@/assets/img/pressure.svg' alt='pressure.svg'></div>
				<span>Давление</span>
				<p>
					{{ getFullWeather.current.pressure }} мм ртутного столба -
					{{
            getFullWeather.current.pressure >= 1000 &&
            getFullWeather.current.pressure <= 1010
              ? "нормальное"
              : getFullWeather.current.pressure < 1000
              ? "пониженное"
              : getFullWeather.current.pressure > 1010
              ? "повышенное"
              : ""
          }}
				</p>
			</div>
			<div class='main__content-right-item'>
				<div><img src='@/assets/img/precipitation.svg' alt='precipitation.svg'></div>
				<span>Влажность</span>
				<p>{{ getFullWeather.current.humidity ? getFullWeather.current.humidity + '%' : 'Без осадков' }}</p>
			</div>
			<div class='main__content-right-item'>
				<div><img src='@/assets/img/windy.svg' alt='wind.svg'></div>
				<span>Ветер</span>
				<p>
					{{ Math.round(getFullWeather.current.wind_speed) }} м/с - {{ getFullWeather.current.wind_deg ? getFullWeather.current.wind_deg + '°' : '' }}
					{{
            getFullWeather.current.wind_speed >= 0.3 &&
            getFullWeather.current.wind_speed <= 1.5
              ? "тихий"
              : getFullWeather.current.wind_speed >= 1.6 &&
                getFullWeather.current.wind_speed <= 3.3
              ? "лёгкий ветер"
              : getFullWeather.current.wind_speed >= 3.4 &&
                getFullWeather.current.wind_speed <= 5.4
              ? "слабый ветер"
              : getFullWeather.current.wind_speed >= 5.5 &&
                getFullWeather.current.wind_speed <= 7.9
              ? "умеренный ветер"
              : getFullWeather.current.wind_speed >= 8.0 &&
                getFullWeather.current.wind_speed <= 10.7
              ? "свежий ветер"
              : getFullWeather.current.wind_speed >= 10.8 &&
                getFullWeather.current.wind_speed <= 13.8
              ? "сильный ветер"
              : getFullWeather.current.wind_speed >= 13.9 &&
                getFullWeather.current.wind_speed <= 17.1
              ? "крепкий ветер"
              : getFullWeather.current.wind_speed >= 17.2 &&
                getFullWeather.current.wind_speed <= 20.7
              ? "очень крепкий ветер"
              : getFullWeather.current.wind_speed >= 20.8 &&
                getFullWeather.current.wind_speed <= 24.4
              ? "шторм"
              : getFullWeather.current.wind_speed >= 24.5 &&
                getFullWeather.current.wind_speed <= 28.4
              ? "сильный шторм"
              : getFullWeather.current.wind_speed >= 28.5 &&
                getFullWeather.current.wind_speed <= 32.6
              ? "жестокий шторм"
              : getFullWeather.current.wind_speed >= 32.7
              ? "ураган"
              : ""
          }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'

export default {
	computed: {
		...mapGetters(['getFullWeather']),
		descr() {
      return this.getFullWeather.current.weather[0].description
    },
		getTime() {
			return moment().tz(this.getFullWeather.timezone).format('HH:mm')
		},
	},
}
</script>
