<template>
    <div class="relative w-full h-[90px]">
      <nav class="fixed w-full left-0 h-[90px] top-0">
        <div class="mx-auto max-w-[1513px] h-[90px]">
          <div class="relative w-full h-[90px] rounded-[45px] bg-white shadow-lg">
            <!-- Right arrow button -->
            <button @click="handleRightArrowClick" class="absolute w-16 h-16 top-[13px] right-[16px] rounded-[32px] border-2 border-solid border-[#f2f4f6] flex items-center justify-center hover:bg-gray-50">
              <img class="w-3.5 h-3.5" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/chevron-right.svg" alt="Arrow" />
            </button>
  
            <!-- Orange schedule section -->
            <div class="absolute w-[1053px] h-[90px] top-0 right-0">
              <div class="absolute w-[1047px] h-[90px] top-0 left-0 bg-[#ff8300] rounded-[47.5px]">
                <div class="absolute w-[1053px] h-[76px] top-2 left-0">
                  <!-- Left section with time and controls -->
                  <div class="absolute w-[777px] h-[76px] top-0 left-0">
                    <div class="absolute w-[777px] h-[58px] top-2.5 left-0 rounded-[47.5px] [background:linear-gradient(90deg,rgba(108,59,7,0.08)_0%,rgba(126,69,8,0.15)_100%)]"></div>
                    <div class="absolute top-7 left-[265px] font-medium text-white text-[15px]">{{ currentTime }}</div>
                    <div class="absolute top-8 left-[88px] font-medium text-white text-xs">{{ duration }}</div>
  
                    <!-- Control buttons -->
                    <button @click="handleLeftArrowClick" class="absolute w-12 h-12 top-[15px] left-[147px] rounded-3xl border-[1.4px] border-solid border-[#00000014] flex items-center justify-center hover:bg-white/10">
                      <img class="w-[11px] h-[11px]" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/chevron-left.svg" alt="Arrow" />
                    </button>
  
                    <button @click="handleControlClick" class="absolute w-12 h-12 top-[15px] left-[725px] rounded-3xl border-[1.4px] border-solid border-[#00000014] flex items-center justify-center hover:bg-white/10">
                      <img class="w-[17px] h-3.5" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/player-play.svg" alt="Group" />
                    </button>
  
                    <!-- User avatars section -->
                    <div class="absolute w-[157px] h-[58px] top-2.5 left-[365px] bg-white rounded-[29px]">
                      <div class="relative w-[82px] h-12 top-[5px] left-1">
                        <div v-for="(user, index) in users.slice(0, 2)" :key="user.id"
                             :class="['absolute w-12 h-12 top-0', index === 1 ? 'left-[34px]' : 'left-0']">
                          <div :class="['relative', index === 1 ? 'w-[52px] h-[52px] -top-0.5 -left-0.5 bg-white rounded-[25px]' : 'w-12 h-12 bg-[#d9d9d9] rounded-3xl border border-solid border-white']">
                            <img :src="user.avatarUrl" :alt="user.name" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <img class="absolute w-[66px] h-[74px] top-0 left-0" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/users.svg" alt="Mask group" />
  
                    <!-- Time indicator -->
                    <div class="absolute w-[57px] h-[75px] top-px left-[495px]">
                      <div class="relative w-[55px] h-[75px]">
                        <img class="absolute w-2.5 h-[9px] top-[62px] left-[23px]" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/chevron-down.svg" alt="Polygon" />
                        <img class="absolute w-[55px] h-7 top-0 left-0" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/calendar.svg" alt="Union" />
                        <div class="absolute w-0.5 h-[33px] top-[29px] left-[27px] bg-[#000000b2]"></div>
                        <div class="top-[5px] left-2 text-[11px] absolute font-medium text-white">{{ currentTime }}</div>
                      </div>
                    </div>
  
                    <div class="absolute w-px h-[43px] top-[18px] left-[234px] bg-gray-300"></div>
                  </div>
  
                  <!-- Right section with avatars -->
                  <div class="absolute w-36 h-[54px] top-2.5 left-[903px]">
                    <div class="absolute w-[125px] h-[54px] top-0 left-[19px] rounded-[47.5px_23px_25px_47.5px] [background:linear-gradient(270deg,rgba(254,145,30,0)_11%,rgba(254,145,30,1)_22%)]"></div>
                    <div class="absolute w-[82px] h-12 top-[3px] left-0">
                      <div class="relative h-12">
                        <div v-for="(user, index) in users.slice(2, 4)" :key="user.id"
                             :class="['absolute w-12 h-12 top-0', index === 1 ? 'left-[34px]' : 'left-0']">
                          <div :class="['relative', index === 1 ? 'w-[52px] h-[52px] -top-0.5 -left-0.5 bg-white rounded-[25px]' : 'w-12 h-12 bg-[#d9d9d9] rounded-3xl border border-solid border-white']">
                            <img :src="user.avatarUrl" :alt="user.name" class="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div class="top-7 left-[828px] text-[15px] absolute font-medium text-white">{{ currentTime }}</div>
                  <div class="absolute w-px h-[43px] top-[18px] left-[804px] bg-gray-300"></div>
                </div>
              </div>
            </div>
  
            <!-- Title -->
            <div class="absolute top-[31px] left-[27px] font-medium text-black text-2xl">{{ title }}</div>
  
            <!-- Date selector -->
            <button @click="handleDateClick" class="absolute w-[169px] h-14 top-[17px] left-[199px] rounded-[28px] border border-solid border-[#adb9c8] flex items-center hover:bg-gray-50">
              <div class="absolute w-[46px] h-[46px] top-[5px] left-1 bg-[#e5ebf1] rounded-[23px]"></div>
              <img class="absolute w-5 h-5 top-[17px] left-4" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/calendar-event.svg" alt="Calendar" />
              <span class="absolute top-[17px] left-[63px] font-medium text-black text-lg">{{ currentDate }}</span>
            </button>
          </div>
        </div>
  
        <!-- Logo -->
        <img class="absolute w-[46px] h-[46px] top-[22px] left-0" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/brand-vue.svg" alt="Logo" />
  
        <!-- Notification button -->
        <button @click="handleNotificationClick" class="absolute w-[61px] h-[61px] top-[15px] right-[133px] bg-[#222222] rounded-[30.5px] flex items-center justify-center hover:bg-[#333333]">
          <div class="relative w-[23px] h-[26px]">
            <div class="absolute w-[23px] h-[21px] top-0 left-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="absolute w-[22px] h-5 top-px left-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <div v-if="hasNotifications" class="absolute w-[9px] h-[9px] top-0 left-3.5 bg-[#cb122d] rounded-[4.5px] border border-solid border-[#161616]"></div>
            </div>
            <img class="absolute w-2.5 h-1 top-[22px] left-1.5" src="https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/bell.svg" alt="Vector" />
          </div>
        </button>
  
        <!-- User profile -->
        <div @click="handleProfileClick" class="absolute w-[61px] h-[61px] top-[15px] right-[61px] bg-[#222222] rounded-[30.5px] overflow-hidden cursor-pointer hover:opacity-90">
          <img :src="currentUser.avatarUrl" :alt="currentUser.name" class="w-full h-full object-cover" />
        </div>
      </nav>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  // Props / state
  const currentTime = ref('2:15 PM');
  const duration = ref('36mm');
  const title = ref('Your Schedule');
  const currentDate = ref('March 28');
  const hasNotifications = ref(true);
  
  const users = ref([
    { id: 1, name: 'User 1', avatarUrl: 'https://i.pravatar.cc/52?img=1' },
    { id: 2, name: 'User 2', avatarUrl: 'https://i.pravatar.cc/52?img=2' },
    { id: 3, name: 'User 3', avatarUrl: 'https://i.pravatar.cc/52?img=3' },
    { id: 4, name: 'User 4', avatarUrl: 'https://i.pravatar.cc/52?img=4' }
  ]);
  
  const currentUser = ref({
    name: 'Current User',
    avatarUrl: 'https://i.pravatar.cc/61?img=5'
  });
  
  // Event handlers
  const handleRightArrowClick = () => { console.log('Right arrow clicked'); };
  const handleLeftArrowClick = () => { console.log('Left arrow clicked'); };
  const handleControlClick = () => { console.log('Control clicked'); };
  const handleDateClick = () => { console.log('Date selector clicked'); };
  const handleNotificationClick = () => { console.log('Notification clicked'); hasNotifications.value = !hasNotifications.value; };
  const handleProfileClick = () => { console.log('Profile clicked'); };
  
  // Update time every second
  onMounted(() => {
    setInterval(() => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }, 1000);
  });
  </script>
  