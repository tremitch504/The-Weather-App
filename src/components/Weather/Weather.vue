<script setup>
import "./Weather.css"
import Widget from '../Widget/Widget.vue';
import HourlyForecast from "../HourlyForecast/HourlyForecast.vue";
import axios from 'axios';
</script>

<script>
export default {
    components: {

        Widget,
         HourlyForecast,
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
           country: null,
           test: null,
           
       
        }
    },
   mounted() { 
      this.getWeather()
      
    },

    watch: {
       
        searchResult(newValue) {
        
         
        },
        temperature(newValue){
           
        },
        wind(newValue)
 {
    
 }    }, methods: {
       async getWeather() {
 return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${import.meta.env.VITE_ACCESS_TOKEN}`).then( response => {

            
const weatherData = response.data;
 
//If the toggle checked as celsius, return the temperature as celsius.
if(this.tempDegree === 'celsius') {
    this.temperature = Math.round(weatherData.main.temp)
    this.degreeLetter = 'C';
}
//We need to change the temperature to Fahrenheit
if(this.tempDegree === 'fahrenheit') { 
    this.temperature = Math.round((Math.round(weatherData.main.temp) * (9 / 5)) + 32);
    this.degreeLetter = 'F';
}
 
this.description = weatherData.weather[0].description;
this.name = weatherData.name;  
this.iconUrl = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
this.wind = Math.round(weatherData.wind.speed);
this.humidity = Math.round(weatherData.main.humidity);
this.pressure = Math.round(weatherData.main.pressure);

this.country = weatherData.sys.country;


const d = new Date(); 
  
this.date = d.getDate() + ' ' + this.monthNames[d.getMonth()] + ' ' + d.getFullYear();

 this.time = this.changeHour(d.getHours()) + ':' + this.addZero(d.getMinutes()) + ':' + this.addZero(d.getSeconds());
   
this.searchResult = 'Found';
return weatherData;
}).catch(err => {
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

    <div class="no-search-wrapper" v-if="searchResult === 'No results found for '">
     <div class="no-search-container">
        <i class="bi bi-search"></i> 
     <h2>No Results</h2>
     <h1 class="no-search-text">{{ searchResult + `"${name}"`}}</h1>
     </div> 
    </div>


  
<div class="weather-container" v-if="searchResult === 'Found'">
   
<div class="weather-card">
   
<div class="weather">
   
    <h2 class="day">      
      Today 
    </h2>   
   
    <p class="date">{{ date }}</p>       
   

    <div class="place-container">
        <h2 class="place"> <i class="bi bi-geo-alt">{{ name }}, <small>{{ country }}</small></i></h2>
    </div>

    <div class="temp">       
        <h1 class="temp-weather">{{ temperature}}&deg;{{degreeLetter}}</h1>
        <img class='icon-url' :src="iconUrl" />
            
        <h2 class="description">{{ description }}  </h2> 
    <div class="weather-details">
        <h1>
                    Wind <span>{{wind}} kmph</span>
                </h1>

                <h1> 
                    Humidity <span>{{humidity}}%</span>
                </h1>

                <h1>
                    Pressure <span>{{pressure}} mb</span>
                </h1>
    </div>
    </div>        
</div>  
</div>
</div> 

<HourlyForecast  :getWeather="getWeather" :tempDegree="tempDegree" :degreeLetter="degreeLetter"  />

<Widget  :name="city" :tempDegree="tempDegree" :degreeLetter="degreeLetter"  />

</div>

</template>  