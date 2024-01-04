<script setup>
import "./HourlyForecast.css"
import axios from "axios";

import { DateTime } from "luxon"
</script>


<script>

export default {
    props: [ 'tempDegree', 'degreeLetter', 'getWeather'],
    setup(props){
       
    },
    data() {
        return {
          
        hourlyWeather: [],

        }
    },
    created() {
    
  },
    mounted() {

this.getHourly()

     
    },
    watch: {
   lat(newValue){
  
   },
   lon(newValue){


   },
   hourlyWeather(newValue){
    
   },
    
    }, 
    methods: { 
        //here we define our methods
      async getHourly() {
  
   this.getWeather().then(res => {
         const {lon, lat } = res.coord;
        
        
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${import.meta.env.VITE_ACCESS_TOKEN}&units=metric`).then(res => {
             
            const hourlyForecast = res.data.hourly 
            //We get back an data object with an hourly array 
            //the hourly array has about 48 objects inside
            //we only want to take 5 of those hourly forecast objects in the array
            //Also we only want certain properties from this hourly array
            //dt, temp, weather[0].icon
            //the dt (date time) comes back as Unix time which is the number of seconds since 1970 utc
            const filterHour = hourlyForecast.map(forecast => {
                //Here we need to do some type of converting to convert the Unix time into hh:mm (hours and minutes)
               //We use DateTime from luxon 
                const newTime = DateTime.fromSeconds(forecast.dt).setZone(res.data.timezone).toFormat('h:mm a');
            
                //Another thing we need to do is convert the temperature
                //and check if user wants fahrenheit or celcius 
                let temp;

                if(this.tempDegree === 'celsius') {
                        temp = Math.round(forecast.temp);
                       
                    }
                    
                    if(this.tempDegree === 'fahrenheit') {
                         temp = Math.round((Math.round(forecast.temp) * (9 / 5)) + 32);
                    }

                return {
                    time: newTime,
                    temp: temp,
                    icon: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`,
                }
               
            }).slice(1, 6);
            this.hourlyWeather =  filterHour;
          
           }).catch(err => {
           
           })
   })

    },
    }
}
</script>


<template>
<div class="hourly-wrapper">

<div class="hourly-container"  >
  
    <div class="hourly-widget">

        <div class="hourly-details" v-for="hour in hourlyWeather">
    
                <h1 class="time">{{hour.time}} </h1>
        
                <img class='icon-url' :src="hour.icon" />
        
                <h5 class="hourly-temp">
                    {{ hour.temp }}&#176;{{ degreeLetter }}
                </h5>
           
    
        </div>
    </div>
   
</div>


</div>


</template>