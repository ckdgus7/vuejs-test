<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <router-link to="/">
          LifeCycle Hook
        </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="ml-5">
        <router-link to="/dom-render">
          Dom Render
        </router-link>
      </v-toolbar-title>
      <v-toolbar-title class="ml-5">
        <router-link to="/vshow-vif-keepalive">
          v-if(basic/keep-alive) and v-show
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view :to="$router.fullpath" />
    </v-main>
  </v-app>
</template>
<style>
.about {
  margin-top: 50px;
}
.page-br {
  padding: 30px 10px 30px 10px;
}
</style>
