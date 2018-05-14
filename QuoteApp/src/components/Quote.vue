<template lang="html">
  <div class="row col-sm-6 cold-md-4 col-lg-3">
    <div class="panel-body quote">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quotes']
  }
</script>

<style lang="css">
  .panel-body{
    font-family: 'Arizonia', cursive;
    font-size: 20px;
    color: #6e6e6e;
  }

  .quote{
    cursor: pointer;
  }

  .quote:hover{
    background-color: #ffe2e2;
  }
</style>
