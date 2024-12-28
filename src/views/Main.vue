<template>
    <div>
        <Header @themeChanged="handleThemeChange" />
        <router-view/>
        <Footer />
    </div>
</template>
    
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components:{
    Header,
    Footer
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
    },
  }
}


</script>
    
<style scoped>
</style>