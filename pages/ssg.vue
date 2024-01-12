<template>
    <div class="flex flex-col items-center justify-center gap-2">
        <h1 class="text-4xl my-2">Static Side Generation</h1>
        <div v-if="error" v-text="error"></div>
        <div v-else v-for="(user, index) in users" :key="index">
            <div class="flex flex-row items-center gap-2">
            <PrimeAvatar :image="photo.url" size="xlarge" shape="circle" />
            <h3>Name: {{ user.name }}</h3>
        </div>
        <h3>E-mail: {{ user.email }}</h3>
        <h3>Phone: {{ user.phone }}</h3>
        <h3>Website: {{ user.website }}</h3>
        <h3>Address: <br>
            {{ user.address.street }} <br>
            {{ user.address.suite }} <br>
            {{ user.address.city }} <br>
            {{ user.address.zipcode }} <br>
        </h3>
        </div>
    </div>
</template>

<script setup>
    const {data, error } = await useFetch('https://jsonplaceholder.typicode.com/users', {
        key: 'users',
        pick: ['name', 'email', 'address', 'phone', 'website'],
        transform: (users) => {
            return users.map(user => ({ name: user.name, email: user.email, address: user.address, phone: user.phone, website: user.website }))
        }


    })
    const {data: photo} = await useFetch('https://jsonplaceholder.typicode.com/photos/1', {
        key: 'photo',
        pick: ['url'],
    })
</script>

<style lang="scss" scoped>

</style>