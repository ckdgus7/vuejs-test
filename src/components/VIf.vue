<template>
  <div>
    <div>VIf Component - (cache: {{ isKeepAlive }})</div>
  </div>
</template>

<script>
export default {
  props: {
    isKeepAlive: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log("Children - VIf non catch 컴포넌트 created 실행");
  },
  mounted() {
    console.log("Children - VIf non catch 컴포넌트 mounted 실행");
  },
  beforeDestory() {
    console.log("Children - VIf non catch 컴포넌트 beforeDestory 실행");
  }
};
</script>
