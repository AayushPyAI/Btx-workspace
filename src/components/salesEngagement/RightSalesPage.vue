<template>
  <div class="mx-auto overflow-hidden" :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
    <div class="p-6">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Miguel Braswell"
            class="w-8 h-8 rounded-full object-cover" />
          <div>
            <p class="text-xs text-gray-400 leading-none">Contact</p>
            <p class="text-sm font-medium " :class="isDarkTheme ? 'text-white' : 'text-[#2d1c57]'">Miguel Braswell</p>
          </div>
        </div>

        <!-- Company Info -->
        <div class="flex items-center space-x-2">
          <div class="bg-white p-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#2d1c57]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 21h18M6 10h12M6 6h12M6 14h12M3 6v12h18V6" />
            </svg>
          </div>
          <div>
            <p class="text-xs text-gray-400 leading-none">Company</p>
            <p class="text-sm font-medium "  :class="isDarkTheme ? 'text-white' : 'text-[#2d1c57]'">Ominey Canada Ltd</p>
          </div>
        </div>
      </div>
      <!-- Status Icons with Gradient Background - Updated with SVG icons --> 
      <div class="w-full mt-4">
        <!-- Gradient Background with Positioned Icons -->
        <div class="icon-bg w-full flex items-center justify-between pt-[2px] px-[4px]">
          <div v-for="(status, index) in statuses" :key="index" class="flex flex-col items-center">
            <div class="w-10 h-10 rounded-full flex items-center justify-center mb-1"
              :class="index >= 2 ? 'bg-[#1C0A6B] shadow-md' : 'bg-white shadow-md'">
              <button
                class="flex justify-center items-center p-3 rounded-full bg-transparent transition-hover w-[33px] h-[33px]"
                :class="index >= 2 ? 'text-white hover:bg-white/20 hover:text-white' : 'text-heading hover:bg-white hover:text-black'">
                <span v-html="DollarIcon" />
              </button>
            </div>
          </div>
        </div>

        <!-- Labels container - positioned absolutely below the icon bg -->
        <div class="flex justify-between px-[4px] -mt-1">
          <div v-for="(status, index) in statuses" :key="index" class="w-10 text-center">
            <span class="text-xs font-medium ">{{ status.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { DollarIcon } from '../../assets/icons';
export default {
  name: 'ContactCard',
  data() {
    return {
      DollarIcon,
      statuses: [
        { label: 'Lead', icon: 'user' },
        { label: 'Working', icon: 'briefcase' },
        { label: 'Qualified', icon: 'check' },
        { label: 'Converted', icon: 'dollar' }
      ],
      gradientClasses: [
        'bg-gradient-to-br from-blue-400 to-blue-600',
        'bg-gradient-to-br from-purple-400 to-purple-600',
        'bg-gradient-to-br from-green-400 to-green-600',
        'bg-gradient-to-br from-yellow-400 to-yellow-600'
      ]
    }
  },
  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
}
</script>
<style scoped>
/* Removed the icon-bg style as we're now using a direct gradient */
.icon-bg {
  height: 50px;
  background-image: url('../../assets/SalesImageBg.png');
  /* Adjust path if needed */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>