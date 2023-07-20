<script setup>
import NavLogo from './components/Nav/NavLogo.vue';
import HeaderWeather from './components/HeaderWeather/HeaderWeather.vue';
import Weather from './components/Weather/Weather.vue'
import Widget from './components/Widget/Widget.vue';
import TestRun from './components/TestRun/TestRun.vue';
</script>


<!-- <script>
export default {
    data(){
       return {
        city: '',
        showWeather: false,
       }
    },
    watch: {
      city(newValue) {
        console.log("New Value: ", newValue)
      }
    },
    methods: {
        searchWeather() {
          this.showWeather = false;
          this.$nextTick();
          this.showWeather = true;
        }
    },
   
}


</script> -->
 
<template>
  <!-- Our main app wrapper -->
  <main class="app">
    <NavLogo />
   <HeaderWeather /> 
   <!-- <Weather /> -->
   <!-- <Widget /> -->
   <!-- <TestRun /> -->

  </main>
 
</template>

