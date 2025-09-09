<script setup>
import { ref } from 'vue'
import { api } from "boot/axios";
import { useQuasar } from "quasar";

const employee_code = ref('')
const search = ref({})
const $q = useQuasar();

const emit = defineEmits(["click:search"])
const url = "https://servicehub.pea.co.th:8443"


const search_employee = async (params) => {
  $q.loading.show()
  const token = localStorage.getItem('token')
  await api.get(url + `/get-employee-detail-s?emp_id=${params}`, {
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
          message: `ไม่พบข้อมูลพนักงาน`,
          style: "width : 650px",
          class: "q-card--flat no-shadow",
        });
      } else {
        search.value = res.data
        emit("click:search", search.value)
      }

    }, (error) => {
      console.log(error);
    })
}
</script>



<template>
  <template>
    <q-form @submit.prevent="search_employee(employee_code)">
      <q-input v-model="employee_code" filled label="รหัสพนักงาน" mask="######" />
      <!-- <q-btn class="q-mt-sm" color="blue" label="ค้นหา" @click="search_employee(employee_code)" icon="person_search"
    @keyup.enter="search_employee(employee_code)" type="submit" /> -->

      <q-btn class="q-mt-sm" icon="person_search" color="blue" label="ค้นหา" type="submit" />
    </q-form>
  </template>
</template>
