import { useAsyncData } from 'nuxt/app'
import { defineStore } from 'pinia'

export const useCurrencyStore = defineStore('currencyStore', {
  state: () => ({

    currencies: [
      { name: '₺ TRY', code: 'TRY', symbol: '₺', value: 0 },
      { name: '$ USD', code: 'USD', symbol: '$', value: 0 },
      { name: '€ Euro', code: 'EUR', symbol: '€', value: 0 },
      { name: '£ GBP', code: 'GBP', symbol: '£', value: 0 },
    ],
  }),

  actions: {
    async fetchCurrency() {
      const { data } = await useAsyncData("currencies", () =>
        $fetch(
          "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aLMUoTZWNnO5kLl8CZSXn05r7FryPeVwlohM0I9Q&currencies=EUR%2CUSD%2CGBP%2CTRY&base_currency=TRY"
        )
      );
      this.currencies.forEach(currency => {
        currency.value = 1/data.value.data[currency.code]
      });
      console.log('store çalıştı')
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrencyStore, import.meta.hot));
}