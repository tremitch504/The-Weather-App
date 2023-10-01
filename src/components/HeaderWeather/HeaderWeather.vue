<script setup>
import './HeaderWeather.css';
import Weather from '../Weather/Weather.vue'

</script>

<script>


//This is where we will hold and place our state
export default {

    data(){
       return {
        city: '',
        showWeather: false, 
        listData: [],
        filterData: [],
        isActive: true,
        tempDegree: 'fahrenheit',
        time: null,
  
       }
    },
    mounted() {    
    this.setTime();
  
    },
    watch: {
    
      listData(newValue){
        
       
      },
      filterData(newValue){
       
      },
      tempDegree(newValue){
        
      }
    },
    methods: {
        async searchWeather(e) {
          e.preventDefault();
          this.showWeather = false;
          await this.$nextTick();
          this.showWeather = true; 

        },
        async clearInput() {
          this.city = '';
        },
        async newInput(val) {
         

        }, 
        async changeTemp(e) {

              if(e.target.checked === true) {
                this.tempDegree = 'celsius'; 
              }
              if(e.target.checked !== true){
                this.tempDegree = 'fahrenheit';
            }
            //This is where we will display the updated data when the toggle is checked and active
            this.showWeather = false;
              await this.$nextTick();
            this.showWeather = true; 
            
          
      },

      setTime() {
          setInterval(() => {
            let date = new Date();

            this.time = date.toLocaleTimeString();
          
          },1000)
      }

    },
    
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
    </section>

    <div class="title-interest-wrapper">
        <h2 class="title-interest">
            Hope to see if it's not raining? The Weather App keeps you updated.
        </h2>
    </div>


    
    <!-- Here we want the search bar placed -->
    <div class="search-bar">

<h1 class="current-time">{{time}}</h1> 
    <div class="search-container">
      <form class="search-form" @submit.prevent="searchWeather">
        <!-- here is to put the search logo --> 
          <!-- this could possibly what is causing the typeError problem  -->
        <i class="bi bi-search" v-if="city.length === 0"></i> 
        <i class="bi bi-x-circle" v-if="city.length !== 0" v-on:click="clearInput"></i>
          <input class="bar" type="text" v-on:@keyup.enter="searchWeather" v-model="city" v-on:change="filterHandle" placeholder="Search for a city"  autocomplete="off">
        </form>   
    </div>  
      
    <div class="button-wrapper">
      <button class="search-button" role="button" @click="searchWeather"  >Search</button> 
 
  <input  type="checkbox" id="switch" v-on:change="changeTemp"/>
  <label for="switch">
 <h1 class="fahrenheit">&deg;F</h1>
 <h1 class="celsius">&deg;C</h1>
  </label>
    </div>
    
    </div>

    <!-- Here we can create a search filter and drop down -->
    <!-- You can have this in one div with the search bar and have it display flex and column  -->
 <!-- <div class="city-list-wrapper"  v-if="filterData.length !== 0"> 
  <div class="city-list-container" v-for="city in filterData" v-on:click="newInput(city.name)">
   <p class="city-name" v-on:click="newInput(city.name)"> {{ city.name }} </p>

</div>
      
    </div> -->

</div>



<!-- place Weather section here -->
<Weather :city="city" :tempDegree="tempDegree"  v-if="showWeather"/>

</template>