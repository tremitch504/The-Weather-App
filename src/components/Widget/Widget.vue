<script setup>
import './Widget.css'
import axios from 'axios';
import moment from 'moment';
</script>
 
<script>
export default {
    props: {
        degreeLetter: String,
        tempDegree: String,
        name: String,
    },
    data() {
        return {
            forecast: [],
            iconUrl: null,
           loading: true,
        }
    },
    mounted() {
        this.fetchDailyData();
    },
    methods: {
        async fetchDailyData() {
            const apiKey = '112e66de63cb9dd94704577809734305';
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${this.name}&units=metric&appid=${apiKey}`;

            await axios.get(apiUrl).then(res => {

                //We use a map function to return an array of all of the key value data we want from the forecastData,
                //we get back about 40 items back but we only need about 4, we use reduce to return an array of only 4 objects 
                // we use isSame method on our moment, so we can push the items that doesn't have the same dates on the dt key inside the accumulator array.
                //we are using the some method so that way if at least one item has the same dates it will return true, but if it returns false we want to push that item into the accumulator array
                const forecastData = res.data.list
    
                const filterData = forecastData.map(day => {
                   
                    let temp;
                      console.log('current degree:', this.tempDegree)
                    if(this.tempDegree === 'celsius') {
                        temp = Math.round(day.main.temp);
                        console.log('current temp:', temp);
                    }
                    //  console.log('current temp: ', temp);
                    if(this.tempDegree === 'fahrenheit') {
                         temp = Math.round((Math.round(day.main.temp) * (9 / 5)) + 32);
                    }
                        
                    return { 
                        date: moment(day.dt_txt.split(' ')[0]), 
                        temperature: temp,
                        description: day.weather[0].description,
                        iconUrl: `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`,
                        wind: Math.round(day.wind.speed),
                        humidity: Math.round(day.main.humidity),
                        pressure: Math.round(day.main.pressure)
                    }   
                }).reduce((acc, item) => {
                    if(!acc.some(day => day.date.isSame( item.date, 'day'))){
                        acc.push(item);
                    }
                    return acc;
                }, []).slice(1, 5);

                  this.forecast = filterData;
                  this.loading = false;
                console.log(forecastData, "This is the Original !!");
                console.log(filterData, "This is the Filter!!");
            }).catch(error => {
                console.log(error)
                this.loading = false;
            });
        },

        getNameDay(date){
            return date.format('ddd');
        }
    }
}

</script>


<template>

<div class="widget-wrapper">
    

    <div class="container">
 <!-- weather widget  -->  
        <div class="widget" v-for="day in forecast" :key="day.date">
            <div class="left-side">
                <!-- <i class="bi bi-cloud-sun" ></i>  -->
                <img class='icon-url' :src="day.iconUrl" />
                <h5 class="weather-status">{{ day.description }}</h5>
            </div>
                

            <div class="right-side">
                <h5 class="city">{{ this.getNameDay(day.date) }}</h5>
                <h5 class="degree">{{ day.temperature }}&#176;{{ this.degreeLetter }}</h5>
            </div>
 

            <div class="widget-details">
                <div>
                    Wind <span>{{day.wind }} kmph</span>
                </div>

                <div>
                    Humidity <span>{{ day.humidity }}%</span>
                </div>

                <div>
                    Pressure <span>{{ day.pressure }} mb</span>
                </div>
            </div>

        </div>
        <!-- end of widget -->
 
        

        
    </div>

</div>


</template>