<script setup lang="ts">
import ContactItem from './ContactItem.vue'
import { PropType } from 'vue'

const props = defineProps({
    items: Array as PropType<
        Array<{ id: number; name: string; mail?: string; phone?: number }>
    >,
})
</script>

<template>
    <div
        class="flex gap-5 items-center justify-center p-6 overflow-clip flex-wrap"
    >
        <ContactItem
            v-for="item in props.items"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :mail="item.mail"
            :phone="item.phone"
        />
    </div>
</template>

<style scoped></style>
