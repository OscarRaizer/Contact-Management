<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
})

const searchQuery = ref(props.modelValue)

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    searchQuery.value = target.value
    emit('update:modelValue', target.value)
}

watch(
    () => props.modelValue,
    (newValue) => {
        searchQuery.value = newValue
    }
)
</script>

<template>
    <div class="flex justify-center align-center">
        <input
            :value="searchQuery"
            @input="handleInput"
            class="w-full sm:w-auto rounded-md focus:outline outline-black px-4 py-2 bg-customWhite text-black text-2xl"
            type="text"
            placeholder="Search..."
        />
    </div>
</template>
