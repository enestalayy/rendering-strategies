<script setup>
    const nuxtApp = useNuxtApp()
    // const {data: posts, pending, error, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/posts', {
    //     key: 'photos',
    //     lazy: true,
    //     getCachedData(key) {
    //         return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    //     }
    // })
    const currencies = ref([
      { name: '₺ TRY', code: 'TRY', symbol: '₺', value: 0 },
      { name: '$ USD', code: 'USD', symbol: '$', value: 0 },
      { name: '€ Euro', code: 'EUR', symbol: '€', value: 0 },
      { name: '£ GBP', code: 'GBP', symbol: '£', value: 0 },
    ])
    
    const fetchCurrency = async () => {
      const { data } = await useFetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aLMUoTZWNnO5kLl8CZSXn05r7FryPeVwlohM0I9Q&currencies=EUR%2CUSD%2CGBP%2CTRY&base_currency=TRY')
      console.log(data.value.data)
      if (data && data.value) {
        currencies.value.forEach(currency => {
          currency.value = 1 / data.value.data[currency.code]
        })
      }
    }
    fetchCurrency()

</script>

<template>
    <div class="w-full text-center">
        <h1 class="text-4xl my-2">Incremental Static Regeneration</h1>
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


