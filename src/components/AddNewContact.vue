<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const mail = ref('')
const phone = ref('')

const addNewContact = async () => {
    try {
        const newContact = {
            name: name.value,
            mail: mail.value,
            phone: phone.value,
        }
        await axios.post('https://04acd28634d9740e.mokky.dev/items', newContact)
        name.value = ''
        mail.value = ''
        phone.value = ''
        emit('new-contact-added')
    } catch (error) {
        console.error('Error adding new contact:', error)
    }
}

const emit = defineEmits<{
    (e: 'new-contact-added'): void
}>()
</script>

<template>
    <form
        class="flex flex-row justify-center items-center gap-5 h-full flex-wrap"
        @submit.prevent="addNewContact"
    >
        <div class="flex flex-col justify-between items-center gap-4">
            <label for="name" class="text-2xl">Name:</label>
            <input
                id="name"
                v-model="name"
                class="bg-customYellow text-xl border-none outline-none w-52 rounded pl-1"
                type="text"
                required
            />
        </div>
        <div class="flex flex-col justify-between items-center gap-4">
            <label for="mail" class="text-2xl">Email:</label>
            <input
                id="mail"
                v-model="mail"
                class="bg-customYellow text-xl border-none outline-none w-64 rounded pl-1"
                type="email"
                required
            />
        </div>
        <div class="flex flex-col justify-between items-center gap-4">
            <label for="phone" class="text-2xl">Phone:</label>
            <input
                id="phone"
                v-model="phone"
                class="bg-customYellow text-xl border-none outline-none w-36 rounded pl-1"
                type="tel"
                required
            />
        </div>
        <button
            type="submit"
            class="text-xl bg-customGreen rounded-xl hover:scale-105 transition px-5 active:bg-lime-700 disabled:bg-slate-400 self-stretch p-5"
        >
            Add
        </button>
    </form>
</template>
