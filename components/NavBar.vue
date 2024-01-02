<template>
        <ul class="w-full flex flex-row items-center justify-around bg-green-300 p-2">
            <li class="border-2 border-transparent hover:border-red-500 text-red-600 rounded-md p-1 ">
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="border-2 border-transparent hover:border-red-500 text-red-600 rounded-md p-1 ">
                <nuxt-link to="/csr">CSR</nuxt-link>
            </li>
            <li class="border-2 border-transparent hover:border-red-500 text-red-600 rounded-md p-1 ">
                <nuxt-link to="/ssr">SSR</nuxt-link>
            </li>
            <li class="border-2 border-transparent hover:border-red-500 text-red-600 rounded-md p-1 ">
                <nuxt-link to="/ssg">SSG</nuxt-link>
            </li>
            <li class="border-2 border-transparent hover:border-red-500 text-red-600 rounded-md p-1 ">
                <nuxt-link to="/isr">ISR</nuxt-link>
            </li>
        </ul>
</template>

<script>
    export default {
        
    }
</script>

<style >

</style>