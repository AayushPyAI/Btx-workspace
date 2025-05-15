<template>
  <div class="min-h-screen" :class="isDarkTheme ? 'bg-primary' : 'bg-primary-dark'">
    <Navbar />
    <div class="flex pt-16"> <!-- Add top padding equal to navbar height -->
      <div class="w-16 fixed top-16"> <!-- Offset sidenav to appear below navbar -->
        <Sidenav />
      </div>
      <div class="ml-9 flex-1 w-[calc(100%-64px)] pl-4 pr-4"> <!-- Main content with left margin -->
        <Actionbar />
        <Usercard />
        <Usertaskcard />
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
export default {
  components: { Usercard, Navbar, Actionbar, Sidenav, Usertaskcard, Addtaskmodel },
  mounted() {
    console.log("application mounted")
  },
  computed: {

    ...mapGetters(['isDarkTheme', 'showModel']),
  },
  methods: {
    ...mapActions(["closeModal"]),
  },
}
</script>

<style scoped></style>
