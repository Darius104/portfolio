import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import 'bootstrap';
import '@fortawesome/fontawesome-free';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded',(e)=>{
    AOS.init()
})



createApp(App).mount('#app')
