<template>
	<div>
		<h2 class="title">{{message}}</h2>
		<button @click="btn">按钮</button>
		<h2>{{name}}</h2>
		<Cpn></Cpn>
	</div>	
</template>

<script>
import Cpn from './Cpn.vue';
	export default{
		name:'App',
		components:{
			Cpn,
		},
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
</script>

<style scoped>
	.title{
		color:pink;
	}
</style>