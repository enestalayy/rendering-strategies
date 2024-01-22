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
    
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrencyStore, import.meta.hot));
}