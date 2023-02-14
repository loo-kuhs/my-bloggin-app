<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { usePosts } from '../stores/posts'
  import PostWriter from '../components/PostWriter.vue'

  const route = useRoute()
  const postStore = usePosts()

  const id = route.params.id as string
  const post = postStore.all.get(id)

  if (!post) {
    throw Error(`Post with id ${id} not found`)
  }
</script>
<template>
  Edit Post
  <PostWriter :post="post" />
</template>
