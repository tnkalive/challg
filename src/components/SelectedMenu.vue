<script setup>

</script>

<template>
  <q-card flat bordered dense>
    <q-card-section class="q-pa-sm bg-info text-white">
      <div><q-icon name="engineering" size="32px" />ปรับระดับ</div>
    </q-card-section>
    <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-sm-6 col-md-4">
          <q-btn-dropdown outline class="full-width text-h6" color="grey-8" label="บรรจุพนักงาน">
            <q-list>
              <q-item v-close-popup to="/managerank/employee-assign/newem" clickable>
                <q-item-section>
                  <q-item-label>บรรจุพนักงานใหม่</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup to="/managerank/employee-assign/newst" clickable>
                <q-item-section>
                  <q-item-label>บรรจุลูกจ้างผ่านการสอบคัดเลือก</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-btn to="/managerank/up-degree" outline icon-right="" class="full-width text-h6" color="grey-8">
            <div class="relative">
              <div class="text-center">
                ปรับวุฒิพนักงาน <br />
              </div>
              <q-icon name="las la-external-link-alt"
                style="position: absolute; right: 5px; top: 50%; transform: translate(0, -50%)"></q-icon>
            </div>
          </q-btn>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-btn-dropdown outline class="full-width text-h6" color="grey-8" label="เลื่อนระดับพนักงานแบบไม่นับอัตรา">
            <q-list>
              <q-item v-close-popup to="/managerank/no-count/academician" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับนักวิชาการ (ระดับ 5 => 6)</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup to="/managerank/no-count/technician3to4" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับพนักงานวิชาชีพ (ระดับ 3 => 4)</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup to="/managerank/no-count/technician" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับพนักงานวิชาชีพ (ระดับ 4 => 5)</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-btn-dropdown outline class="full-width text-h6" color="grey-8" label="เลื่อนระดับพนักงานแรกบรรจุ">
            <q-list>
              <q-item v-close-popup to="/managerank/first-entry/acdemician" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับนักวิชาการ (ระดับ 4 => 5)</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup to="/managerank/first-entry/technician2" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับพนักงานวิชาชีพ (ระดับ 2 => 3)</q-item-label>
                </q-item-section>
              </q-item>

              <q-item v-close-popup to="/managerank/first-entry/technician" clickable>
                <q-item-section>
                  <q-item-label>เลื่อนระดับพนักงานวิชาชีพ (ระดับ 3 => 4)</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
