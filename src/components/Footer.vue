<template>
  <div class="page-br">
    <div>Footer Component</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('Children - Footer 컴포넌트 created 실행')
  },
  mounted() {
    console.log('Children - Footer 컴포넌트 mounted 실행')
  },
  beforeDestory() {
    console.log('Children - Footer 컴포넌트 beforeDestory 실행')
  },
}
</script>
