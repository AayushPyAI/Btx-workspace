<template>
  <div class="p-6 text-white box-border">
    <!-- Header -->
    <div class="flex items-center gap-4 flex-wrap mb-6 whitespace-nowrap">
      <h2 class="text-xl sm:text-2xl font-semibold flex-shrink-0"
        :class="isDarkTheme ? 'text-white' : 'text-primary-light'">
        New Leads
      </h2>
      <span class=" text-xl flex-shrink-0 "
        :class="isDarkTheme ? '  border-b-2 border-white text-white' : ' border-blue text-primary-light'">7 <span
          class=" text-xl" :class="isDarkTheme ? ' text-[#9992BC]' : 'text-primary-light'"> Leads</span></span>


      <button
        class="p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
        :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
        <span v-html="SearchIcon" />
      </button>
      <button
        class="p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
        :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
        <span v-html="FilterIcon" />
      </button>

      <div class="flex items-center gap-3 flex-nowrap overflow-x-auto scrollbar-hide">
        <button v-for="filter in filters" :key="filter" @click="selectedFilter = filter" :class="[
          'px-4 py-2 rounded-full border text-sm transition-all flex-shrink-0 cursor-pointer transition-hover font-bold',
          selectedFilter === filter
            ? 'bg-white text-black'
            : 'bg-transparent hover:bg-white hover:text-black',
          isDarkTheme
            ? 'border-Primary text-secondary'
            : 'border-Primary-dark text-primary-light',
        ]">
          <span v-if="filter === 'Hot Prospect'">🔥</span> {{ filter }}
        </button>
      </div>
    </div>

    <!-- Cards Container -->
    <div class="relative">
      <div class="flex flex-nowrap gap-6 overflow-x-auto pb-4 scrollbar-hide pt-5 pl-2.5">
        <div v-for="(lead, index) in filteredLeads" :key="index"
          class="rounded-2xl p-4 relative flex flex-col gap-4 w-[325px] h-[269px] flex-shrink-0 cardhover bg-cover bg-center bg-no-repeat"
          :class="isDarkTheme ? 'card-darkThemebg' : 'card-lightThemebg'">
          <div class="absolute top-0 right-2.5 flex gap-2">
            <button
              class="flex justify-center items-center p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover w-[53px] h-[53px]"
              :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
              <span v-html="ArrowRightIcon" />
            </button>
          </div>

          <img :src="lead.avatar" alt="Avatar" class="w-12 h-12 rounded-full border border-gray-400" />

          <div>
            <h3 class="text-[26px] font-medium mb-1" :class="isDarkTheme ? 'text-white' : 'text-primary-light'">
              {{ lead.name }}
            </h3>
            <p class="text-[16px] below-text">{{ lead.role }}</p>
          </div>

          <div class="py-4 rounded-lg w-full">
            <div class="flex justify-between items-start gap-4">
              <!-- Source Section -->
              <div class="flex flex-col gap-2">
                <span class="text-[12px]" :class="isDarkTheme ? 'text-muted' : 'below-text'">Source</span>
                <div class="flex gap-2">
                  <button v-for="(source, i) in lead.sources" :key="i" class="px-2 py-1 rounded-full text-[12px]"
                    :class="isDarkTheme
                      ? 'text-white bg-secondary'
                      : 'btn-text bg-secondary-dark'
                      ">
                    {{ source }}
                  </button>
                </div>
              </div>

              <!-- Hot Prospect Section -->
              <div class="flex flex-col gap-2">
                <span class="text-[12px]" :class="isDarkTheme ? 'text-muted' : 'below-text'">
                  <span v-if="lead.tag === 'Hot Prospect'">🔥</span>
                  {{ lead.tag }}
                </span>
                <div class="flex items-center space-x-1 rounded-full px-2 py-1"
                  :class="!isDarkTheme ? 'border-Secondary-light' : ' border-Secondary'">
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
import { mapGetters } from "vuex";
import { ArrowRightIcon, SearchIcon, FilterIcon } from "../assets/icons";

export default {
  name: "NewLeads",
  data() {
    return {
      selectedFilter: "All",
      ArrowRightIcon,
      SearchIcon,
      FilterIcon,
      filters: [
        "All",
        "Hot Prospect",
        "High Interest",
        "Medium Interest",
        "Low Interest",
        "No Interest",
      ],
      leads: [
        {
          name: "Jan Doe",
          role: "Marketing Director at Microsoft",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          tag: "Hot Prospect",
        },
        {
          name: "Darlene Robertson",
          role: "Finance Manager at Ford",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          tag: "High Interest",
        },
        {
          name: "Janah Jude",
          role: "Web Developer at Binary By",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          tag: "Medium Interest",
        },
        {
          name: "Wade Warren",
          role: "Operations Manager at Zenith",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          tag: "Medium Interest",
        },
        {
          name: "Janah Jude",
          role: "Web Developer at Binary By",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          tag: "Medium Interest",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["isDarkTheme"]),

    filteredLeads() {
      if (this.selectedFilter === "All") return this.leads;
      return this.leads.filter((lead) => lead.tag === this.selectedFilter);
    },
    cardStyle() {
      return {
        backgroundImage: `url(${this.backgroundImageUrl})`,
      };
    },
  },
  methods: {
    // ...mapMutations(['toggleTheme'])
  },
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

.card {
  background-image: url("./../assets/cardbg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
}

.hover-circle:hover circle {
  fill: white;
  cursor: pointer;
}

.card-darkThemebg {
  background-image: url("./../assets/card-darkbg.png");
}

.card-lightThemebg {
  background-image: url("./../assets/cardLightbg.png");
}
</style>
