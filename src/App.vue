<template>
    
<div class="min-h-screen bg-gradient-to-b from-black to-gray-900">

  <Navbar/>
<div class="flex">
    <div class="w-16 fixed h-full"> <!-- Sidenav fixed width and full height -->
        <Sidenav/>
    </div>
    <div class="ml-16 flex-1 w-[calc(100%-64px)]"> <!-- Main content offset by sidenav width -->
      <Actionbar/>
      <Usercard/>
    </div>
</div>
</div>

   
</template>



<script >
import Actionbar from './components/Actionbar.vue';
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Usercard from './components/Usercard.vue';
import './style.css'
export default {
  components:{Usercard, Navbar,Actionbar,Sidenav },
mounted() {
    console.log("application mounted")

  },
}
</script>

<style scoped>

</style>
