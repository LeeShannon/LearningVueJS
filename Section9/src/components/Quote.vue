<template lang="html">
  <div class="">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- slot style applies on the child -->
<style lang="css" scoped>
  div{
    border: 1px solid #ccc;
    box-shadow:  1px 1px 2px black;
    margin: 30px auto;
    padding: 30px;
    text-align: center;
  }

  h2{
    color: red;
  }
</style>
