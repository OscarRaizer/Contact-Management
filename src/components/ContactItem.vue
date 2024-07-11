<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps<{
    id: number
    name: string
    mail: string
    phone: number
}>()

const emit = defineEmits(['update:contact'])

const localName = ref(props.name)
const localMail = ref(props.mail)
const localPhone = ref(props.phone)

const saveContact = async () => {
    const updatedContact = {
        id: props.id,
        name: localName.value,
        mail: localMail.value,
        phone: localPhone.value,
    }
    try {
        await axios.patch(
            `https://04acd28634d9740e.mokky.dev/items/${props.id}`,
            updatedContact
        )
        emit('update:contact', updatedContact)
        console.log('Contact updated:', updatedContact)
    } catch (error) {
        console.error('Error updating contact:', error)
    }
}
</script>

<template>
    <div
        class="bg-customYellow rounded-xl border-2 border-black flex items-center justify-center p-6 flex-col gap-5 min-w-60 hover:shadow-xl transition"
    >
        <form @submit.prevent="saveContact" class="flex flex-col gap-5 w-full">
            <div class="flex justify-between items-center">
                <label for="name" class="text-2xl">Name:</label>
                <input
                    id="name"
                    v-model="localName"
                    class="bg-customYellow text-xl border-b border-black ml-3"
                    type="text"
                    required
                />
            </div>
            <div class="flex justify-between items-center">
                <label for="mail" class="text-2xl">Email:</label>
                <input
                    id="mail"
                    v-model="localMail"
                    class="bg-customYellow text-xl border-b border-black"
                    type="email"
                    required
                />
            </div>
            <div class="flex justify-between items-center">
                <label for="phone" class="text-2xl">Phone:</label>
                <input
                    id="phone"
                    v-model="localPhone"
                    class="bg-customYellow text-xl border-b border-black"
                    type="tel"
                    required
                />
            </div>
            <div class="flex justify-between w-full mt-5">
                <button
                    type="submit"
                    class="text-2xl bg-customGreen px-6 py-3 rounded-xl hover:scale-105 transition active:bg-lime-700 disabled:bg-slate-400"
                >
                    Save
                </button>
                <button
                    type="button"
                    class="text-2xl bg-customRed px-6 py-3 rounded-xl text-customWhite hover:scale-105 transition active:bg-lime-700 disabled:bg-slate-400"
                >
                    Delete
                </button>
            </div>
        </form>
    </div>
</template>
