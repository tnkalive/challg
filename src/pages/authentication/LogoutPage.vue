<script setup>
import { onMounted } from "vue";
import useSystemUser from "src/composables/useSystemUser";
const { logout } = useSystemUser();
onMounted(() => {
  logout();
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
