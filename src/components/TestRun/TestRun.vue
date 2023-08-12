
<script setup>
 import './TestRun.css'
 import citiesData from '../../Cities/citiesData.json'
</script>

<script>
export default {
    data() {
        return {
            list: [],
        }
    },
    mounted() {    //Mounted will run our function to print the data we need from listData
        // this.list(); 
        this.list = citiesData.map(val => {
            return {
              name: val.city 
            }
          }) 
          console.log(this.list)
    },
    watch: {
      list(newValue) {
        console.log("New Value: ", newValue)
        this.list = citiesData.map(val => {
            return {
              name: val.city 
            }
          }) 
      }
    },
}
</script>

<template>
<div class="test-wrapper"  > 

<div class="test-container"  v-for="city in list">

  <div class="test-city">
    
    {{ city.name }}
  </div>

</div>
  
      

  

</div>


</template>