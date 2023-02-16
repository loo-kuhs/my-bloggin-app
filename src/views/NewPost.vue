<script lang="ts" setup>
  import PostWriter from '../components/PostWriter.vue'
  import { DateTime } from 'luxon'
  import { Post, TimelinePost } from '../posts'
  import { usePosts } from '../stores/posts'
  import { useRouter } from 'vue-router'
  import { useUsers } from '../stores/users'

  const usersStore = useUsers()
  const router = useRouter()
  const postsStore = usePosts()

  if (!usersStore.currentUserId) {
    throw Error('User was not logged in.')
  }

  const post: TimelinePost = {
    id: '-1',
    title: 'Title',
    authorId: usersStore.currentUserId,
    created: DateTime.now(),
    markdown: '## Title',
    html: '<h2>Title</h2>',
  }

  async function handleSubmit(post: Post) {
    await postsStore.createPost(post)
    router.push('/')
  }
</script>

<template>
  New Post!
  <PostWriter :post="post" @submit="handleSubmit" />
</template>
