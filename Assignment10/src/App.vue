<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Exercise 1</h1>
                    <form>
                      <div class="form-group">


                          <app-full-name v-model="fullName"></app-full-name>

                          <label>E-mail</label>
                          <input v-model="email" type="email" name="email" class="form-control">
                          <label>Password</label>
                          <input v-model="password" type="password" name="password" class="form-control">
                          <label>Store Data?</label>
                          <input v-model="storeData" type="radio" value="Yes"> Yes
                          <input v-model="storeData" type="radio" value="No"> No



                      </div>
                      <button @click.prevent="submitted">Submit</button>
                  </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmit">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data - Exercise 2</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }} </p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './FullName.vue'
    export default {
      data: function(){
        return {
          fullName: 'Lee Georges',
          email: '',
          password: '',
          storeData: 'Yes',
          isSubmit: false
        }
      },
      methods: {
        submitted(){
          this.isSubmit = true
        }
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
