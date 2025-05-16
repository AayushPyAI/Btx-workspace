<template>
  <div class="min-h-screen" :class="isDarkTheme ? 'bg-primary' : 'bg-primary-dark'">
    <!-- <Navbar /> -->
    <div v-if="showSalesPage">
      <SalesNavbar />
      <TopBar class="" />
      <div class="flex  h-full w-full bg-gray-50 ">
        <!-- Left Container (30%) -->
        <div class="w-[28%] min-w-[310px] border-r border-gray-200 bg-white overflow-y-auto">
          <SalesFiltercard />
        </div>

        <!-- Right Container (70%) -->
        <div class="w-[72%] bg-[#F8F6FC] overflow-y-auto">
          <!-- Your right content goes here -->
           <RightSalesPage/>
           <WorkQueueHeader/>
        </div>
      </div>
    </div>
    <div v-else>
      <Navbar />
      <div class="flex pt-16">
        <div class="w-16 fixed top-16">
          <Sidenav />
        </div>
        <div class="ml-9 flex-1 w-[calc(100%-64px)] pl-4 pr-4">
          <Actionbar />
          <Usercard />
          <Usertaskcard />
        </div>
      </div>
    </div>

    <Addtaskmodel v-if="showModel" @close="closeModal" />
  </div>
</template>




<script>
import Actionbar from './components/Actionbar.vue';
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';
import Usercard from './components/Usercard.vue';
import Usertaskcard from './components/Usertaskcard.vue';
import { mapGetters, mapActions } from 'vuex'
import './style.css'
import Addtaskmodel from './components/Addtaskmodel.vue';
import SalesNavbar from './components/salesEngagement/SalesNavbar.vue';
import TopBar from './components/salesEngagement/TopBar.vue';
import SalesFiltercard from './components/salesEngagement/SalesFiltercard.vue';
import RightSalesPage from './components/salesEngagement/RightSalesPage.vue';
export default {
  components: { Usercard, Navbar, Actionbar, Sidenav, Usertaskcard, Addtaskmodel, SalesNavbar, TopBar, SalesFiltercard,  RightSalesPage },
  mounted() {
    console.log("application mounted")
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme', 'showModel', 'showSalesPage']),
  },
  methods: {
    ...mapActions(["closeModal"]),
  },

}
</script>

<style scoped></style>
