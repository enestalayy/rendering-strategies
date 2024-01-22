<script setup>
const currencyStore = useCurrencyStore()
const { currencies } = storeToRefs(currencyStore)
const fetchEmbeddedContent = async () => {
    try {
        const response = await fetch('https://rendering-strategies-nuxt.vercel.app/isr');
        const htmlContent = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const liElements = doc.querySelectorAll('ul li');
        const liContents = Array.from(liElements).map(li => li.textContent.trim());
        currencies.value.forEach((currency, index) => {
            const currencyValue = parseFloat(liContents[index].split(':')[1]);
            currency.value = isNaN(currencyValue) ? 0 : currencyValue;
        });
    } catch (error) {
        console.error('Hata:', error);
    }
};
fetchEmbeddedContent();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
  <!-- <embed src="https://rendering-strategies-nuxt.vercel.app/isr" width="0" height="0"> -->
    <div>
  </div>
    <ul v-for="(item, index) in currencies" :key="index">
        <li >{{item.code}}: {{item.value.toFixed(4) + item.symbol}}</li>
      </ul>

    <h1 class="text-xl my-5 w-4/5 text-center">
      This website is built with its own rendering method for each page in terms of rendering strategies. You can explore my Medium article related to this topic for further insights.
    </h1>
    <div class="sk-ww-medium-post w-1/2 bg-transparent" data-embed-id="25347316"></div>
  </div>
</template>


<style>
pre {
    display: none;
}
.sk-ww-medium-post strong{
    color: rgb(85, 85, 85);
}
.sk-ww-medium-post li {
    color: rgb(85, 85, 85);
}
</style>
