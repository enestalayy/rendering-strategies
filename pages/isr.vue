<script setup>
    const nuxtApp = useNuxtApp()
    // const {data: posts, pending, error, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
    //     key: 'photos',
    //     lazy: true,
    //     getCachedData(key) {
    //         return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    //     }
    // })
definePageMeta({
    layout: 'currency'
})
const currencyStore = useCurrencyStore()
const { currencies } = storeToRefs(currencyStore)
console.log('ISR çalıştı')
    currencyStore.fetchCurrency();
</script>

<template>
    <div class="w-full text-center flex flex-row justify-between">
        <!-- <h1 class="text-4xl my-2">Incremental Static Regeneration</h1> -->
        <!-- <ul class="w-1/2 ml-10 flex flex-col items-start">
        <h3 v-if="error">{{ error }}</h3>
        <li v-for="item in currencies" :key="item.id" class="whitespace-nowrap">
            {{ item.id }} {{ item.title }}
        </li>
    </ul> -->
    <ul v-for="(item, index) in currencies" :key="index">
        <li >{{item.code}}: {{item.value.toFixed(4) + item.symbol}}</li>
      </ul>
    </div>
</template>


