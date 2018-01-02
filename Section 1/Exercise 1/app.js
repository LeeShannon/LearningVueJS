new Vue({
  el: '#exercise',
  data: {
    name: 'Lee',
    age: '23',
    link: 'https://i.pinimg.com/originals/59/c4/15/59c415ed4b254bdb922b3741439aafc0.jpg'
  },
  methods: {
    ageByThree: function() {
      return this.age * 3;
    },
    randomNum: function() {
      return Math.random();
    },
    input: function(event){
    	this.name = event.target.value
    }
  }
});
