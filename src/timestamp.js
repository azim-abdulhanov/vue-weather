function unix (dt, type) {
	const milliseconds = dt * 1000
	const data = new Date(milliseconds)

	let result =
		type == 'weekday' ? data.toLocaleString('ru-RU', { weekday: 'long' }) :
		type == 'month' ? data.toLocaleString('ru-RU', { month: 'long' }) :
		type == 'day' ? data.toLocaleString('ru-RU', { day: 'numeric' }) : ''

	return result
}

export default unix
