import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'  //Bootstrap icons would not appear on screen without this import


//*****Vue Apollo library *******
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { DefaultApolloClient } from '@vue/apollo-composable'

// import Vue from 'vue'
// import VueApollo from 'vue-apollo'


// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3020/graphql',
  })



  // Cache implementation
const cache = new InMemoryCache()


// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});


// const apolloProvider = new VueApollo({
//     defaultClient: apolloClient,
//   })


//   new Vue({
//     el: '#app',
//     // inject apolloProvider here like vue-router or vuex
//     apolloProvider,
//     render: h => h(App),
//   })




createApp(App).provide(DefaultApolloClient, apolloClient).mount('#app') 
