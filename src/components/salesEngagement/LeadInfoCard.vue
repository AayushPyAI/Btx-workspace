<template>
  <div class="w-[360px] p-4 rounded-2xl shadow-md   border-gray-200" :class="isDarkTheme ? 'bg-[#25203C] text-primary-dark' : 'bg-white text-primary-light'">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
         <button
                    class="p-3 rounded-full bg-blue text-white border hover:bg-white  transition-hover"
                    :class="isDarkTheme ? (index === 0 ?'border-Primary-dark text-muted' : 'border-Primary-dark text-muted'): (!index === 0 ?'border-Primary' : 'border-Primary-dark')">
                    <span v-html="DollarIcon" />
                </button>
        <h2 class=" font-semibold">Lead Information</h2>
      </div>
      <div class="flex gap-2">
            <button
                    class="p-3 bg-transparent hover:bg-white border-Primary-dark rounded-full"
                    :class="isDarkTheme ? (index === 0 ?'border-primary text-muted' : 'border-Primary-dark text-muted'): (!index === 0 ?'border-Primary' : 'border-Primary-dark')">
                     <span v-html="getAddIcon(isDarkTheme)" />
                </button>
           <button
                    class="p-3 bg-transparent hover:bg-white border-Primary-dark rounded-full"
                    :class="isDarkTheme ? (index === 0 ?'border-Primary-dark text-muted' : 'border-Primary-dark text-muted'): (!index === 0 ?'border-Primary' : 'border-Primary-dark')">
                    <span v-html="getPenIcon(isDarkTheme)" />
                </button>
      </div>
    </div>

    <!-- Info Section -->
    <div class="space-y-4 ml-3">
      <!-- Job Title -->
      <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
       <span v-html="BriefCaseIcon"/>
    </div>
    <div>
        <p class="text-sm text-gray-400">Job Title</p>
        <p class=" text-sm font-semibold">Administrative Assistant</p>
    </div>
</div>

<!-- Phone -->
<div class="flex items-start gap-3">
    <div class="bg-gray-100 p-2 rounded-full">
            <span v-html="CallIcon"/>
            
        </div>
        <div>
            <p class="text-sm text-gray-400">Phone</p>
            <p class=" text-sm font-semibold">+11 705 555-1207</p>
        </div>
    </div>
    
    <!-- Email -->
    <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
            <span v-html=" InboxIcon"/>
            
        </div>
        <div>
            <p class="text-sm text-gray-400">Email</p>
            <p class="text-sm font-semibold">mbraswell@ominex.com</p>
        </div>
    </div>
    
    <!-- Source -->
    <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
            <span v-html=" RingIcon"/>
   
        </div>
        <div>
          <p class="text-sm text-gray-400 mb-1">Source</p>
          <div class="flex gap-3">
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- Skype -->
              <svg class="w-4 h-4 text-[#00AFF0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm.06 14.61c-1.3 0-2.6-.39-3.56-1.02a.75.75 0 0 1 .82-1.26c.67.43 1.53.73 2.49.73 1.24 0 2.09-.57 2.09-1.45 0-.83-.63-1.17-2.18-1.53-1.9-.45-3.12-1.14-3.12-2.71 0-1.49 1.17-2.48 2.95-2.61V6.5a.75.75 0 0 1 1.5 0v.31c.98.1 1.89.43 2.59.87a.75.75 0 1 1-.79 1.28 4.6 4.6 0 0 0-2.29-.68c-1.2 0-1.98.52-1.98 1.31 0 .82.7 1.18 2.34 1.55 2 .48 2.96 1.26 2.96 2.71 0 1.5-1.14 2.58-3.12 2.75v.26a.75.75 0 0 1-1.5 0v-.27z"/>
              </svg>
            </div>
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- Telegram -->
              <svg class="w-4 h-4 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.05 2.84 2.63 10.31c-1.45.58-1.44 1.4-.25 1.78l4.89 1.52 2.27 7.09c.3.94.53 1.3.86 1.35.34.05.73-.12.97-.33l3.34-3.1 4.59 3.38c.84.46 1.44.23 1.66-.78l2.76-12.99c.28-1.3-.5-1.9-1.67-1.3z"/>
              </svg>
            </div>
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- LinkedIn -->
              <svg class="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zm.02 6h-3v12h3v-12zM9 9.5h2.85v1.71c.39-.65 1.31-1.81 3.18-1.81 3.4 0 4.02 2.24 4.02 5.15v6.95h-3v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.4v6.57h-3v-12z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import { AddIcon, BriefCaseIcon, CallIcon, DollarIcon,InboxIcon, PencilIcon,
    RingIcon
 } from '../../assets/icons';

import { getAddIcon,getPenIcon } from '../../assets/icons';

export default {
  name: 'LeadInformationCard',
  data(){
    return{
        DollarIcon,
        AddIcon,
        PencilIcon,
        BriefCaseIcon,
        CallIcon,
        InboxIcon,
        RingIcon,
        getAddIcon,
        getPenIcon
    }
  },
  computed: {
        ...mapGetters(['isDarkTheme'])
    },
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>