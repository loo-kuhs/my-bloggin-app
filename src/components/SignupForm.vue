<script lang="ts" setup>
import { computed, ref } from "@vue/reactivity";
import { validate, length, required } from "../validation";
import { NewUser } from "../users";
import { useUsers } from "../stores/users";
import { useModal } from "../composables/modal";
import FormInput from "./FormInput.vue";

const username = ref("");
const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});

const password = ref("");
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

const userStore = useUsers();
const modal = useModal();

async function handleSubmit() {
  if (isInvalid.value) return;

  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    await userStore.createUser(newUser);
  } catch (e) {}

  modal.hideModal();
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput
      name="Username"
      v-model="username"
      :status="usernameStatus"
      type="text"
    />
    <FormInput
      name="Password"
      v-model="password"
      :status="passwordStatus"
      type="password"
    />
    <button class="button" :disabled="isInvalid">Submit</button>
  </form>
</template>

<style scoped>
.form {
  background: white;
  padding: 1.875rem;
  margin-top: 3.125rem;
}
</style>