window.addEventListener('load',() => {
			new Vue({
			el: '#app',
			data:{
			message: 'Hello World!',
			isLoggedIn: false,
			userName: "OD",
			htmlMessage: "<input type='input'>Sup!<i/input>"
		}
	})
})