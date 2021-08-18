<template>
  <div :class="$style.box">
    <h1>index page</h1>
  </div>
</template>

<script lang="ts">
export default {
  created() {
    console.log(222, JSON.stringify(this.$style))
  }
}
</script>
<style module>
  .box {
    background: red;
  }
</style>
