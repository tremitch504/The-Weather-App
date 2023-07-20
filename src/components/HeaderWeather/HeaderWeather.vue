<script setup>
import './HeaderWeather.css';
import Weather from '../Weather/Weather.vue'
</script>

<script>

// let props = defineProps(['city']);
//This is where we will hold and place our state
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
    // props: {
    //     city: String,

    // },
    // data() {
    //     return{
            
    //     }
    // },
    // computed: {
    //     console: (city = city) => city
    // }
}
</script>

<template>
<div class="header-wrapper">

    <section class="welcome">
    <!-- this is where we want the header font to welcome our users to explore the weather app and search for city -->
    <div class="title-wrapper">
        <h2 class="title"> 
            Explore with us and 
        </h2>
        
    </div>
     <div class="title2">
        <h2>see what the weather is like today</h2>
     </div>
    <div class="title-interest-wrapper">
        <h2 class="title-interest">
            Hope to see if it's not raining? The Weather App keeps you updated.
        </h2>
    </div>
    </section>
    
    <!-- Here we want the search bar placed -->
    <div class="search-bar">
    <div class="search-container">
      <form class="search-form">
        <!-- here is to put the search logo -->
        <i class="bi bi-search"></i>
          <input class="bar" type="text" v-model="city"  placeholder="Search for a city"  autocomplete="off">
        </form> 
    </div>
    <button class="search-button" role="button" @click="searchWeather ">Search</button>
    </div>

</div>



<!-- place Weather section here -->
<Weather :city="city" v-if="showWeather"/>



</template>