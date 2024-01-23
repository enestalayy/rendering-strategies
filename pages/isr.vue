<script setup>
definePageMeta({
    layout: 'currency'
})
// const currencies =  [
//     { name: '₺ TRY', code: 'TRY', symbol: '₺', value: 0 },
//     { name: '$ USD', code: 'USD', symbol: '$', value: 0 },
//     { name: '€ Euro', code: 'EUR', symbol: '€', value: 0 },
//     { name: '£ GBP', code: 'GBP', symbol: '£', value: 0 },
// ]
// const { data, error} = await useFetch('http://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JarnIfUap3XwqgJiUpO961NLR4ZrpNZiIWUCDfdj&currencies=EUR%2CUSD%2CGBP%2CTRY&base_currency=TRY', {
//     key: 'currencies'
//     })
//     if (data) {
        
//         currencies.value.forEach(currency => {
//             console.log(data.value.data[currency.code])
//             currency.value = 1 / data.value.data[currency.code];
//         });
//         console.log('fetch çalıştı');
//     } else {
//         console.error('Hata:', error);
//     }
const currencies = {
    TRY: 0,
    USD: 0,
    EUR: 0,
    GBP: '21'
}
</script>

<template>
    {{ JSON.stringify(currencies) }}
</template>


