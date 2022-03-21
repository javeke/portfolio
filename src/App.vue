<template>
  <div id="app">
    <Header />
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/background2.jpg');
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
  background: rgb(33, 37, 41);
}

::-webkit-scrollbar-thumb{
  background: rgba(83, 87, 91);
}

::-webkit-scrollbar-thumb:hover{
  background: gray;
}

@media screen and (max-width:600px) {
  #app{
    background: none;
  }
}

</style>
