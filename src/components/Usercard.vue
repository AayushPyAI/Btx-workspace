<template>
  <div class="p-6 text-white box-border">
    <!-- Header -->
    <div class="flex items-center gap-4 flex-wrap mb-6 whitespace-nowrap">
      <h2 class="text-xl sm:text-2xl font-semibold flex-shrink-0 text-primary">New Leads</h2>
      <span class="text-secondary text-xl flex-shrink-0">7 Leads</span>

      <button class="p-3 rounded-full  text-white bg-transparent border-Primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
        </svg>
      </button>

      <button class="p-3 rounded-full bg-transparent text-white border-Primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
        </svg>
      </button>

      <div class="flex items-center gap-3 flex-nowrap overflow-x-auto scrollbar-hide">
        <button v-for="filter in filters" :key="filter" @click="selectedFilter = filter" :class="[
          'px-4 py-2 rounded-full border border-Primary text-sm transition-all flex-shrink-0 cursor-pointer',
          selectedFilter === filter
            ? 'bg-white text-black'
            : 'bg-transparent text-secondary hover:bg-white hover:text-black'
        ]">
          <span v-if="filter === 'Hot Prospect'">🔥</span> {{ filter }}
        </button>
      </div>
    </div>

    <!-- Cards Container -->
    <div class="relative">
  <div class="flex flex-nowrap gap-6 overflow-x-auto pb-4 scrollbar-hide ">
    <div v-for="(lead, index) in filteredLeads" :key="index" class="rounded-2xl p-4 relative shadow-lg flex flex-col gap-4 
        w-[325px] h-[250px] flex-shrink-0 card">

      <!-- Social Icons at top right -->
      <div class="absolute top-0 right-2.5 flex gap-2">
        <img src="../assets/image.png" height="54px"  width="54px"/>
      </div>

      <img :src="lead.avatar" alt="Avatar" class="w-12 h-12 rounded-full border border-gray-400" />

      <div>
        <h3 class="text-[26px] font-semibold mb-1 text-primary">{{ lead.name }}</h3>
        <p class="text-[16px] text-secondary">{{ lead.role }}</p>
      </div>

      <div class="py-4 rounded-lg w-full">
        <div class="flex justify-between items-start gap-4">

          <!-- Source Section -->
          <div class="flex flex-col gap-2">
            <span class="text-muted text-[12px]">Source</span>
            <div class="flex gap-2">
              <button v-for="(source, i) in lead.sources" :key="i"
                class="bg-[#2E4C73] text-primary px-2 py-1 rounded-full text-[12px]">
                {{ source }}
              </button>
            </div>
          </div>

          <!-- Hot Prospect Section -->
          <div class="flex flex-col gap-2">
            <span class="text-muted text-[12px]">
              <span v-if="lead.tag === 'Hot Prospect'">🔥</span> {{ lead.tag }}
            </span>
            <div class="flex items-center space-x-1 border border-Secondary rounded-full px-2 py-1">
              <span class="w-3 h-3 bg-[#FA9A90] rounded-full"></span>
              <span class="w-3 h-3 bg-[#FEA269] rounded-full"></span>
              <span class="w-3 h-3 bg-[#FDDB67] rounded-full"></span>
              <span class="w-3 h-3 bg-[#A8FB66] rounded-full"></span>
              <span class="w-3 h-3 bg-[#363639] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>




</template>

<script>


export default {
  name: 'NewLeads',
  data() {
    return {
      selectedFilter: 'All',
      filters: ['All', 'Hot Prospect', 'High Interest', 'Medium Interest', 'Low Interest', 'No Interest'],
      leads: [
        {
          name: 'Jan Doe',
          role: 'Marketing Director at Microsoft',
          sources: ['LinkedIn', 'Facebook'],
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          tag: 'Hot Prospect'
        },
        {
          name: 'Darlene Robertson',
          role: 'Finance Manager at Ford',
          sources: ['LinkedIn', 'Facebook'],
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          tag: 'High Interest'
        },
        {
          name: 'Janah Jude',
          role: 'Web Developer at Binary By',
          sources: ['Typeform'],
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
          tag: 'Medium Interest'
        },
        {
          name: 'Wade Warren',
          role: 'Operations Manager at Zenith',
          sources: ['Typeform'],
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
          tag: 'Medium Interest'
        },
        {
          name: 'Janah Jude',
          role: 'Web Developer at Binary By',
          sources: ['Typeform'],
          avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
          tag: 'Medium Interest'
        }
      ]
    };
  },
  computed: {
    filteredLeads() {
      if (this.selectedFilter === 'All') return this.leads;
      return this.leads.filter(lead => lead.tag === this.selectedFilter);
    }
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.card{
  background-image: url('./../assets/cardbg.png');
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
}
</style>
