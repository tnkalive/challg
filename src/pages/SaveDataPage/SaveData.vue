<script setup>
import { ref, onMounted } from 'vue'
import SearchOT from 'src/components/SearchOT.vue'
import { useQuasar } from "quasar";

const $q = useQuasar();
const exempted_expense = ref()
const ot_number_data = ref()



const get_exempted_expense = () => {

}



onMounted(async () => {
  await get_exempted_expense()
})

const onClickSearchOt = async (response) => {
  $q.loading.show()
  ot_number_data.value = response
  $q.loading.hide()
}


const save_data = async () => {
  $q.loading.show()
  // your save logic here
  $q.loading.hide()
}

const columns = [
  // {
  //   name: 'index',
  //   label: '#',
  //   field: 'index'
  // },
  { name: 'หมายเลข OTC', align: 'center', label: 'หมายเลข OTC', field: 'otc_number', },
  { name: 'รหัสค่าใช้จ่ายที่ยกเว้น', align: 'center', label: 'รหัสค่าใช้จ่ายที่ยกเว้น', field: 'exempted_expense', },
  { name: 'รายละเอียดประเภทค่าใช้จ่าย', align: 'center', label: 'รายละเอียดประเภทค่าใช้จ่าย', field: 'otc_number', },
  { name: 'สถานะ', align: 'center', label: 'status', field: 'สถานะ', },
]

const rows = [
  {
    otc_number: 'OTCXXXXXX',
    exempted_expense: 159,
    exempted_expense_types: 6.0,
    status: 6.0,
  }
]

</script>


<template>
  <div class="row justify-center q-col-gutter-md q-mt-sm">
    <div class="col-8">
      <q-card flat bordered dense>
        <q-card-section class="q-pa-sm bg-info text-white">
          <q-icon name="engineering" size="32px" />บันทึกข้อมูล OTC
        </q-card-section>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 col-md-6">
              <SearchOT @click:search="onClickSearchOt" />
            </div>
          </div>
        </q-card-section>
        <q-form ref="formRef" greedy>
          <q-card-section class="row q-col-gutter-md">
            <div class="col-12 col-sm-6 col-md-4">
              <q-input v-model="ot_number_data" label="หมายเลขงาน" readonly />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <q-input v-model="ot_number_data" label="หมายเลขงาน" readonly />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <q-select v-model="exempted_expense" label="รหัสค่าใช้จ่าย" readonly />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <q-input v-model="exempted_expense" label="คำอธิบาย" readonly />
            </div>
          </q-card-section>
          <div class="col-12 col-sm-6 col-md-10">
            <!-- <q-btn size="md" color="blue" label="ตัวอย่าง" icon="preview" @click="preview" push /> -->
            <q-btn class="q-ml-sm" size="md" color="green" label="บันทึกข้อมูล" icon="save" push @click="save_data" />
          </div>
        </q-form>
      </q-card>
      <q-card flat bordered dense>
        <q-table style="height: 400px" flat bordered title="ตารางข้อมูลค่าใช้จ่าย" :rows="rows" :columns="columns"
          row-key="index" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]" />
      </q-card>
    </div>
  </div>
</template>
