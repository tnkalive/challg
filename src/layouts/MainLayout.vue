<script setup>
import { ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
// import { useQuasar } from "quasar";

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev',
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework',
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev',
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev',
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev',
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev',
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev',
//   },
// ]

const drawerToggle = ref(false);
</script>




<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawerToggle = !drawerToggle" />

        <q-toolbar-title>
          HRM
        </q-toolbar-title>
        <q-btn flat round dense icon="logout" class="q-mr-xs" @click="logout_button" />

      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerToggle" overlay bordered no-swipe-open no-swipe-close :width="350" behavior="mobile">
      <q-list>
        <q-item header to="/savedata">
          <q-icon name="home" size="32px" />
          <q-item-section class="q-mx-sm">บันทึกข้อมูลค่าใช้จ่าย</q-item-section>
        </q-item>
        <q-item header to="/managedata">
          <q-icon name="home" size="32px" />
          <q-item-section class="q-mx-sm">จัดการข้อมูล</q-item-section>
        </q-item>
        <q-item header to="/managerole">
          <q-icon name="view_list" size="32px" />
          <q-item-section class="q-mx-sm">หน้าจัดการสิทธิผู้ดูแลระบบ</q-item-section>
        </q-item>
        <q-item header to="/transferdata">
          <q-icon name="person_search" size="32px" />
          <q-item-section class="q-mx-sm">ส่งข้อมูล</q-item-section>
        </q-item>
        <q-item header to="/resulttransfer">
          <q-icon name="groups" size="32px" />
          <q-item-section class="q-mx-sm">สถานะการส่งข้อมูล</q-item-section>
        </q-item>
        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md" :class="{ space: $q.screen.gt.md }">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
