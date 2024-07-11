<script lang="ts" setup>
import axios from 'axios'
import { reactive } from 'vue'

const props = defineProps<{
    id: number
    name: string
    mail: string
    phone: number
}>()

const emit = defineEmits(['update:contact', 'delete:contact'])

const localData = reactive({
    name: props.name,
    mail: props.mail,
    phone: props.phone,
})

const saveContact = async () => {
    const updatedContact = { id: props.id, ...localData }
    try {
        await axios.patch(
            `https://04acd28634d9740e.mokky.dev/items/${props.id}`,
            updatedContact
        )
        emit('update:contact', updatedContact)
    } catch (error) {
        console.error('Error updating contact:', error)
    }
}

const deleteContact = async () => {
    try {
        await axios.delete(
            `https://04acd28634d9740e.mokky.dev/items/${props.id}`
        )
        emit('delete:contact', props.id)
        console.log('Contact deleted:', props.id)
    } catch (error) {
        console.error('Error deleting contact:', error)
    }
}
</script>

<template>
    <div
        class="bg-customYellow rounded-xl border-2 border-black flex items-center justify-center p-6 flex-col gap-5 hover:shadow-2xl transition"
    >
        <form @submit.prevent="saveContact" class="flex flex-col gap-5 w-full">
            <div
                class="flex flex-col sm:flex-row justify-between items-center sm:items-start"
            >
                <label for="name" class="text-xl sm:text-2xl mb-2 sm:mb-0"
                    >Name:</label
                >
                <input
                    id="name"
                    v-model="localData.name"
                    class="w-full sm:w-auto text-xl sm:text-2xl bg-customYellow border-b border-black outline-none sm:ml-3"
                    type="text"
                    required
                />
            </div>
            <div
                class="flex flex-col sm:flex-row justify-between items-center sm:items-start"
            >
                <label for="mail" class="text-xl sm:text-2xl mb-2 sm:mb-0"
                    >Email:</label
                >
                <input
                    id="mail"
                    v-model="localData.mail"
                    class="w-full sm:w-auto text-xl sm:text-2xl bg-customYellow border-b border-black outline-none sm:ml-3"
                    type="email"
                    required
                />
            </div>
            <div
                class="flex flex-col sm:flex-row justify-between items-center sm:items-start"
            >
                <label for="phone" class="text-xl sm:text-2xl mb-2 sm:mb-0"
                    >Phone:</label
                >
                <input
                    id="phone"
                    v-model="localData.phone"
                    class="w-full sm:w-auto text-xl sm:text-2xl bg-customYellow border-b border-black outline-none sm:ml-3"
                    type="tel"
                    required
                />
            </div>
            <div class="flex justify-between w-full mt-5 gap-2">
                <button
                    type="submit"
                    class="text-2xl bg-customGreen px-6 py-3 rounded-xl hover:scale-105 transition active:bg-lime-700 disabled:bg-slate-400"
                >
                    Save
                </button>
                <button
                    type="button"
                    @click="deleteContact"
                    class="text-2xl bg-customRed px-6 py-3 rounded-xl text-customWhite hover:scale-105 transition active:bg-lime-700 disabled:bg-slate-400"
                >
                    Delete
                </button>
            </div>
        </form>
    </div>
</template>
