import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
	state: {
		apiKey: '68a232bebcd4fd472262b7a54217df7a',
		getFullWeather: null,
	},
	mutations: {
		getWeather(state, payload) {
			state.getFullWeather = payload
		},
	},
	actions: {
		async getWeather({ commit, state }, city) {
			try {
				let res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
				let weather = res.data[0]
				const { lat, lon, name } = weather
				let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
				let weatherInfo = res2.data
				let weatherObj = { ...weatherInfo, name: name }
				commit('getWeather', weatherObj)
			} catch (err) {
				console.log(err)
			}
		}
	},
	getters: {
		getFullWeather: state => state.getFullWeather,
    getDailyWeather: state => state.getFullWeather.daily
	}
})

export default store
