// const loadCrypto = () => {
// 	const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,monero,litecoin,dogecoin,uniswap,chia'
// 	console.log(url)
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(res => {
// 			const wrapper = document.getElementById('crypto')
// 			wrapper.innerHTML = ''

// 			res.forEach(({ symbol, current_price, price_change_percentage_24h }) => {
// 				const span = document.createElement('span')

// 				const percentClass = price_change_percentage_24h >= 0 ? 'profit' : 'loss'
// 				const percentage = `<span class="${ percentClass }">${ Math.abs(price_change_percentage_24h) }%</span>`

// 				span.innerHTML = `<strong>${ symbol }</strong> ${ current_price } ${ percentage }`
// 				span.classList.add('crypto-price')

// 				wrapper.appendChild(span)
// 			})
		// })
		// .catch(err => {
		// 	console.log(err)
		// })
// }

const date = () => {
	const date = new Date();
	const formatDate = `${ date.getDate() }/${ date.getMonth() + 1 }`

	const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
	const day = days[date.getDay()]

	const time = `${ date.getHours() }:${ date.getMinutes() }`

	const value = `${ formatDate } ${ day } ${ time }`

	document.getElementById('date').innerHTML = value
}

const setup = () => {
	date()
	// loadCrypto()

	setInterval('setup()', 60000)
}
