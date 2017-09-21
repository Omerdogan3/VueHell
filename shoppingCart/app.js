window.addEventListener('load',()=>{
	
	window.vue = new Vue({
		el:'#app',
		data:{
			isLoading: true,
			cart:[],
			saved:[]
		},
		created(){
			fetch('./data.json')
				.then((res)=>{ return res.json() })
				.then((res)=>{
					this.isLoading = false; 
					console.log(res);
				})
		}
	})
});