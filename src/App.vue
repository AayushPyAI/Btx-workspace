<template>
    
<div class="min-h-screen bg-gradient-to-b from-black to-gray-900">

  <Navbar/>
<div class="flex pt-16">
    <div class="w-16 fixed h-full top-16"> <!-- Sidenav fixed width and full height -->
        <Sidenav/>
    </div>
    <div class="ml-16 flex-1 w-[calc(100%-64px)] pl-4 pr-4"> <!-- Main content offset by sidenav width -->
      <Actionbar/>
      <Usercard/>
      <Usertaskcard/>
    </div>
</div>
</div>

</template>



<script >
import Actionbar from './components/Actionbar.vue';
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Usercard from './components/Usercard.vue';
import Usertaskcard from './components/Usertaskcard.vue';
import './style.css'
export default {
  components:{Usercard, Navbar,Actionbar,Sidenav, Usertaskcard},
mounted() {
    console.log("application mounted")

  },
}
</script>

<style scoped>

</style>
