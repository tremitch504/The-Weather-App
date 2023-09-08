<script setup>
import NavLogo from './components/Nav/NavLogo.vue';
import HeaderWeather from './components/HeaderWeather/HeaderWeather.vue';
import WeatherFooter from './components/Footer/WeatherFooter.vue';
</script>

 

<template>
  <!-- Our main app wrapper -->
  <main class="app">
    <!-- <h1 class="text-3xl font-bold underline bg-red-200 sm:bg-blue-700 md:bg-yellow-400 lg:bg-orange-500">
    Hello world!
  </h1> -->
    <NavLogo />
   <HeaderWeather /> 
   <WeatherFooter />

  </main>
 
</template>

