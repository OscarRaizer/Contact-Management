<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue'
import ContactList from './components/ContactList.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import AddNewContact from './components/AddNewContact.vue'

interface Contact {
    id: number
    name: string
    mail: string
    phone: number
}

const items = ref<Contact[]>([])
const searchQuery = ref('')

const filteredItems = computed(() =>
    items.value.filter(
        (item) =>
            !searchQuery.value ||
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
)

const saveContactsToLocalStorage = () => {
    localStorage.setItem('contacts', JSON.stringify(items.value))
}

const fetchContacts = async () => {
    try {
        const { data } = await axios.get<Contact[]>(
            'https://04acd28634d9740e.mokky.dev/items'
        )
        items.value = data
        saveContactsToLocalStorage()
    } catch (err) {
        console.log(err)
    }
}

const updateItem = (updatedItem: Contact) => {
    const index = items.value.findIndex((item) => item.id === updatedItem.id)
    if (index !== -1) {
        items.value.splice(index, 1, updatedItem)
        saveContactsToLocalStorage()
    }
}

const deleteItem = (id: number) => {
    items.value = items.value.filter((item) => item.id !== id)
    saveContactsToLocalStorage()
}

onMounted(() => {
    fetchContacts()
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
        items.value = JSON.parse(savedContacts)
    }
})
</script>
<template>
    <div>
        <HeaderApp />
        <div class="flex flex-row justify-between items-end mb-20 px-28 wrap">
            <SearchBar v-model="searchQuery" />
            <AddNewContact @new-contact-added="fetchContacts" />
        </div>

        <div class="flex justify-center items-center">
            <ContactList
                :items="filteredItems"
                @update:item="updateItem"
                @delete:item="deleteItem"
            />
        </div>
    </div>
</template>
