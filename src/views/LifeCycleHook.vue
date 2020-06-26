<template>
  <div class="about">
    <div class="page-br">
      <span>좌표 (X:{{ pageX }} / Y:{{ pageY }})</span> | 
      <v-btn
        v-if="enableEvent"
        dark
        @click="removeEvent"
      >
        mousemove Event 강제 중지
      </v-btn>
    </div>
    <div class="page-br">
      <div>Price : {{ getPrice }}원</div>
      <v-btn dark @click="addNum">num 숫자 증가</v-btn> =>
      {{ num }}
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
  // (component) 컴포넌트 설정
  components: {},
  // (overide) mixins (overiding)
  mixins: [],
  // (reactive) 현재 페이지(컴포넌트)에서 사용할 reactive 변수(key:value)
  data() {
    return {
      num: 1,
      isShow: false,
      pageX: 0,
      pageY: 0,
      enableEvent: true,
    }
  },
  // (reactive) reactive 변수의 값으로 페이지(컴포넌트)내에서 변경될 값에 대한 함수 정의
  computed: {
    getPrice() {
      console.log('\n[computed 실행] 페이지(or컴포넌트) 진입 시 / Price 재설정 ')
      return this.num * 10000
    },
  },
  // (reactive) reactive 변수값(기타 router, store 등도 감시 가능)의 변경을 감지 (api 호출 시)
  // ex) pagination 값을 1-2로 변경 시 2페이지의 리스트를 api에서 호출하여 리스트 재설정
  watch: {
    num() {
      console.log('\n[watch 실행] num 변경 시 watchMethod method 호출')
      this.watchMethod()
    },
  },
  // (life-cycle) 현재 vue파일의 reactive 변수에 접근 가능한 단계
  created() {
    console.log('\n[created 실행] 페이지(or컴포넌트) 진입 시 - 1회만 실행')
  },
  // (life-cycle) 현재 vue파일의 rhtml이 모두 렌더링되어 dom node에 접근 가능한 단계
  // ex) document.querySelector('.about')
  mounted() {
    this.addEvent()
    console.log(
      '\n[mounted 실행] 페이지(or컴포넌트) 진입 후 html이 모두 렌더링 된 후 - 1회만 실행',
    )
  },
  updated() {
    console.log('\n[updated 실행] 페이지(or컴포넌트) 후 tag/text node가 변경될 때마다 ')
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.getMouseLocation)
    console.log('\n[beforeDestroy 실행] 페이지(route) 변경 시 / 강제 종료 시')
  },
  methods: {
    addNum() {
      this.num++
    },
    toggleContent() {
      this.isShow = !this.isShow
    },
    watchMethod() {
      console.log('\n[watchMethod] num 변경에 따른 api 호출')
    },
    getMouseLocation(e) {
      this.pageX = e.clientX
      this.pageY = e.clientY
      console.log(e)
    },
    onclickAddEvent() {
      this.addEvent()
    },
    addEvent() {
      window.addEventListener('mousemove', this.getMouseLocation)
    },
    removeEvent() {
      this.enableEvent = true
      this.$destroy()
    },
  },
}
</script>
