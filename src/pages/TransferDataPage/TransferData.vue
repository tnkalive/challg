<script setup>

const column = [
  // {
  //   name: 'index',
  //   label: '#',
  //   field: 'index'
  // },
  { name: 'transaction', align: 'center', label: 'transaction ใหม่', field: 'transaction' },
  { name: 'สถานะการส่ง', align: 'center', label: 'รหัสค่าใช้จ่ายที่ยกเว้น', field: 'otc_number' },
  { name: 'สถานะการแก้ไข', align: 'center', label: 'สถานะการแก้ไข', field: 'otc_number' },
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
        <q-table style="height: 400px" flat bordered title="สถานการส่งข้อมูล" :rows="rows" :columns="columns"
          row-key="index" virtual-scroll v-model:pagination="pagination" :rows-per-page-options="[0]" />
      </q-card>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>
