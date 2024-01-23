<script setup>
definePageMeta({
    layout: 'currency'
})
const currencies = [
    { code: 'TRY', value: null },
    { code: 'USD', value: null },
    { code: 'EUR', value: null },
    { code: 'GBP', value: null },
]
const { data, error} = await useFetch('http://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JarnIfUap3XwqgJiUpO961NLR4ZrpNZiIWUCDfdj&currencies=EUR%2CUSD%2CGBP%2CTRY&base_currency=TRY', {
    key: 'currencies'
    })
    if (data) {
        currencies.forEach(currency => {
            console.log(data.value.data[currency.code])
            currency.value = 1 / data.value.data[currency.code];
        });
    } else {
        console.error('Hata:', error);
    }

</script>

<template>
    <pre>{{ JSON.stringify(currencies, null, 2) }}</pre>
</template>


