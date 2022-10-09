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

.elem-filter-container {
	height: 50px;
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

.search-filter {
	border-right: var(--border);
	height: 50px;
}

.input-search-filter {
	font-size: var(--font-size);
	width: 70px;

	&::-webkit-input-placeholder {
		color: var(--text-primary-color);
	}

	&:focus::-webkit-input-placeholder {
		color: var(--hover-text-color);
	}

	:focus {
		color: var(--hover-text-color);
	}
}

.stats-filter-container {
	border-right: var(--border);
	height: 50px;
}

.reset-filter {
	border-left: var(--border);
	height: 50px;
	color: var(--text-secondary-color);

	&:hover {
		color: var(--text-primary-color);
		cursor: pointer;
	}
}

.stats-filter {
	height: 40px;

	&:hover {
		color: var(--hover-text-color);
		background-color: var(--hover-background-color-2);
		cursor: pointer;
	}
}
</style>