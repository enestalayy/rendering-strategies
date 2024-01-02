<template>
    <div class="w-[100vw] min-h-[100vh]">
        <header class="w-full mb-3">
            <NavBar />
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
* {
    box-sizing: border-box;
}
</style>