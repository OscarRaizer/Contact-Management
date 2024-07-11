<script lang="ts" setup>
defineProps({
    id: Number,
    name: String,
    mail: String,
    phone: Number,
})
</script>

<template>
    <div
        class="bg-customYellow rounded-xl border-2 border-black flex items-center justify-center p-8 flex-col gap-5 min-w-80"
    >
        <ul class="flex flex-col gap-3 w-full">
            <li class="flex justify-between items-center">
                <span class="text-2xl">Name:</span>
                <span class="text-xl">{{ name }}</span>
            </li>
            <li class="flex justify-between items-center gap-3">
                <span class="text-2xl">Mail:</span>
                <span class="text-xl">{{ mail }}</span>
            </li>
            <li class="flex justify-between items-center">
                <span class="text-2xl">Phone:</span>
                <span class="text-xl">{{ phone }}</span>
            </li>
        </ul>
        <div class="flex justify-between w-full">
            <button class="text-2xl bg-customGreen px-6 py-3 rounded-xl">
                Edit
            </button>
            <button class="text-2xl bg-customGreen px-6 py-3 rounded-xl">
                Delete
            </button>
        </div>

        <!--        <form @submit.prevent="addContact" class="flex flex-col gap-5">-->
        <!--            <input-->
        <!--                class="bg-customYellow text-xl placeholder-black"-->
        <!--                v-model="name"-->
        <!--                type="text"-->
        <!--                placeholder="Name"-->
        <!--                required-->
        <!--            />-->
        <!--            <input-->
        <!--                class="bg-customYellow text-xl placeholder-black"-->
        <!--                v-model="phone"-->
        <!--                type="tel"-->
        <!--                placeholder="Phone"-->
        <!--                required-->
        <!--            />-->
        <!--            <input-->
        <!--                class="bg-customYellow text-xl placeholder-black"-->
        <!--                v-model="email"-->
        <!--                type="email"-->
        <!--                placeholder="Email"-->
        <!--                required-->
        <!--            />-->
        <!--            <div class="flex justify-between">-->
        <!--                <button type="submit">Edit Contact</button>-->
        <!--                <button type="submit">Delete Contact</button>-->
        <!--            </div>-->
        <!--        </form>-->
    </div>
</template>

<style scoped></style>
