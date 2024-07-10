<script lang="ts"></script>

<template>
    <section
        class="bg-customYellow rounded-xl border-2 border-black flex items-center justify-center p-10"
    >
        <form @submit.prevent="addContact" class="flex flex-col gap-5">
            <input
                class="bg-customYellow text-xl placeholder-black"
                v-model="name"
                type="text"
                placeholder="Name"
                required
            />
            <input
                class="bg-customYellow text-xl placeholder-black"
                v-model="phone"
                type="tel"
                placeholder="Phone"
                required
            />
            <input
                class="bg-customYellow text-xl placeholder-black"
                v-model="email"
                type="email"
                placeholder="Email"
                required
            />
            <div class="flex justify-between">
                <button type="submit">Edit Contact</button>
                <button type="submit">Delete Contact</button>
            </div>
        </form>
    </section>
</template>

<style scoped></style>
