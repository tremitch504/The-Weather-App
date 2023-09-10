<script setup>
import "./Weather.css"
import DaysOfWeek from '../DaysOfWeek/DaysOfWeek.vue'
import Widget from '../Widget/Widget.vue';
import axios from 'axios';
</script>

<script>
export default {
    components: {
        // Days
        Widget, 
    },
    props: {
        city: String,
        tempDegree: String,
       
    },
    data() {
        return {
           temperature: null,
           description: null,
           iconUrl: null, 
           date: null,
           time: null,
           name: null,
           monthNames: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
           wind: null,
           humidity: null,
           pressure: null,
           searchResult: null,
           degreeLetter: null,
       
        }
    },
   mounted() { 
      this.getWeather()
      console.log(import.meta.env.VITE_ACCESS_TOKEN)
      console.log(this.city);
    // console.log('current degree: ', this.temperature)
    },
//    async created() {    //This is where we will do a axios request to capture data from the Weather API Open Weather Map. But search on how we can use GraphQl
        // await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=112e66de63cb9dd94704577809734305`).then( response => {

            
        //                 const weatherData = response.data;
        //                 We need to change the temperature to Fahrenheit
        //                 if(this.tempDegree === 'celsius') {
        //                     this.temperature = Math.round(weatherData.main.temp)
        //                 }

            
        //                  this.temperature = Math.round((Math.round(weatherData.main.temp) * (9 / 5)) + 32);
                        
                        
        //                 this.description = weatherData.weather[0].description;
        //                 this.name = weatherData.name;  
        //                 this.iconUrl = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        //                 this.wind = Math.round(weatherData.wind.speed);
        //                 this.humidity = Math.round(weatherData.main.humidity);
        //                 this.pressure = Math.round(weatherData.main.pressure);
                  
        //                 const d = new Date(); 
                          
        //                 this.date = d.getDate() + ' ' + this.monthNames[d.getMonth()] + ' ' + d.getFullYear();

        //                  this.time = this.changeHour(d.getHours()) + ':' + this.addZero(d.getMinutes()) + ':' + this.addZero(d.getSeconds());
                           
        //                 this.searchResult = 'Found';
        //                 console.log(response);
        // }).catch(err => {
        //     console.log(err);
        //      this.searchResult = 'No results found for ';
        // })


    // },
    watch: {
       
        searchResult(newValue) {
        //   console.log('result status: ', newValue);
         
        },
        temperature(newValue){
            // console.log('temp status ', newValue)
            // console.log('degree: ', this.tempDegree)
            // if(this.tempDegree === 'celsius') { 
            //     this.temperature = Math.round((newValue - 32) * 5 / 9);
            //     console.log('new Temp ', this.temperature); 
            //  }
            //  console.log('new Temp ', this.temperature);
        }
    }, methods: {
         async getWeather() {

    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${import.meta.env.VITE_ACCESS_TOKEN}`).then( response => {

            
const weatherData = response.data;
 
//If the toggle checked as celsius, return the temperature as celsius.
if(this.tempDegree === 'celsius') {
    this.temperature = Math.round(weatherData.main.temp)
    this.degreeLetter = 'C';
}
//We need to change the temperature to Fahrenheit
if(this.tempDegree === 'fahrenheit'){
    this.temperature = Math.round((Math.round(weatherData.main.temp) * (9 / 5)) + 32);
    this.degreeLetter = 'F';
}
 
this.description = weatherData.weather[0].description;
this.name = weatherData.name;  
this.iconUrl = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
this.wind = Math.round(weatherData.wind.speed);
this.humidity = Math.round(weatherData.main.humidity);
this.pressure = Math.round(weatherData.main.pressure);

const d = new Date(); 
  
this.date = d.getDate() + ' ' + this.monthNames[d.getMonth()] + ' ' + d.getFullYear();

 this.time = this.changeHour(d.getHours()) + ':' + this.addZero(d.getMinutes()) + ':' + this.addZero(d.getSeconds());
   
this.searchResult = 'Found';
// console.log('current Degree ', this.temperature);
// console.log(response);
}).catch(err => {
// console.log(err);
this.searchResult = 'No results found for ';
this.name = this?.city;
})
          }

        ,
        addZero(num) {
          return num < 10 ? `0${num}`:num;
        },
        changeHour(num){
            num = num >= 12 ? num - 12 : num;
            return num;
        },
       
    
    },
    

}
</script>

<template >


<!-- padding 0 -->
<div class="weather-wrapper" >    

    <div class="no-search-wrapper" v-if="this?.searchResult === 'No results found for '">
     <div class="no-search-container">
        <i class="bi bi-search"></i> 
     <h2>No Results</h2>
     <h1 class="no-search-text">{{ this.searchResult + `"${this.name}"`}}</h1>
     </div>
    </div>


    <!-- display of flex -->
<div class="weather-container" v-if="this?.searchResult === 'Found'">
    <!-- width of 100 -->
<div class="weather-card">
    <!-- padding of 3 -->
<div class="weather">
    <!-- sets margin or padding to .25rem -->
    <h2 class="day">      
      Today 
    </h2>   
    <!-- margin or padding to 0, color: text-light--> 
    <p class="date">{{ date }}</p>       
    <small>{{ time }}</small>

    <div class="place-container">
        <h2 class="place"> <i class="bi bi-geo-alt">{{ name }} <small></small></i></h2>
    </div>

    <div class="temp">       
        <h1 class="temp-weather">{{ temperature}}&deg;{{degreeLetter}}</h1>
        <img class='icon-url' :src="iconUrl" />
        <!-- color is text-light -->       
        <h2 class="description">{{ description }}  </h2> 
       
    </div>        
</div>  
</div>
</div> 

<Widget  :name="this?.city" :tempDegree="tempDegree" :degreeLetter="degreeLetter"/>

</div>

</template>  