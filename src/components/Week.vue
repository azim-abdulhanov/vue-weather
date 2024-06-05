<template>
	<div class='main__week'>
		<div class='main__week-btns'>
			<button>На неделю</button>
			<button @click='getWeather("Tashkent")'>Отменить</button>
		</div>
		<div class='main__week-days'>
			<PerWeek
				v-for='(day, idx) in getDailyWeather'
				:key='idx'
				:day='day'
				@click='openModal(day, idx)'
			/>
		</div>
	</div>

	<Modal
		@closeModal='closeModal'
		v-if='modal'
		:day='day'
	/>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PerWeek from '@/components/PerWeek.vue'
import Modal from '@/components/Modal.vue'

export default {
	data(){
		return{
			modal: false,
			day: null
		}
	},
	components: {
		PerWeek,
		Modal
	},
	computed: {
		...mapGetters(['getDailyWeather'])
	},
	methods: {
		...mapActions(['getWeather']),
		openModal(day, idx) {
			this.modal = true
			this.day = day ? day : null
		},
		closeModal(val){
			this.modal = val
		},
	},
}
</script>
