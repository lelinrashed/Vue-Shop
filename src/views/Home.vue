<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
    <About></About>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Products from '@/sections/Products.vue'
import About from '@/sections/About.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Products,
    About,
    Login
  }
}
</script>
