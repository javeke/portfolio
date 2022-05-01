<template>
  <div id="app">
    <Header @themeChanged="handleThemeChange" />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { getIpAddress, userVisits } from '@/services/visitor.service';

export default {
  components:{
    Header,
    Footer
  },
  async created(){
    try{
      const { IPv4: ipAddress, country_name: country, state, city  } = await getIpAddress();
      let visitor = { city, state, country, ipAddress };
      await userVisits(visitor);
    }
    catch(err){}
  },
  methods:{
    handleThemeChange(newTheme){
      const app = document.getElementById("app");
      if(newTheme){
        app.classList.add('dark-theme');
      }
      else {
        app.classList.remove('dark-theme');
      }
    }
  }
}
</script>

<style>

:root {
  --primary-color: #000;
  --secondary-color: #2c3e508c;

  --main-color: #efc109;

  --primary-bg-color: #fff;
  --primary-bg-color-100: #ffffffa6;
  --primary-bg-color-700:#ffffffd6;

  --secondary-bg-color: #eeeeee;
  --secondary-bg-color-700: #eeeeeed6;
  --primary-bg-image: url('./assets/light-background1.jpg');

  --scrollbar-track-color:rgb(33, 37, 41);
  --scrollbar-thumb-color:rgba(83, 87, 91);
  --scrollbar-thumb-hover-color:gray;
}

.dark-theme {
  --primary-color: #fff;
  --secondary-color: #ffffff8c;

  --main-color: #ffc107;

  --primary-bg-color: #212529;
  --primary-bg-color-100: #21252906;
  --primary-bg-color-700:#212529b6;

  --secondary-bg-color: #17191a;
  --secondary-bg-color-700: #17191ab6;

  --primary-bg-image: url('./assets/background2.jpg');
}

.text-primary-color {
  color: var(--primary-color);
}

.text-main-color{
  color: var(--main-color);
}

.card .card-header{
  border: none;
}

@media (prefers-color-scheme: light) {

  :root {

    --scrollbar-track-color:#fff;
    --scrollbar-thumb-color:rgb(219, 218, 218);
    --scrollbar-thumb-hover-color:rgb(171, 171, 171);
  }
  
}

/* @media (prefers-color-scheme: dark) {
  :root { 
    --primary-color: #fff;
    --secondary-color: #ffffff8c;

    --main-color: #ffc107;

    --primary-bg-color: #212529;
    --primary-bg-color-100: #21252906;
    --primary-bg-color-700:#212529b6;

    --secondary-bg-color: #17191a;
    --secondary-bg-color-700: #17191ab6;
    --primary-bg-image: url('./assets/background2.jpg');

    --scrollbar-track-color:rgb(33, 37, 41);
    --scrollbar-thumb-color:rgba(83, 87, 91);
    --scrollbar-thumb-hover-color:gray;
  }
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  background-image: var(--primary-bg-image);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  scroll-behavior: smooth;
}

::-webkit-scrollbar{
  width: 14px;
}

::-webkit-scrollbar-track{
  background-color: var(--scrollbar-track-color);
}

::-webkit-scrollbar-thumb{
  background-color: var(--scrollbar-thumb-color);
}

::-webkit-scrollbar-thumb:hover{
  background-color: var(--scrollbar-thumb-hover-color);
}

@media screen and (max-width:600px) {
  #app{
    background: none;
  }
}

</style>
