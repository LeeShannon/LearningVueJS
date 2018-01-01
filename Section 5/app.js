// variable for the vue instance
var vm1 = new Vue({
	el: '#app1',
  data:{
  	title: 'The VueJS Instance',
    showParagraph: false
  },
  methods:{
  	show: function(){
    	this.showParagraph = true;
      this.updateTitle('The VueJS instance (Updated)');
    },
    updateTile: function(title){
    	this.title = title;
    }
  },
  computed: {
  	lowercaseTitle: function(){
    	return this.title.toLowerCase();
    }
  },
  watch: {
  	title: function(value){
    	alert('Title changed, new value: ' + value);
    }
  }
});

// access the instance from outside with normal javascript
setTimeout(function() {
  vm1.title = 'Changed by Timer';
}, 3000);

// a vue second instance
var vm2 = new Vue({
  el: '#app2',
  data:{
    title: 'The second Instance'
  },
  methods: {
    onChange: function(){
      // accessing the title in the first vue instance via the variable
      vm1.title = 'Change!';
    }
  }
});
