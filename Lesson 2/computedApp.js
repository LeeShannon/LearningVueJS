new Vue({
  el: '#computedApp',
  data: {
    counter: 0
  },
  // computed notes:
  // can be used like a data object.
  // Results are cached, does not need to run again
  computed: {
    output: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  },
  methods: {
    result: function() {
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
    }
  }
});
