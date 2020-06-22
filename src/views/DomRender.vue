<template>
  <div class="about">
    <div class="page-br">
      <v-btn dark @click="addNum">num 숫자 증가</v-btn>
      =>
      {{ newNum }}
    </div>
    <div class="page-br">
      <v-btn class="page-br" dark @click="toggleVShowContent">VShow show/hide</v-btn>|
      <v-btn class="page-br" dark @click="toggleVIfContent">VIf Non Catch show/hide</v-btn>|
      <v-btn class="page-br" dark @click="toggleVIfKeepAliveContent">VIf Catch show/hide</v-btn>
    </div>
    <Header />
    <Content :content-props="num" />
    <Footer />
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
    Header: () => import("@/components/Header.vue"),
    Content: () => import("@/components/Content.vue"),
    Footer: () => import("@/components/Footer.vue"),
    VShow: () => import("@/components/VShow.vue"),
    VIf: () => import("@/components/VIf.vue"),
    VIfKeepAlive: () => import("@/components/VIfKeepAlive.vue")
  },
  data() {
    return {
      num: 1,
      isVShow: false,
      isVIf: false,
      isVIfKeepAlive: false
    };
  },
  computed: {
    newNum() {
      return this.num;
    }
  },
  created() {
    console.log("[Parent - created 최초 실행] 페이지(or컴포넌트) 진입 시 ");
  },
  mounted() {
    console.log(
      "[Parent - mounted 최초 실행] 페이지(or컴포넌트) 진입 후 html이 모두 렌더링 된 후 "
    );
  },
  updated() {
    console.log(
      "[Parent - updated 실행] 페이지(or컴포넌트) 후 html이 변경될 때마다 "
    );
  },
  beforeDestroy() {
    console.log("[Parent - beforeDestroy 실행] 페이지(route) 변경 시");
  },
  methods: {
    addNum() {
      this.num++;
    },
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
