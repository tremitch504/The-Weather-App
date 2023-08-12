<script setup>
import "./Weather.css"
import DaysOfWeek from '../DaysOfWeek/DaysOfWeek.vue'
import Widget from '../Widget/Widget.vue';
import axios from 'axios';
// import HeaderWeather from "../HeaderWeather/HeaderWeather.vue"
</script>

<script>
export default {
    components: {
        // Days
        Widget, 
    },
    props: {
        city: String,
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
       
        }
    },
   async created() {    //This is where we will do a axios request to capture data from the Weather API Open Weather Map. But search on how we can use GraphQl
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=112e66de63cb9dd94704577809734305`).then( response => {

            
                        const weatherData = response.data;
                        //We need to change the temperature to Fahrenheit
                        this.temperature = Math.round((Math.round(weatherData.main.temp) * (9 / 5)) + 32);
                        this.description = weatherData.weather[0].description;
                        this.name = weatherData.name;  
                        this.iconUrl = ` https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
                        this.wind = Math.round(weatherData.wind.speed);
                        this.humidity = Math.round(weatherData.main.humidity);
                        this.pressure = Math.round(weatherData.main.pressure);
                  
                        const d = new Date(); 
                
                        this.date = d.getDate() + '-' + this.monthNames[d.getMonth()] + '-' + d.getFullYear();
                        this.time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                        console.log(response);
        }).catch(err => {
            console.log(err);
             this.searchResult = 'No results found for ';
        })


    },
    watch: {
        searchResult(newValue) {
          console.log('result status: ', newValue);
        }
    }
}
</script>

<template >


<!-- padding 0 -->
<div class="weather-wrapper" >

    <div class="no-search-wrapper">
     <div class="no-search-container">
        <i class="bi bi-search"></i> 
     <h2>No Results</h2>
     <h1 class="no-search-text">{{ this.searchResult + `"${this.city}"`}}</h1>
</div>

</div>


    <!-- display of flex -->
<div class="weather-container" v-if="this.name !== null">
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
    <h2 class="place"> <i class="bi bi-geo-alt">{{ name }} <small></small></i></h2>
    <div class="temp">       
        <h1 class="temp-weather">{{ temperature }}&deg;F</h1>
        <img class='icon-url' :src="iconUrl" />
        <!-- color is text-light -->       
        <h2 class="description">{{ description }}  </h2> 
       
    </div>        
</div>  
</div>

<!-- <div class="card card-2 w-100"> -->
    <!-- margin of 4 -->
    <!-- <table class="details"> 
        <tbody>
            <tr>
                <th>Sea Level </th>
                <td>100</td>
            </tr>
            <tr>   
                <th>Sea Level </th>
                <td>100</td>
            </tr>
            <tr>
                <th>Sea Level</th>
                <td>100</td>
            </tr>
        </tbody>
    </table> -->

<!-- This where we will have our days of the week component -->

<!-- <DaysOfWeek> </DaysOfWeek> -->




    <!-- display of flex, margin of 3, and justify-content will be centered -->
    <!-- <div id="div_Form" class="location">
        <form action="">
            <input type="button" value="Change Location" class="btn change-btn btn-primary">
        </form>
    </div> -->
<!-- </div> -->


</div>

<Widget  :name="this.city" :wind="wind" :humidity="humidity" :pressure="pressure"/>

</div>

</template>  