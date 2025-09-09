<script setup>
import { onMounted } from "vue";
import useSystemUser from "src/composables/useSystemUser";
import { useRouter } from "vue-router";
// import { keycloak } from "src/boot/keycloak";

const router = useRouter();
const { login } = useSystemUser();

onMounted(async () => {
  // if (keycloak.idTokenParsed.hr_dept_sap == '1464' || keycloak.idTokenParsed.hr_employee_id == '510800') {
  //   await login(keycloak.idToken);
  // } else {
  //   alert('คุณไม่มีสิทธิ์เข้าใช้งานระบบ');
  //   await logout()
  // }

  await login();
  router.push("/");
});
</script>

<template>
  <q-page class="flex flex-center">
    <div class="row q-col-gutter-md justify-center">
      <div clas="col-12">
        <q-spinner-oval indeterminate size="100px" :thickness="0.22" color="secondary" class="q-ma-md" />
      </div>
      <div class="col-12 text-center">
        <div class="text-h6">
          ระบบกำลังตรวจสอบข้อมูลผู้ใช้งาน <br />
          กรุณารอสักครู่
        </div>
      </div>
    </div>
  </q-page>
</template>
