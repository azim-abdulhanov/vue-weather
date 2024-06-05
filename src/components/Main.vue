<template>
	<main class='main'>
		<MainContent />
		<Week />
	</main>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import Week from '@/components/Week.vue'

export default {
	components: {
		MainContent,
		Week
	}
}
</script>
