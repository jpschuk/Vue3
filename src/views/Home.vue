<template>
  <div>
    <h1>Home</h1>
    <p>{{ userStore.userData?.email }}</p>
  </div>
  <ul>
    <li v-for="item in databaseStore.documents" :key="item.id">
      {{ item.id }} <br />
      {{ item.name }} <br />
      {{ item.short }}
    </li>
  </ul>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/dataBase";

const databaseStore = useDatabaseStore();
const userStore = useUserStore();

databaseStore.getUrls();
</script>
