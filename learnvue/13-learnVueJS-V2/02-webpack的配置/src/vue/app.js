export default {
	template:`
		<div>
			<h2>{{message}}</h2>
			<button @click="btn">按钮</button>
			<h2>{{name}}</h2>
		</div>
	`,
	data(){
		return {
			message:'hello webpack!',
			name:'李华'
		}
	},
	methods:{
		btn(){

		}
	}
}