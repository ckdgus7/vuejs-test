<template>
  <div class="about">
    <froala v-model="content"></froala>
    <froalaView v-model="content"></froalaView>
  </div>
</template>

<script>
export default {
  data () {
    content: '<p>test</p><p>test입니다.</p>'
  }
}
</script>