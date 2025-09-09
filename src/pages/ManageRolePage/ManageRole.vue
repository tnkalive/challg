<script setup>
import { ref } from 'vue'
import SearchEmp from 'src/components/searchEmployee/SearchEmployee.vue'
</script>


<template>
  <div class="row justify-center q-col-gutter-md q-mt-sm">
    <div class="col-8">
      <q-card flat bordered dense>
        <q-card-section class="q-pa-sm bg-info text-white">
          <search-emp />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>



<style scoped></style>
