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
    async fetchEmbeddedContent() {
      try {
          const response = await fetch('https://rendering-strategies-nuxt.vercel.app/isr');
          const htmlContent = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlContent, 'text/html');
          const liElements = doc.querySelectorAll('ul li');
          const liContents = Array.from(liElements).map(li => li.textContent.trim());
          this.currencies.value.forEach((currency, index) => {
              const currencyValue = parseFloat(liContents[index].split(':')[1]);
              currency.value = isNaN(currencyValue) ? 0 : currencyValue;
          });
      } catch (error) {
          console.error('Hata:', error);
      }
    },
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrencyStore, import.meta.hot));
}