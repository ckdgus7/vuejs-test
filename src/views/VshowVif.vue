<template>
  <div class="about">
    <div class="page-br">
      <v-btn class="page-br" dark @click="toggleVShowContent">VShow show/hide</v-btn> |
      <v-btn class="page-br" dark @click="toggleVIfContent">VIf Non Catch show/hide</v-btn> |
      <v-btn class="page-br" dark @click="toggleVIfKeepAliveContent">VIf Catch show/hide</v-btn>
    </div>
    <VShow v-show="isVShow" />
    <VIf v-if="isVIf" />
    <keep-alive>
      <VIfKeepAlive v-if="isVIfKeepAlive" :is-keep-alive="true" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {
    VShow: () => import("@/components/VShow.vue"),
    VIf: () => import("@/components/VIf.vue"),
    VIfKeepAlive: () => import("@/components/VIfKeepAlive.vue")
  },
  data() {
    return {
      isVShow: false,
      isVIf: false,
      isVIfKeepAlive: false
    };
  },
  created() {
    console.log("[Parent - created 최초 실행] 페이지(or컴포넌트) 진입 시 ");
  },
  mounted() {
    console.log(
      "[Parent - mounted 최초 실행] 페이지(or컴포넌트) 진입 후 html이 모두 렌더링 된 후 "
    );
  },
  methods: {
    toggleVShowContent() {
      this.isVShow = !this.isVShow;
    },
    toggleVIfContent() {
      this.isVIf = !this.isVIf;
    },
    toggleVIfKeepAliveContent() {
      this.isVIfKeepAlive = !this.isVIfKeepAlive;
    }
  }
};
</script>
