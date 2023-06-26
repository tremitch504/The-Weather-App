<script setup>
import './HeaderWeather.css';
</script>


<template>
<div class="header-wrapper">

    <section class="welcome">
    <!-- this is where we want the header font to welcome our users to explore the weather app and search for city -->
    <div class="title-wrapper">
        <i class="bi bi-airplane-engines"></i>
        <h2 class="title"> 
            Explore with us and see what the weather is like today
        </h2>
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
          <input class="bar" type="text" placeholder="Search for a city"  autocomplete="off">
        </form>
    </div>
    <button class="search-button" role="button">Search</button>
    </div>
</div>



</template>