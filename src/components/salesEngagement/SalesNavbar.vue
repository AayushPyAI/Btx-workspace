<template>
  <nav class=" flex items-center justify-between p-4  w-full z-50 h-18"
    :class="isDarkTheme ? 'bg-primary' : 'bg-white'">
    <div class="flex items-center">
      <span v-html="isDarkTheme ? logoDark : logoLight"></span>
    <button @click="backToHome"
      class="rounded-full w-10 h-10 flex items-center justify-center hover:bg-white bg-transparent ml-3 cursor-pointer"
      :class="isDarkTheme ? 'hover:bg-white border-Primary' : 'border-Primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary"  fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>
    </div>
    <div class="w-full max-w-xs mx-auto p-4">
      <div
        class="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition">

        <span v-html="searchNavIcon" />
        <input v-model="search" type="text" placeholder="Search..."
          class="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 ml-3" />
      </div>
    </div>
    <div class="flex items-center space-x-4 gap-1.5">
      <button @click="toggleTheme" class="flex items-center m-0  p-3 rounded-full  "
        :class="isDarkTheme ? ' bg-white' : 'bg-active-icon'">
        <span v-if="!isDarkTheme">
          <!-- Sun Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
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
      <div class="relative  p-3 rounded-full m-0 hover:bg-white bg-transparent  cursor-pointer border-SecondaryOne">
        <span v-html="getAddIcon(isDarkTheme)"></span>

      </div>
      <div class="relative  p-3 rounded-full m-0 hover:bg-white bg-transparent  cursor-pointer border-SecondaryOne">
        <span v-html="getQuestionIcon(isDarkTheme)"></span>

      </div>
      <div class="relative  p-3 rounded-full m-0 hover:bg-white bg-transparent  cursor-pointer border-SecondaryOne">
        <span v-html="getSettingsIcon(isDarkTheme)"></span>

      </div>
      <div class="relative  p-3 rounded-full m-0 hover:bg-white bg-transparent  cursor-pointer border-SecondaryOne">
        <span v-html="Notification"></span>

      </div>
      <div class=" p-2 rounded-full hover:bg-white bg-transparent  cursor-pointer border-SecondaryOne"
        :class="isDarkTheme ? 'bg-secondary-dark text-white' : ' bg-white'">
        <img src="../../assets/avatar.png" alt="Avatar" class="w-7 h-7 rounded-full" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { logoLight, logoDark, Notification, AddIcon, QuestioIcon, SettingIcon, searchNavIcon, getAddIcon,getQuestionIcon,getSettingsIcon } from '../../assets/icons';
export default {
  name: 'Navbar',
  data() {
    return {
      logoLight,
      logoDark,
      Notification,
      AddIcon,
      QuestioIcon,
      SettingIcon,
      searchNavIcon,
      getAddIcon,
      getQuestionIcon,
      getSettingsIcon
    };

  },

  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  methods: {
    ...mapMutations(['toggleTheme']),
    //  ...mapActions(["OPENMAINPAGE"]),
     backToHome() {
      this.$router.push('/')
    }
  }
};

</script>

<style scoped></style>
