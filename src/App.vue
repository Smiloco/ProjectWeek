<template>

  <div id="app" class="hero-image " >
    <NavHeader />
    <router-view/>
    <Footer/>
  </div>
</template>
	
<script>
import NavHeader from "@/NavHeader.vue"
import Footer from "@/Footer.vue"
export default {
  components: {
    NavHeader,
    Footer
  },
  mounted(){
    this.$store.commit("setUrls");
    this.$store.dispatch("getProducts");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer{
  position:relative;
  bottom:0;
}

body {
background-image: url("https://images.wallpaperscraft.com/image/single/leaves_dark_plant_128531_3840x2400.jpg");
width: 100%;
height: 100%;

}

</style>
