<template>
    <ul>
        <h3 v-if="error">{{ error }}</h3>
        <li v-for="item in posts" :key="item.id">
            {{ item.id }} {{ item.title }}
        </li>
    </ul>
</template>

<script setup>
    const nuxtApp = useNuxtApp()
    const {data: posts, pending, error, status, execute } = await useFetch('https://api.vercel.app/blog', {
        key: 'photos',
        lazy: true,
        getCachedData(key) {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        }
    })
</script>

<style lang="scss" scoped>

</style>