<template>
	<div class="dropdown">
		<div class="dropdown-title d-flex-center mb-5 mt-5" :class="{clicked: toggle}" @click="toggle = !toggle;">
			<span>Elem</span>
			<div v-if="toggle" class="material-icons">arrow_drop_up</div>
			<div v-else class="material-icons">arrow_drop_down</div>
		</div>
		<div :class="{'dropdown-content-hide': !toggle , 'dropdown-content-display': toggle}">
			<div class="d-flex-center flex-wrap">
				<template v-for="elemType in elemTypes">
					<input class="elem-filter" type="checkbox" :id=elemType :value=elemType v-model="checkedElements">
					<label :for=elemType>
						<div class="img-elem-filter-container d-flex-center">
							<img class="img-elem-filter" :src="logoTypes[elemType as keyof typeof logoTypes]" alt="">
						</div>
					</label>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onUpdated, ref, reactive, inject} from 'vue';
import type { LogoTypeInterface } from '@/interfaces/logoType.interface'
import { elemTypesKeys, logoTypesKeys } from '@/provideKeys/provideKeys';

const toggle = ref(false);

const props = defineProps<{
	checkedElements: string[],
}>();

const { elemTypes } = inject<Readonly<{ elemTypes: string[] }>>(elemTypesKeys)!
const { logoTypes } = inject<Readonly<{ logoTypes: LogoTypeInterface }>>(logoTypesKeys)!

const emit = defineEmits<{
	(e: 'export-checked', value: string[]): void,
}>();

onUpdated(() => emit('export-checked', props.checkedElements))

</script>

<style scoped lang="scss">
.clicked {
	color: var(--hover-text-color);
	background-color: var(--hover-background-color-2);
	cursor: pointer;
}

.dropdown {
	position: relative;
	display: inline-block;
}

.dropdown-content-hide {
	display: none;
}

.dropdown-content-display {
	display: block;
	position: absolute;
	background-color: var(--hover-background-color-3);
	border-radius: 15px;
	width: 120px;
	padding: 10px 5px;
	z-index: 1;
}

.dropdown-title:hover {
	color: var(--hover-text-color);
	background-color: var(--hover-background-color-2);
	cursor: pointer;
}

.img-elem-filter-container {
	width: 35px;
	height: 35px;
}

.img-elem-filter {
	width: 20px;

	&:hover {
		cursor: pointer;
	}
}

.elem-filter {
	display: none;

	&:checked+label>div>img {
		animation: rotating 2s linear infinite;
		width: 100%;
	}
}
</style>
