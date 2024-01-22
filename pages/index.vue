<script setup>
const getCurrencies = async () => {
  const {data:currencies} = await useFetch('https://rendering-strategies-nuxt.vercel.app/isr/_payload.json') 
  console.log(currencies.value[4])
}
getCurrencies()

const fetchCurrency = async () => {
      const { data } = await useFetch('https://rendering-strategies-nuxt.vercel.app/isr')
      console.log(data)
    }
    
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <button @click="fetchCurrency()">GET ISR</button>
    <div v-for="item in currencies" :key="item.id">
      {{ console.log(item) }}
    </div>

    <h1 class="text-xl my-5 w-4/5 text-center">
      This website is built with its own rendering method for each page in terms of rendering strategies. You can explore my Medium article related to this topic for further insights.
    </h1>
    <div class="sk-ww-medium-post w-1/2 bg-transparent" data-embed-id="25347316"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/medium-post/widget.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
};
</script>

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
