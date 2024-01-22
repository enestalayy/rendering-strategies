<script setup>
definePageMeta({
    layout: 'currency'
})
const currencies = ref([
    { name: '₺ TRY', code: 'TRY', symbol: '₺', value: 0 },
    { name: '$ USD', code: 'USD', symbol: '$', value: 0 },
    { name: '€ Euro', code: 'EUR', symbol: '€', value: 0 },
    { name: '£ GBP', code: 'GBP', symbol: '£', value: 0 },
])
const fetchCurrencies = async () => {
    const {data} = await useFetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JarnIfUap3XwqgJiUpO961NLR4ZrpNZiIWUCDfdj&currencies=EUR%2CUSD%2CGBP%2CTRY&base_currency=TRY', {
key: 'currencies'
})

    currencies.value.forEach(currency => {
        currency.value = 1 / data.value.data[currency.code];
    });
    console.log('fetch çalıştı');
} 
onMounted(() => {
    fetchCurrencies()
})
</script>

<template>
    <div class="w-full text-center flex flex-row justify-between">
    <ul v-for="(item, index) in currencies" :key="index">
        <li >{{item.code}}: {{item.value + item.symbol}}</li>
      </ul>
    </div>
</template>


