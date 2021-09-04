const date = () => {
	const date = new Date();
	const formatDate = `${ date.getDate() }/${ date.getMonth() + 1 }`

	const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
	const day = days[date.getDay() - 1]

	const time = `${ date.getHours() }:${ date.getMinutes() }`

	const value = `${ formatDate } ${ day } ${ time }`

	document.getElementById('date').innerHTML = value

	setInterval('date()', 60000)
}
