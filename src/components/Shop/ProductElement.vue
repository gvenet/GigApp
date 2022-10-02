<template>
	<div class="mb-10 d-flex-center justify-start">
		<div class="d-flex-center mr-10">
			<h4 class="mr-10">{{name}}</h4>
			<h4>{{def}}</h4>
		</div>
	</div>
</template>

<script setup lang="ts">

defineProps<{
	name: string,
	def: string | number,
}>()



</script>

<style scoped lang="scss">

</style>