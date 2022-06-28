import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoadScript from "vue-plugin-load-script";
// import GoogleAuth from 'vue-google-oauth2'
// import Vue from 'vue';
// const gauthOption = {
//     clientId: '117184943709978921122.apps.googleusercontent.com',
//     scope: 'profile email',
//     prompt: 'select_account'
// };
// Vue.use(GoogleAuth, gauthOption);



const app = createApp(App)
app.use(LoadScript);


app.use(router)

app.mount('#app')
