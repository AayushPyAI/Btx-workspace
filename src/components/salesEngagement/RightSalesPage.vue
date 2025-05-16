<template>
  <div class="mx-auto bg-[#F8F6FC] overflow-hidden">
    <div class="p-6">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Miguel Braswell"
            class="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p class="text-xs text-gray-400 leading-none">Contact</p>
            <p class="text-sm font-medium text-[#2d1c57]">Miguel Braswell</p>
          </div>
        </div>

        <!-- Company Info -->
        <div class="flex items-center space-x-2">
          <div class="bg-white p-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#2d1c57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M6 10h12M6 6h12M6 14h12M3 6v12h18V6" />
            </svg>
          </div>
          <div>
            <p class="text-xs text-gray-400 leading-none">Company</p>
            <p class="text-sm font-medium text-[#2d1c57]">Ominey Canada Ltd</p>
          </div>
        </div>
      </div>

      <!-- Status Icons with Gradient Background - Updated with SVG icons -->
      <div class="flex justify-between mt-8">
        <div v-for="(status, index) in statuses" :key="index" class="flex flex-col items-center w-1/4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center mb-2"
               :class="gradientClasses[index]">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="status.icon === 'user'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              <path v-if="status.icon === 'briefcase'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              <path v-if="status.icon === 'check'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              <path v-if="status.icon === 'dollar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="text-xs font-medium text-[#2d1c57] text-center">{{ status.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data() {
    return {
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
  }
}
</script>