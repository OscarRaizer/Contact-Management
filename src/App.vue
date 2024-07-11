<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue'
import ContactList from './components/ContactList.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface Contact {
    id: number
    name: string
    mail: string
    phone: number
}

const items = ref<Contact[]>([])

onMounted(async () => {
    try {
        const { data } = await axios.get<Contact[]>(
            'https://04acd28634d9740e.mokky.dev/items'
        )
        items.value = data
    } catch (err) {
        console.log(err)
    }
})

const updateItem = (updatedItem: Contact) => {
    const index = items.value.findIndex((item) => item.id === updatedItem.id)
    if (index !== -1) {
        items.value.splice(index, 1, updatedItem)
    }
}
</script>
<template>
    <div>
        <header-app />
        <div class="flex justify-center items-center">
            <ContactList :items="items" @update:item="updateItem" />
        </div>
    </div>
</template>

<style></style>
