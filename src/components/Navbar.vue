<template>
  <nav class=" flex items-center justify-between p-4 fixed w-full z-50 h-18"
    :class="isLightTheme ? 'bg-primary' : 'bg-primary-dark'">
    <div class="flex items-center">
      <div v-html="logo" class="w-10 h-10"></div>

    </div>
    <div class="flex items-center space-x-4 gap-1.5">
       <button @click="toggleTheme" class="flex items-center m-0  p-3 rounded-full "
        :class="isLightTheme ? 'bg-icon-dark' : 'bg-white'">
        <span v-if="isLightTheme">
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
      <div class="relative  p-3 rounded-full m-0" :class="isLightTheme ? 'bg-[#161616]' : 'bg-white'">
        <svg width="23" height="23" viewBox="0 0 24 26" :class="isLightTheme ? 'text-[#fff]' : 'text-secondary'"
          fill="#6E829E" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.9163 18.9431H4.08342V20.8677H19.9163V18.9431ZM19.1531 9.48483L19.5956 13.3911L21.5081 13.1745L21.0655 9.26818L19.1531 9.48483ZM4.404 13.3911L4.8465 9.48483L2.93412 9.26818L2.49162 13.1745L4.404 13.3911ZM3.05301 16.5254C3.80317 15.6424 4.27282 14.5492 4.404 13.3911L2.49162 13.1745C2.4029 13.9577 2.08575 14.6913 1.58628 15.2791L3.05301 16.5254ZM19.5956 13.3911C19.7269 14.5492 20.1965 15.6424 20.9466 16.5254L22.4134 15.2791C21.9139 14.6913 21.5967 13.9577 21.5081 13.1745L19.5956 13.3911ZM4.08342 18.9431C2.94559 18.9431 2.22183 17.5036 3.05301 16.5254L1.58628 15.2791C-0.234427 17.4222 1.19411 20.8677 4.08342 20.8677V18.9431ZM19.9163 20.8677C22.8055 20.8677 24.2341 17.4222 22.4134 15.2791L20.9466 16.5254C21.7778 17.5036 21.0541 18.9431 19.9163 18.9431V20.8677ZM21.0655 9.26818C20.5328 4.56586 16.6547 0.980011 11.9998 0.980011V2.90463C15.6312 2.90463 18.7256 5.71069 19.1531 9.48483L21.0655 9.26818ZM4.8465 9.48483C5.27404 5.71069 8.36842 2.90463 11.9998 2.90463V0.980011C7.34498 0.980011 3.4668 4.56586 2.93412 9.26818L4.8465 9.48483Z"
            fill="currentcolor" />
          <path
            d="M16.7501 22.8092C16.9367 22.3115 16.6844 21.757 16.1867 21.5704C15.689 21.3839 15.1345 21.6361 14.9479 22.1338L16.7501 22.8092ZM9.05166 22.1338C8.86515 21.6361 8.31052 21.3839 7.81285 21.5704C7.31518 21.757 7.06294 22.3115 7.24945 22.8092L9.05166 22.1338ZM14.9479 22.1338C14.5339 23.2387 13.3914 24.0754 11.9998 24.0754V26C14.1624 26 16.0435 24.6945 16.7501 22.8092L14.9479 22.1338ZM11.9998 24.0754C10.6082 24.0754 9.46571 23.2387 9.05166 22.1338L7.24945 22.8092C7.95598 24.6945 9.83716 26 11.9998 26V24.0754Z"
            fill="currentcolor" />
          <circle cx="19.5" cy="4.5" r="4" fill="#CB122D" stroke="#161616" />
        </svg>

      </div>
      <div class=" p-2 rounded-full" :class="isLightTheme ? 'bg-[#161616]' : 'bg-white'">
        <img src="../assets/avatar.png" alt="Avatar" class="w-8 h-8 rounded-full" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      logo: `<svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M23 9.29787C15.4325 9.29787 9.29787 15.4325 9.29787 23C9.29787 30.5675 15.4325 36.7021 23 36.7021C30.5675 36.7021 36.7021 30.5675 36.7021 23C36.7021 18.8764 34.8473 15.5208 32.4617 13.2945C32.0976 12.9547 32.0003 12.4069 32.2584 11.981L36.1818 5.50556C36.4878 5.00055 37.1638 4.86791 37.6194 5.24346C42.7297 9.45543 46 15.8463 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C25.418 0 27.7563 0.37469 29.9555 1.07177C30.5194 1.2505 30.7747 1.89192 30.5149 2.42334L27.2993 9.001C27.0792 9.45114 26.5616 9.66072 26.0751 9.54082C25.0894 9.29787 24.3337 9.29787 23 9.29787Z"
        fill="url(#paint0_linear_33_776)" />
      <defs>
        <linearGradient id="paint0_linear_33_776" x1="6.3617" y1="7.34043" x2="39.3936"
          y2="38.9043" gradientUnits="userSpaceOnUse">
          <stop stop-color="#CB122D" />
          <stop offset="1" stop-color="#FF8300" />
        </linearGradient>
      </defs>
    </svg>`
    };
  },
  name: 'Navbar',

  computed: {
    ...mapGetters(['isLightTheme'])
  },
  methods: {
    ...mapMutations(['toggleTheme'])
  }
};

</script>

<style scoped></style>
