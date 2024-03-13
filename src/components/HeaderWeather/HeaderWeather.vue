<script setup>
import './HeaderWeather.css';
import Weather from '../Weather/Weather.vue'
import axios from 'axios';
import geolocator from 'geolocator'
</script>

<script>


//This is where we will hold and place our state
export default {
   props: ['getWeather'],
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
              if(this.city.length !== 0){

              //This is where we will display the updated data when the toggle is checked and active
              this.showWeather = false;
                await this.$nextTick();
              this.showWeather = true; 
              }
            
          
      },

      setTime() {
          setInterval(() => {
            let date = new Date();

            this.time = date.toLocaleTimeString();
          
          },1000)
      },
      findLocation() {

        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${import.meta.env.VITE_GOOGLE_MAP_KEY}`).then(res => {

const latitude = res.data.location.lat
const longitude = res.data.location.lng  

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_MAP_KEY}`).then(async (res) =>{
                    
                 //Use find method to loop through the address array to search for the object that has a types array that includes the string "locality"
                 let city = res.data.results[0].address_components.find((component) =>
             component.types.includes("locality")
           ).long_name; 

           this.city = city;
                       
           this.showWeather = false;  
           await this.$nextTick();
           this.showWeather = true; 

               }).catch(error => {console.log(error) })

 }).catch( err => console.log(err))
      },
      setLocation() {

    const error = () => {
      console.log("error!!")
    }  

   
    // navigator.geolocation = standard JavaScript API, that returns an object with its own methods and retrieves the user's location data
    //navigator.permissions =  is an permission API object that will ask a user for the permission to use the geolocation API to find user's location. 
    //permission request will pop up near browser once the API is first used.

    //query: basic promise that will determine if the user permission access has been granted or denied
    //parameter: name which API you want to access to  
    //permissionStatus: the object being returned from the permission API, which gives you the data or status of the permission
    //permissionStatus object has a onChange event handler that watches for any changes or updates on the staus of the permissionStatus object
         
          navigator.geolocation.getCurrentPosition(position => {
          }, error,{enableHighAccuracy: true,
timeout: 5000,
maximumAge: Infinity})
 

           navigator.permissions.query({
    name: "geolocation" 
  }).then(permissionStatus => {
      
    if (permissionStatus.state === "prompt") {
        permissionStatus.onchange = (evt) => {
          if(permissionStatus.state === "granted"){
            //run the function that will make a put and get request to our goolge maps APIs to retrieve the user's current location, once the permission is granted
        this.findLocation()
          }
        };
      }
      //find the location if the user already have granted the permission
      if(permissionStatus.state === "granted"){
           this.findLocation()
      }
  })
       
         
      
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
        <h2>see what the weather <span>is like today</span></h2>
     </div>
    </section>

    <div class="title-interest-wrapper">
        <h2 class="title-interest">
            Hope to see if it's not raining? The Weather App keeps you updated.
        </h2>
    </div>


    
    <!-- Here we want the search bar placed -->
    <div class="search-bar">

<!-- <h1 class="current-time">{{time}}</h1>  -->
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
 
<!-- This is where we want the current location icon button to display -->
<img class="location-icon" src="/public/placeholder.png"  v-on:click="setLocation">

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