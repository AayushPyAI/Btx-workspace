<template>
  <nav class=" flex items-center justify-between p-4 fixed w-full z-50 h-18"
    :class="isDarkTheme ? 'bg-primary' : ''">
    <div class="flex items-center">
      <span v-html="isDarkTheme ?logoDark : logoLight "></span>

    </div>
    <div class="flex items-center space-x-4 gap-1.5">
       <button @click="toggleTheme" class="flex items-center m-0  p-3 rounded-full  "
        :class="isDarkTheme ? ' bg-white' : 'bg-active-icon'">
        <span v-if="!isDarkTheme">
          <!-- Sun Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 18.364l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        </span>
        <span v-else>
          <!-- Moon Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        </span>

      </button>
      <div class="relative  p-3 rounded-full m-0 hover:bg-white bg-transparent  cursor-pointer" :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
        <span v-html=" Notification "></span>

      </div>
      <div class=" p-2 rounded-full hover:bg-white bg-transparent  cursor-pointer"  :class="isDarkTheme ? 'border-Primary' : ' border-Primary-dark'">
        <img src="../assets/avatar.png" alt="Avatar" class="w-7 h-7 rounded-full" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { logoLight,  logoDark, Notification } from '../assets/icons';
export default {
  name: 'Navbar',
  data() {
    return {
        logoLight,
        logoDark,
        Notification,
    };
  
  },

  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  methods: {
    ...mapMutations(['toggleTheme'])
  }
};

</script>

<style scoped></style>
