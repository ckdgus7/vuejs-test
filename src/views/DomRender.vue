<template>
  <div class="about">
    <div class="page-br">
      <v-btn dark @click="addNum">num 숫자 증가</v-btn>
      => {{ newNum }}
    </div>
    <Header />
    <Content :content-props="num" />
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header.vue"),
    Content: () => import("@/components/Content.vue"),
    Footer: () => import("@/components/Footer.vue"),
  },
  data() {
    return {
      num: 1,
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
  }
};
</script>
