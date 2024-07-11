<script setup lang="ts">
import HeaderApp from './components/HeaderApp.vue'
import contactList from './components/ContactList.vue'
import { onMounted, ref } from 'vue'
import axios from 'axios'

const items = ref([])

onMounted(async () => {
    try {
        const { data } = await axios.get(
            'https://04acd28634d9740e.mokky.dev/items'
        )
        items.value = data
    } catch (err) {
        console.log(err)
    }
})
</script>
<template>
    <div>
        <header-app />
        <div class="flex justify-center items-center">
            <contact-list :items="items" />
        </div>
    </div>
</template>

<style></style>
