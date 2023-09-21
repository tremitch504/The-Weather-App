<!-- First The App logo and This is where the name of the Website should be -->
# <img style="height: 60px;" src="/public/weather-app.png"> The Weather App
 
<!-- Underneath, we will have the description of our website, explaninng  -->
<img style="height: 20px;" src="/public/weather-app.png">The Weather App is a website that provides users the best and real time forecast. Users can be  updated on present or upcoming days for current location or future destinations.  This app is built with Vue as the frontend framework and Vite for the built in local server and build or bundle the assests.

<!-- here: have the table of contents: a logo infront the the name of content we show. -->
⚡️[Features](https://github.com/tremitch504/The-Weather-App#features)<br /> 

🔥[Stack](https://github.com/tremitch504/The-Weather-App#Tech-Stack)<br /> 

📖[Documentation](https://github.com/tremitch504/The-Weather-App#Documentation)<br /> 

[Setup](https://github.com/tremitch504/The-Weather-App#Project-Setup)<br /> 

# ⚡️Features 
<!-- here: Show the website in full screen version screenshot --> 
<img src="/public/TheWeatherAppFS.png">

<ul>
<li>A user have the ability to search for any city globally worldwide to capture current and future forecast using the search bar</li>
<li>Once the city has been searched, the user will be presented with a display of a widget with current day's weather forecast along with the date and the city that the user have searched</li>
<li>Also displayed are widgets of weather conditions for the next four days for that particular city</li>
</ul>

    
<!--  
here: descriping a feature of using the weather App

here: a gif of the weather App using those features, example: searching for a City! -->
    
<img src="/public/weatherAppFS.GIF" style="width: 200%; height: 100%;">
<ul>
<li>Each widget displays the Wind, Humidity percentage, Pressure and Temperature of that day </li>

<li>At default a user will see the Temperature degree at Fahrenheit but have the ability to change and show Temperature in Celcius</li>
 </ul> 
  
<!-- This where we would have a gif or video of the celcius change  -->


https://github.com/tremitch504/The-Weather-App/assets/51865741/55ca412e-a870-4784-9a06-6f0e6d690f5c

# 🔥Tech Stack
<!-- Here: We would display the Tech Stack and its logos! -->
<div style="display: flex; flex-direction: column; justify-content: space-between; padding: 3rem;">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" style="height: 80px;"/>

<img src="https://www.svgrepo.com/show/374167/vite.svg" style="height: 80px;"/>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="height: 80px;"/>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" style="height: 80px;"/>

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="height: 80px;"/>
<img src="https://miro.medium.com/v2/resize:fit:2400/2*zopSONYY0BgrN1xJJrmW6g.png" style="height: 80px;"/>
<img src="https://www.futuromediagroup.org/wp-content/uploads/2022/11/FM_News_500-2.png" style="height: 80px;"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/2560px-Netlify_logo.svg.png" style="height: 80px;"/>
</div>
<!-- Here explain what the tech was used for this website! -->
<ul> 
<li>TailwindCSS: For a responsive website, this CSS framework gives <img style="height: 20px;" src="/public/weather-app.png">The Weather App a more flexible style for the content when users are visiting the app on a much smaller device than the browser on a computer</li>
<li>OpenWeatherMap: An open source service that provides weather data via API, <img style="height: 20px;" src="/public/weather-app.png">The Weather App captures all weather data from OpenWeatherMap</li>
<li>Axios: Axios is a Javascript library used to make HTTP requests from node. js. Axios is used for the API calls to get data back from OpenWeatherMap's API endpoint</li>
<li>[Netifly](https://www.netlify.com): a deployment platform, <img style="height: 20px;" src="/public/weather-app.png">The Weather App is deployed on Netifly. It is free, simple, and fast to build</li>
</ul>


<!-- Here: we show the responsiveness video of the phone screen explaining we used Tailwind -->
## Responsiveness

https://github.com/tremitch504/The-Weather-App/assets/51865741/fd0dc9a6-7e52-4730-b999-7fc111dba206

### TailwindCSS Funtions and Directives

[TailwindCSS Docs](https://tailwindcss.com/docs/functions-and-directives).
```sh
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
    .header-wrapper {
       @apply  sm:h-80 pt-8  md:h-96 lg:h-96
    }
}
```
### CSS Media Queries 

Checkout [Using Media Queries for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

```sh

/* Mobile */
@media only screen and (max-width: 640px) {

    .search-bar { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
}
```
<!-- Here: explaining the documentation of the Weather API we used! -->
# OpenWeatherMap <img src="https://miro.medium.com/v2/resize:fit:2400/2*zopSONYY0BgrN1xJJrmW6g.png" style="height: 50px;"/>

[Sign up here](https://home.openweathermap.org/users/sign_up)

Once signed up, in your account's My API Keys tab you are giving a default key.
You can either use the default key or create a new one. 

<img src="https://i0.wp.com/techtutorialsx.com/wp-content/uploads/2018/03/openweathermap-api-key.png?resize=998%2C562&ssl=1" style="height: 30%; width: 50%;"/>


### Making an API call
<ul>
<li>Under the API tab next to Guide, you will see different options of data collections you can make API calls to.</li>
</ul>
<img src="/public/weatherAPIexample.png" style="height: 70%; width: 70%;" />
<ul>
<li>There are a few ways on how you can do an API call to a collection, you can call by city name or city name, state code and country code.</li>
</ul>
<img src="/public/apiCall.png" style="height: 70%; width: 70%;" />

# 📖Documentation
<!-- Here: We have the documentation what have to be installed and files created in order to use that stack if needed. -->

# package.json

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

# Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Helpful links

<ul> 
<li> </li>
<li>[Vue Essentials](https://vuejs.org/guide/components/props.html) </li>
<li>Test your API calls with [Postman](https://www.postman.com) to make sure you are getting data back</li>
<li>Use this TailwindCSS cheat sheet called [Flowbite](https://flowbite.com/tools/tailwind-cheat-sheet/) to help you implement your CSS styles</li>
<li>[Dribble](https://dribbble.com/shots/popular/web-design) gives you ideas on how you may want your UI to look like. This will help you with your creative mind</li>
<li>[MobileView](https://github.com/champ3oy/MobileView) is a VS Code extension that helps you view your site in a mobile device</li>
</ul>