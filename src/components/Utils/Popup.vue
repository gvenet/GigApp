<template>
	<div class="popup">
		<div class="popup-inner d-flex-center">
			<img :src="fullImg" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">

defineProps<{
	fullImg: string
}>();

</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0,0,0, 0.8);
}

.popup-inner {
	width: 100%;
	height: 100%;
}
</style>