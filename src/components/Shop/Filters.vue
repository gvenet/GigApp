<template>
	<div class="d-flex-center justify-space-between m-20 p-10">
		<div class="search-filter d-flex-center">
			<h5 class="material-icons">search</h5>
			<input class="input-search-filter" type="text">
		</div>
		<div class="d-flex-center">
			<div v-for="(elemType,i) in elemTypes" :key="i">
				<input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
				<label :for=elemType>
					<div class="img-elem-filter-container d-flex-center">
						<img class="img-elem-filter" :src="logoType[elemType as keyof typeof logoType]" alt="">
					</div>
				</label>
			</div>
		</div>
		<h5 class="m-10">FILTER1</h5>
		<h5 class="m-10">FILTER2</h5>
	</div>
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import type { LogoTypeInterface } from '../../interfaces/logoType.interface'

const props = defineProps<{
	logoType: LogoTypeInterface,
}>();

const emit = defineEmits<{
	(e: 'exportChecked', value: string[]): void,
}>();

onUpdated(() => emit('exportChecked', checkedElements.value))

const checkedElements = ref([])
const elemTypes = ref(["Bug", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"]);


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
	}
}

.search-filter {
	border-right: var(--border);
}

.input-search-filter {
	width: 100px;
}
</style>