<script setup>
import './HeaderWeather.css';
</script>


<template>
<div class="header-wrapper">

    <section class="welcome">
    <!-- this is where we want the header font to welcome our users to explore the weather app and search for city -->
    <h2 class="title">
        Explore and see what the weather is like outside in your location or a city you are visting.
    </h2>
    
    <h2 class="title-interest">
        Hope to see if it's not raining? The Weather App keeps you updated.
    </h2>
    </section>
    
    <!-- Here we want the search bar placed -->
    <div class="search-bar">
    <div class="search-container">
      <form class="search-form">
          <input class="bar" type="text" placeholder="Search for a city..." autocomplete="off">
        </form>
        <button class="search-button" role="button">Search</button>
    </div>
    </div>
</div>



</template>