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
        class="flex gap-5 items-center justify-center overflow-clip flex-wrap px-4"
    >
        <TransitionGroup name="contact">
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
        </TransitionGroup>
    </div>
</template>
<style>
.contact-enter-active,
.contact-leave-active {
    animation: fadeInOut 0.3s ease forwards;
}

.contact-move {
    transition: transform 0.3s ease;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.contact-leave-active {
    animation-direction: reverse;
}
</style>
