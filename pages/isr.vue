<template>
    <ul>
        <h3 v-if="error">{{ error }}</h3>
        <li v-for="item in posts" :key="item.id">
            {{ item.id }} {{ item.title }}
        </li>
    </ul>
</template>

<script setup>
    const {data: posts, pending, error, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<style lang="scss" scoped>

</style>