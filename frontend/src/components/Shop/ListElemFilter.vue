<template>
	<template v-for="elemType of elemTypes">
		<input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
		<label :for=elemType>
			<div class=" img-elem-filter-container d-flex-center">
				<img class="img-elem-filter" :src="logoType[elemType as keyof typeof logoType]" alt="">
			</div>
		</label>
	</template>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue';
import type { LogoTypeInterface } from '@/interfaces/logoType.interface'

const props = defineProps<{
	logoType: LogoTypeInterface,
	checkedElements: string[],
}>();

const elemTypes = ["Bug", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"];

const emit = defineEmits<{
	(e: 'export-checked', value: string[]): void,
}>();

onUpdated(() => emit('export-checked', props.checkedElements))

</script>

<style lang="scss" scoped>
.elem-filter {
	display: none;

	&:checked+label>div>img {
		animation: rotating 2s linear infinite;
		width: 100%;
	}
}

.img-elem-filter-container {
	width: 35px;
}

.img-elem-filter {
	width: 20px;

	&:hover {
		width: 100%;
		cursor: pointer;
	}
}
</style>