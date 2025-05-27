<template>
  <div class="p-4 rounded-xl shadow-sm w-[800px]" :class="isDarkTheme ? 'bg-[#1E1E2F]' : 'bg-white'">
    <!-- Header -->
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center gap-2">
        <button class="p-3 rounded-full bg-blue text-white border hover:bg-white  transition-hover">
          <span v-html="DollarIcon"></span>
        </button>
        <h2 class="font-semibold" :class="isDarkTheme ? 'text-primary' : 'text-indigo-900'">Campaign History</h2>
      </div>
      <div class="flex gap-2">
        <button class="h-11 w-11  bg-transparent hover:bg-white  border-Primary-dark rounded-full cursor-pointer"
          :class="isDarkTheme ? (index === 0 ? 'border-primary text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')"
          @mouseenter="hover = true" @mouseleave="hover = false">
          <v-icon name="co-plus" scale="1.4" :color="isDarkTheme && hover ? 'black' : undefined"></v-icon>
        </button>

        <button class="h-11 w-11  bg-transparent hover:bg-white  border-Primary-dark rounded-full cursor-pointer"
          :class="isDarkTheme ? (index === 0 ? 'border-primary text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')"
          @mouseenter="hover2 = true" @mouseleave="hover2 = false">
          <v-icon name="co-pencil" scale="1.3" :color="isDarkTheme && hover2 ? 'black' : undefined"></v-icon>
        </button>

      </div>
    </div>

    <!-- Card Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div v-for="(card, index) in cards" :key="index" class="rounded-2xl p-4 w-full max-w-sm shadow-sm"
        :class="isDarkTheme ? 'bg-[#100C25]' : 'bg-[#F4F0FD]'">
        <!-- Header Row -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <button class="p-3 rounded-2xl" :class="card.bgClass">
              <span v-html="card.icon"></span>
            </button>
            <div>
              <h2 class="text-lg" :class="isDarkTheme ? 'text-primary' : 'text-[#2E1F79]'">{{ card.title }}</h2>
              <p class="text-sm text-gray-500">
                Status: <span class=" font-medium" :class="isDarkTheme ? 'text-white' : 'text-[#2E1F79]'">{{ card.status
                  }}</span>
              </p>
            </div>
          </div>
          <button
            class="h-10 w-10 bg-transparent hover:bg-white border-Primary-dark rounded-full flex items-center justify-center cursor-pointer"
            @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null">
            <v-icon name="la-angle-down-solid" scale=".6" :color="isDarkTheme
              ? (hoverIndex === index ? 'black' : 'white')
              : '#C0A6B'"></v-icon>
          </button>

        </div>

        <!-- Type and Date -->
        <div class="flex justify-between items-center mt-6">
          <div class="flex items-center space-x-2">
            <div class="bg-white rounded-full p-2">
              <span v-html="TypeIcon"></span>
            </div>
            <div>
              <p class="text-xs text-gray-500">Type</p>
              <p class="text-sm font-medium" :class="isDarkTheme ? 'text-white' : 'text-[#2E1F79]'">{{ card.type }}</p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <div class="bg-white rounded-full p-2">
              <span v-html="CalendarIcon"></span>
            </div>
            <div>
              <p class="text-xs text-gray-500">Start Date</p>
              <p class="text-sm font-medium " :class="isDarkTheme ? 'text-white' : 'text-[#2E1F79]'">{{ card.date }}</p>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <button class="mt-6 w-full py-2 rounded-full bg-[#2E1F79] text-white hover:bg-[#241964] transition cursor-pointer">
          Send email
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  AddIcon,
  AdwordIcon,
  ArrowDownIcon,
  DollarIcon,
  PencilIcon,
  TwitterIcon,
  CalendarIcon,
  TypeIcon,
  getAddIcon,
  getPenIcon,
  getDropdownIcon
} from '../../assets/icons';

export default {
  name: 'CampaignCard',
  data() {
    return {
      DollarIcon,
      AddIcon,
      PencilIcon,
      ArrowDownIcon,
      CalendarIcon,
      TypeIcon,
      hover: false,
      hover2: false,
      hover3: false,
      hoverIndex: null,
      getAddIcon,
      getPenIcon,
      getDropdownIcon,
      cards: [
        {
          icon: AdwordIcon,
          title: 'Google Adwords',
          status: 'Connected',
          type: 'Web Marketing',
          date: '18.02.2025',
          bgClass: 'bg-green-400 hover:text-black transition-hover'
        },
        {
          icon: TwitterIcon,
          title: 'X-twitter Listening',
          status: 'Engaged',
          type: 'Social Media',
          date: '06.03.2025',
          bgClass: 'bg-blue hover:bg-white hover:text-black transition-hover'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['isDarkTheme'])
  }
};
</script>
