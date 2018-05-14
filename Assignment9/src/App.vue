<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="isSelected = 'appBlue'"  class="btn btn-primary">Load Blue Template</button>
                <button @click="isSelected = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="isSelected = 'appRed'"  class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="isSelected"><p> This is the component app</p></component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data: function(){
        return {
          isSelected: 'appBlue'
        };
      },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
