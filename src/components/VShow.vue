<template>
  <div>
    <div>VShow Component</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Children - VShow 컴포넌트 created 실행')
  },
  mounted() {
    console.log('Children - VShow 컴포넌트 mounted 실행')
  },
  beforeDestory() {
    console.log('Children - VShow 컴포넌트 beforeDestory 실행')
  },
}
</script>
