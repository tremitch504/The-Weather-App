<script setup>
import "./Weather.css"
import DaysOfWeek from '../DaysOfWeek/DaysOfWeek.vue'
import Widget from '../Widget/Widget.vue'
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
         items: [{id: 1, day: 'Wednesday', status: 'Partly Cloud', wind: '22 kmph', Humidity: '22%', Pressure: '1010mb'  }, 
         {id: 2, day: 'Thursday', status: 'Rain', wind: '40 kmph', Humidity: '22%', Pressure: '1010mb'  },
         {id: 3, day: 'Friday', status: 'Clear', wind: '30 kmph', Humidity: '22%', Pressure: '1010mb'  },
         {id: 4, day: 'Saturday', status: 'Partly Cloud', wind: '22 kmph', Humidity: '22%', Pressure: '1010mb'  }
        ]
       
        }
    },
    created() {    //This is where we will do a axios request. But search on how we can use GraphQl
        const response = axios.get('This is where we will add the API url request')
    } 
}
</script>

<template>

<!-- padding 0 -->
<div class="weather-wrapper">
    <!-- display of flex -->
<div class="weather-container">
    <!-- width of 100 -->
<div class="weather-card">
    <!-- padding of 3 -->
<div class="weather">
    <!-- sets margin or padding to .25rem -->
    <h2 class="day">      
      Tuesday
    </h2>
    <!-- margin or padding to 0, color: text-light--> 
    <p class="date">date</p>   
    <small>time</small>
    <h2 class="place"> <i class="bi bi-geo-alt">New <small>Orleans</small></i></h2>
    <div class="temp">       
        <h1 class="temp-weather">19&deg;</h1>
        <!-- color is text-light -->       
        <h2 class="description">description</h2>
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

<Widget />

</div>

</template>  