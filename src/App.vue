<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view :to="$router.fullpath" />
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {
    Navigation: () =>
      import('@/components/Nav.vue')
  }
}
</script>
<style>
.about {
  margin-top: 50px;
}
.page-br {
  padding: 30px 10px 30px 10px;
}
</style>
