<script setup>
import { onMounted } from "vue";
import { keycloak } from "src/boot/keycloak";


onMounted(() => {
  // if (keycloak.authenticated && localStorage.getItem("pas_user_configurations")) {
  if (keycloak.authenticated) {
    window.location.href = "/";
  } else {
    localStorage.clear();
  }
});
const browser = { chrome: 108, firefox: 107, edge: 107 };
const onClickLogin = () => {
  keycloak
    .login({
      redirectUri: `${process.env.BASE_URL}/authentication/callback`,
      locale: "th",
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
  <q-page class="flex flex-center login-page">
    <q-card flat bordered class="login-card">
      <q-card-section>
        <div class="text-h6 text-center">HRM</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <q-btn unelevated class="full-width" color="primary" size="md" @click="onClickLogin">
          <!-- <q-icon left name="img:/images/pea_emblem.png" size="md" /> -->
          <div class="text-center">เข้าสู่ระบบด้วย PEA SSO</div>
        </q-btn>
      </q-card-section>
      <!-- <q-card-section class="text-font-primary text-center text-caption">
        พบปัญหาในการเข้าใช้ระบบโปรดติดต่อ
        <br />
        แผนกสารสนเทศและความปลอดภัยไซเบอร์ (10360-64)
      </q-card-section> -->
    </q-card>
    <div class="bg-grey-1 auth-footer q-mx-md text-caption">
      <div class="row text-center">
        <div class="col-12 text-black f-sarabun q-my-lg text-f-primary" style="margin: 5px 0">
          เบราว์เซอร์ที่รองรับ
          <q-icon name="lab la-chrome" size="2rem" /> : Chrome {{ browser.chrome }} ขึ้นไป
          <q-icon name="lab la-firefox" size="2rem" /> : Firefox {{ browser.firefox }} ขึ้นไป
          <q-icon name="lab la-edge" size="2rem" /> : Edge {{ browser.edge }} ขึ้นไป
        </div>
      </div>
    </div>
  </q-page>
</template>
