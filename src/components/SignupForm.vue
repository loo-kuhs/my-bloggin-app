<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import { validate, length, required } from "../validation";
import FormInput from "./FormInput.vue";

const username = ref("");
const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});

const password = ref("");
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});
</script>

<template>
  <form class="form">
    <FormInput name="Username" v-model="username" :status="usernameStatus" />
    <FormInput name="Password" v-model="password" :status="passwordStatus" />
  </form>
</template>

<style scoped>
.form {
  background: white;
  padding: 1.875rem;
  margin-top: 3.125rem;
}
</style>