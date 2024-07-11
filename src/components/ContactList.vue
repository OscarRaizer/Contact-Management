<script setup lang="ts">
import ContactItem from './ContactItem.vue'

interface Contact {
    id: number
    name: string
    mail: string
    phone: number
}

defineProps<{
    items: Contact[]
}>()

const emit = defineEmits(['update:item', 'delete:item'])

const handleUpdateContact = (updatedContact: Contact) => {
    emit('update:item', updatedContact)
}

const handleDeleteContact = (id: number) => {
    emit('delete:item', id)
}
</script>

<template>
    <div
        class="flex gap-5 items-center justify-center p-6 overflow-clip flex-wrap"
    >
        <ContactItem
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :mail="item.mail"
            :phone="item.phone"
            @update:contact="handleUpdateContact"
            @delete:contact="handleDeleteContact"
        />
    </div>
</template>

<style scoped></style>
