new Vue({
  el: '#exercise',
  data: {
    progressBar: {
      width: '0px',
      backgroundColor: 'pink'
    }
  },
  methods: {
    startEffect: function() {
      var myVar = setInterval(function() {
        var x = document.getElementById("effect");
        x.classList.toggle("highlight");
        x.classList.toggle("shrink");

      }, 3000);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
      	width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});
