<script lang="ts" setup>
  import PostWriter from '../components/PostWriter.vue'
  import { Post } from '../posts'
  import { router } from '../router'
  import { usePosts } from '../stores/posts'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const postsStore = usePosts()

  const id = route.params.id as string
  const post = postsStore.all.get(id)

  if (!post) {
    throw Error(`Post with id ${id} not found`)
  }

  async function handleSubmit(post: Post) {
    await postsStore.createPost(post)
    router.push('/')
  }
</script>
<template>
  Edit Post
  <PostWriter :post="post" @submit="handleSubmit" />
</template>
