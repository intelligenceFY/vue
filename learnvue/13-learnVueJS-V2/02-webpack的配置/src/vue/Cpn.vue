<template>
	<div>
		<h2>我是cpn的标题</h2>
		<p>我是cpn组件内容</p>
		<h2>{{name}}</h2>
	</div>
</template>
<script>
	export default{
		name:'Cpn',
		data(){
		return {
			// message:'hello webpack!',
			name:'Cpn组件的name'
		}
	}
}
</script>