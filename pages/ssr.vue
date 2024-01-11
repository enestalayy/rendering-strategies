<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-4xl my-2">Server Side Rendering</h1>
    <ul v-for="post in posts" :key="post.id" class="w-1/2 ">
      <li class="w-full border-2 rounded my-2 items-center justify-center p-2">
        <h3 class="capitalize text-xl">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <div class="mt-2">
          <strong>Author:</strong> {{ getUser(post.userId).name }}
        </div>
        <div class="mt-2">
          <strong>Comments</strong>
          <ul>
            <li v-for="comment in getComments(post.id)" :key="comment.id">{{ comment.body }}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const users = ref([]);
const comments = ref([]);

onMounted(async () => {
  [posts.value, users.value, comments.value] = await Promise.all([
    $fetch('https://jsonplaceholder.typicode.com/posts'),
    $fetch('https://jsonplaceholder.typicode.com/users'),
    $fetch('https://jsonplaceholder.typicode.com/comments')
  ]);
});

const getUser = (userId) => users.value.find(user => user.id === userId);
const getComments = (postId) => comments.value.filter(comment => comment.postId === postId);
</script>

<style scoped>

</style>
