<template lang="html">
  <div class="">
    <h3>New</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      counter: 0
    };
  },
  deactivated(){
    console.log('Deactivated!');
  },
  activated(){
    console.log('Activated');
  }
}
</script>

<style lang="css">
</style>
