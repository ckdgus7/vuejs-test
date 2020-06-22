<template>
  <div class="about">
    <div class="page-br">
      <v-btn dark @click="addNum">num 숫자 증가</v-btn> =>
      {{ newNum }}
    </div>
    <div class="page-br">
      <v-btn dark @click="toggleContent">아래 내용 show/hide</v-btn>
    </div>
    <div v-if="isShow" class="page-br">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mixins: [],
  data() {
    return {
      num: 1,
      isShow: false,
    }
  },
  computed: {
    newNum() {
      console.log('[computed 실행] 페이지(or컴포넌트) 진입 시 / num 변경 시 ')
      return this.num
    },
  },
  watch: {
    num() {
      console.log('[watch 실행] num 변경 시 ')
    },
  },
  created() {
    console.log('[created 최초 실행] 페이지(or컴포넌트) 진입 시 ')
  },
  mounted() {
    console.log(
      '[mounted 최초 실행] 페이지(or컴포넌트) 진입 후 html이 모두 렌더링 된 후 ',
    )
  },
  updated() {
    console.log('[updated 실행] 페이지(or컴포넌트) 후 html이 변경될 때마다 ')
  },
  beforeDestroy() {
    console.log('[beforeDestroy 실행] 페이지(route) 변경 시')
  },
  methods: {
    addNum() {
      this.num++
    },
    toggleContent() {
      this.isShow = !this.isShow
    },
  },
}
</script>
