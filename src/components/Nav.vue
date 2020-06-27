<template>
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
    <v-toolbar-title class="ml-5">
      <router-link to="/froala-editor">
        froala Editor
      </router-link>
    </v-toolbar-title>
  </v-app-bar>
</template>
