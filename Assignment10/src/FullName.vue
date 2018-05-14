<template lang="html">
  <div class="">
    <label>Name</label>
    <input :value="name" type="text" name="name" class="form-control" @input="nameChanged(true, $event)">
    <label>Surname</label>
    <input :value="surname" type="text" name="surname" class="form-control" @input="nameChanged(false, last)">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    nameChanged(isFirst, event){
      let name = '';
      if(isFirst){
        name = event.target.value + ' ' + this.name;
      }else {
        name = this.firsName + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0]
    },
    lastName() {
      return this.value.split(" ")[1]
    }
  }
}
</script>

<style lang="css">
</style>
