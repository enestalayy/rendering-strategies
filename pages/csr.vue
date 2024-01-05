<template>
  <div class="flex flex-col items-center justify-center text-white">
    <div class="flex-auto">
      {{ albumId }}
      <label for="minmax-buttons" class="font-bold block mb-1 ">
        Select an Album up to 100
      </label>
      <PrimeInputNumber
        v-model="albumId"
        inputId="minmax-buttons"
        mode="decimal"
        showButtons
        class="text-red-600 mb-3"
        :min="1"
        :max="100"
      />
    </div>
    <PrimeGalleria
        :value="album"
        :responsiveOptions="responsiveOptions"
        :numVisible="4"
        containerStyle="max-width: 50%" :circular="true" :showItemNavigators="true"
        class="w-full h-full bg-green-500"
    >
      <template #item="photo">
        <div class="p-grid">
          <img :src="photo.item.url" :alt="photo.title" style="width: 100%" />
        </div>
      </template>
      <template #thumbnail="photo">
        <div class="p-grid">
          <img :src="photo.item.thumbnailUrl" :alt="photo.title" style="width: 100%" />
        </div>
      </template>
    </PrimeGalleria>
  </div>
</template>

<script setup>
const albumId = ref(1);
const nuxtApp = useNuxtApp()
  const { data: album } = await useLazyFetch(`https://jsonplaceholder.typicode.com/photos`, {
    key: 'album',
    server: false,
    query: {
      albumId
    },
    onRequest() {
      const cachedAlbum = nuxtApp.payload.data[`album-${albumId.value}`] || nuxtApp.static.data[`album-${albumId.value}`];
      if (cachedAlbum) {
        return Promise.resolve({ useCache: true, data: cachedAlbum });
      }
      return Promise.resolve({ useCache: false });
    },
    onResponse({ response }) {
      localStorage.setItem('token', response._data.token)
      const { data:albums } = useNuxtData(`album-${albumId.value}`)
      !albums.value && (albums.value = response._data)
      console.log(useNuxtData())
    },
  })

const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<style>
.p-inputnumber-button-up,
.p-inputnumber-button-icon,
.p-inputnumber-button-down,
.p-galleria-thumbnail-prev,
.p-galleria-thumbnail-next,
.p-galleria-item-prev-icon,
.p-galleria-item-next-icon {
  color: white;
  background-color: #02b82c;
}
</style>
