<template>
    <div class="flex flex-col items-center justify-center gap-2">
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
</template>

<script setup>
    const {data: user, pending, error, status, execute } = await useFetch('https://jsonplaceholder.typicode.com/users/1', {
        key: 'user',
        pick: ['name', 'email', 'address', 'phone', 'website'],

    })
    const {data: photo} = await useFetch('https://jsonplaceholder.typicode.com/photos/1', {
        key: 'photo',
        pick: ['url'],
    })
</script>

<style lang="scss" scoped>

</style>