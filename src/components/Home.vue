<template>
     <div class="min-h-screen" :class="isDarkTheme ? 'bg-primary' : 'bg-primary-dark'">
  
    <div>
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
import Actionbar from './Actionbar.vue';
import Addtaskmodel from './Addtaskmodel.vue';
import Navbar from './Navbar.vue';
import Sidenav from './Sidenav.vue';
import Usercard from './Usercard.vue';
import Usertaskcard from './Usertaskcard.vue';
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {Actionbar, Addtaskmodel,Navbar,Sidenav,Usercard,Usertaskcard},
  computed: {
    ...mapGetters(['isDarkTheme', 'showModel', 'showSalesPage', 'showMainPage']),
  },
}

</script>