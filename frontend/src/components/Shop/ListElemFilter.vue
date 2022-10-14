<template>
	<template v-for="elemType of elemTypes">
		<input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
		<label :for=elemType>
			<div class=" img-elem-filter-container d-flex-center">
				<img class="img-elem-filter" :src="logoTypes[elemType as keyof typeof logoTypes]" alt="">
			</div>
		</label>
	</template>
</template>

<script setup lang="ts">
import { onUpdated, inject } from 'vue';
import type { LogoTypeInterface } from '@/interfaces/logoType.interface'
import { pokemonTypesKeys } from '@/provideKeys/provideKeys';

const props = defineProps<{
	checkedElements: string[],
}>();

const emit = defineEmits<{
	(e: 'export-checked', value: string[]): void,
}>();

const { logoTypes, elemTypes } = inject(pokemonTypesKeys)!;



onUpdated(() => emit('export-checked', props.checkedElements));

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