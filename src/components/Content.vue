<template>
  <div class="page-br">
    <div>Content Component - Props : {{ contentProps }}</div>
  </div>
</template>

<script>
export default {
  props: {
    contentProps: {
      type: Number,
      default: 0
    }
  },
  watch: {
    contentProps(newVal, oldVal) {
      console.log(
        `Children - Content 컴포넌트 contentProps가 ${oldVal}이 ${newVal}로 변경됨`
      );
    }
  },
  created() {
    console.log("Children - Content 컴포넌트 created 실행");
  },
  mounted() {
    console.log("Children - Content 컴포넌트 mounted 실행");
  },
  beforeDestory() {
    console.log("Children - Content 컴포넌트 beforeDestory 실행");
  }
};
</script>
