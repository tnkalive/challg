<script setup>

import { ref } from 'vue'
import { api } from "boot/axios";
import { useQuasar } from "quasar";


const ot_number = ref()

const search = ref({})
const $q = useQuasar();

const emit = defineEmits(["click:search"])
// const url = process.env.LOCAL_BACKEND_URL
const url = "https://servicehub.pea.co.th:8443"

const search_ot = async (params) => {
  $q.loading.show()
  const token = localStorage.getItem('token')
  await api.get(url + `/get-request-ot-detail?requestid=${params}`, {
    headers: {
      'apikey': process.env.API_KEY,
    }
  })
    .then(async (res) => {
      if (res.status == 204) {
        $q.loading.hide()
        $q.dialog({
          color: "red-8",
          title: "แจ้งเตือนจากระบบ",
          message: `ไม่พบข้อมูล`,
          style: "width : 650px",
          class: "q-card--flat no-shadow",
        });
      } else {
        search.value = res.data
        console.log(search.value);
        emit("click:search", search.value)
      }

    }, (error) => {
      console.log(error);
    })
}


</script>


<template>
  <q-form @submit.prevent="search_ot(ot_number)">
    <q-input v-model="employee_code" filled label="หมายเลข OT" />
    <q-btn class="q-mt-sm" icon="search" color="blue" label="ค้นหา" type="submit" />
  </q-form>
</template>



<style scoped></style>
