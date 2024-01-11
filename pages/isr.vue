<template>
    <div class="w-full text-center">
        <h1 class="text-4xl my-2">Incremental Static Regeneration</h1>
        <ul class="w-1/2 ml-10 flex flex-col items-start">
        <h3 v-if="error">{{ error }}</h3>
        <li v-for="item in posts" :key="item.id" class="whitespace-nowrap">
            {{ item.id }} {{ item.title }}
        </li>
    </ul>
    </div>
</template>

<script setup>
    const nuxtApp = useNuxtApp()
    const {data: posts, pending, error, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
        key: 'photos',
        lazy: true,
        getCachedData(key) {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        }
    })
</script>

<style lang="scss" scoped>

</style>