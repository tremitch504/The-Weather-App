<script setup>
import './HeaderWeather.css';
import Weather from '../Weather/Weather.vue'
// import TestRun from '../TestRun/TestRun.vue';
// import cities from 'cities.json';
// import citiesData from '../../Cities/citiesData.json'

//  import {gql} from "@apollo/client"
// import { useQuery } from '@vue/apollo-composable';
// import {getBooks} from '../../graphql/Queries';
</script>

<script>

// let props = defineProps(['city']);
//This is where we will hold and place our state
export default {
    data(){
       return {
        city: '',
        showWeather: false, 
        listData: [],
        filterData: [],
        isActive: true,
        tempDegree: 'fahrenheit'
       }
    },
    mounted() {    
      // console.log('Api Key', import.meta.env.VITE_ACCESS_TOKEN)
    },
    watch: {
      // city(newValue) {
        // console.log("New Value: ", newValue)
      // console.log(cities); 
        //*****Here we need to use an API to capture cities*****
//         this.listData = citiesData.map(val => {

//           // console.log(val)
//             return {
//               name: val.city
//             }
//           })
        

//           const word = newValue;

//      const newFilter = this.listData.filter((val) => {
//           return val.name.toLowerCase().includes(word.toLowerCase());
// })
// console.log('Filter:', newFilter)
//      if(word === "" || this.isActive === false) {
//       this.filterData = []; 
//       this.isActive = true;
//      } else {
//       this.filterData = newFilter.slice(0,10); 
//      }
//       }
      // },
      listData(newValue){
        
        // console.log('This is the List of Cities: ', newValue)
      },
      filterData(newValue){
        // console.log('New Filter ', newValue)
      },
      tempDegree(newValue){
        // console.log('New Temp ', newValue)
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
          // this.city = val;
          // this.isActive = false;
          
          // this.filterData = [];
          // this.showWeather = false;
          // await this.$nextTick();
          // this.showWeather = true; 

        }, 
        async changeTemp(e){
          // console.log(e.target.checked);
          // e.preventDefault()
          // this.tempDegree = 'celsius'; 
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
    <div class="search-container">
      <form class="search-form" @submit.prevent="searchWeather">
        <!-- here is to put the search logo -->
          <!-- this could possibly what is causing the typeError problem  -->
        <i class="bi bi-search" v-if="this?.city.length === 0"></i> 
        <i class="bi bi-x-circle" v-if="this.city.length !== 0" v-on:click="clearInput"></i>
          <input class="bar" type="text" v-on:@keyup.enter="searchWeather" v-model="this.city" v-on:change="filterHandle" placeholder="Search for a city"  autocomplete="off">
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
<Weather :city="this?.city" :tempDegree="tempDegree" v-if="showWeather"/>




</template>