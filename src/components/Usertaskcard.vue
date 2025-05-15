<template>
  <div class="p-6 text-white box-border">
    <!-- Header -->
    <div class="flex items-center gap-4 flex-wrap mb-6 whitespace-nowrap">
      <h2 class="text-xl sm:text-2xl font-semibold flex-shrink-0" :class="isDarkTheme ? 'text-primary' : 'text-blue'">
        Your Daily Tasks
      </h2>
      <span class=" text-xl flex-shrink-0 "
        :class="isDarkTheme ? '  border-b-2 border-white text-white' : ' border-blue text-blue'">16 <span
          class=" text-xl" :class="isDarkTheme ? ' text-[#9992BC]' : 'text-blue'"> Tasks</span></span>

      <button
        class="p-3 rounded-full bg-transparent border border-Primary text-heading hover:bg-white hover:text-black transition-hover"
        :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
        <span v-html="SearchIcon" />

      </button>
      <button
        class="p-3 rounded-full bg-transparent border border-Primary text-heading hover:bg-white hover:text-black transition-hover"
        :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
        <span v-html="FilterIcon" />

      </button>

      <div class="flex items-center gap-3 flex-nowrap overflow-x-auto scrollbar-hide">
        <button v-for="filter in filters" :key="filter" @click="selectedFilter = filter" :class="[
          'px-4 py-2 rounded-full border border-Primary text-sm transition-all flex-shrink-0 cursor-pointer font-bold transition-hover',
          selectedFilter === filter
            ? 'bg-white text-black'
            : 'bg-transparent hover:bg-white hover:text-black', isDarkTheme ? 'border-Primary text-secondary' : 'border-Primary-dark text-blue'
        ]">
          <span v-if="filter === 'Hot'">🔥</span> {{ filter }}
        </button>
      </div>
    </div>

    <!-- Cards Container -->
    <div class="relative">
      <div class="flex flex-nowrap gap-6 overflow-x-auto pb-4 scrollbar-hide pl-2.5">
        <div v-for="(task, index) in filteredTasks" :key="index"
          class="rounded-2xl p-4 relative  flex flex-col gap-4 min-w-[385px] min-h-[280px] flex-shrink-0 cardhover bg-contain bg-center bg-no-repeat "
          :class="isDarkTheme
            ? (index === filteredTasks.length - 1
              ? 'lastIndexdark'
              : (index === 0 ? 'task-card-active-dark' : 'task-card-nonActive-dark'))
            : (index === filteredTasks.length - 1
              ? 'lastIndexLight'
              : (index === 0 ? 'task-card-active-light' : 'task-card-nonActive-Light'))">
          <!-- Social Icons at top right -->
          <div class="absolute top-6 right-0 flex gap-2">
            <button
              class="flex justify-center items-center p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover w-[53px] h-[53px]"
              :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
              <span v-html="NotificationIcon" />
            </button>
            <button
              class="flex justify-center items-center p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover w-[53px] h-[53px]"
              :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
              <span v-html="ArrowRightIcon" />
            </button>
          </div>

          <div class="flex items-center gap-2 pt-6">
            <!-- Avatar Section -->
            <img :src="task.avatar" alt="Avatar" class="w-12 h-12 rounded-full border border-gray-400" />

            <div>
              <h3 class="text-[17px] font-bold mb-1 "
                :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')">
                {{ task.name }}
              </h3>
              <p class="text-[12px]"
                :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-muted') : (index === 0 ? 'text-primary' : 'text-secondary')">
                {{ task.role }}
              </p>
            </div>
          </div>

          <div class="py-4 rounded-lg w-full">
            <div class="flex justify-between items-start gap-4">
              <div class="text-primary w-full">
                <!-- Google Meet Call Section -->

                <div v-show="task.type === 'meeting'" class="flex items-center rounded-r-2xl text-white py-2.5">
                  <!-- Left Icon -->
                  <div class="flex items-center justify-center w-12 h-12 rounded-full border bg-opacity-10 mr-4">
                    <span v-html="GoogleMeetIcon" />

                  </div>

                  <!-- Right Content -->
                  <div class="flex flex-col justify-center">
                    <span class="text-[22px]"
                      :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')">Google
                      Meet Call</span>
                    <div class="flex items-center gap-2 text-sm ">
                      <!-- Avatars -->
                      <div class="flex -space-x-2">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg"
                          class="w-6 h-6 rounded-full border-2 border-white" />
                        <img src="https://randomuser.me/api/portraits/men/33.jpg"
                          class="w-6 h-6 rounded-full border-2 border-white" />
                      </div>
                      <span
                        :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')">March
                        28, 2023</span>
                      <span
                        :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-muted') : (index === 0 ? 'text-secondary-faded' : 'text-secondary')">at</span>
                      <span
                        :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')">
                        2
                        PM</span>
                    </div>
                  </div>
                </div>

                <!-- --Offers-- -->
                <div v-show="task.type === 'offer'" class="flex items-center rounded-r-2xl text-white py-2.5 gap-2">
                  <div>
                    <span v-html="OfferIcon" />
                  </div>

                  <div class="flex flex-col justify-center gap-1">
                    <p class="text-[22px]" :class="isDarkTheme ? 'text-primary' : 'text-primary-light'">Send Offer</p>
                    <p :class="isDarkTheme ? 'text-primary' : 'text-primary-light'">
                      <span class="text-[13px] text-[#ADB9C8] mr-1">
                        Amount
                      </span>
                      $20,000
                    </p>
                  </div>
                </div>

                <!-- Status & Actions -->

                <div class="flex flex-col mt-10">
                  <label class="text-xs mb-1"
                    :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-muted')">Status</label>

                  <div class="flex text-white w-full max-w-xs justify-between min-w-[100%] gap-5">
                    <div class="flex items-center gap-10 justify-between px-3 py-2 rounded-full  border-SecondaryOne">
                      <div class="flex items-center gap-2">
                        <img src="https://randomuser.me/api/portraits/men/31.jpg" class="w-6 h-6 rounded-full"
                          alt="User" />
                        <span class="text-sm"
                          :class="isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')">Call
                          Scheduled</span>
                      </div>
                      <span v-html="ChevronDownIcon" />

                    </div>
                    <div>
                      <div class="flex gap-2">
                        <button
                          class="h-[46px] w-[46px] bg-opacity-20 p-1 rounded-full flex items-center justify-center border-SecondaryOne"
                          :class="[task.type === 'meeting'
                            ? 'border bg-transparent'
                            : 'bg-[#FF8300] ', isDarkTheme ? (index === 0 ? 'text-primary-light' : 'text-primary') : (index === 0 ? 'text-primary' : 'text-primary-light')
                          ]">
                          <span v-html="EmailIcon" />
                        </button>
                        <button
                          class="bg-[#CB122D] h-[46px] w-[46px] bg-opacity-20 p-1 rounded-full flex items-center justify-center"
                          v-show="task.type === 'meeting'"
                          :class="isDarkTheme ? 'border-SecondaryOne' : 'border-Primary-dark'">
                          <span v-html="VideoIcon" />

                        </button>
                      </div>
                    </div>
                  </div>
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


import { mapGetters } from 'vuex'
import { SearchIcon, FilterIcon, OfferIcon, NotificationIcon, ArrowRightIcon, GoogleMeetIcon, VideoIcon, EmailIcon, ChevronDownIcon } from '../assets/icons.js';

export default {
  name: "NewLeads",
  data() {
    return {
      selectedFilter: "All",
      filters: ["All", "Hot", "Due Today", "Overdue", "Completed"],
      SearchIcon,
      FilterIcon,
      OfferIcon,
      ArrowRightIcon,
      NotificationIcon,
      GoogleMeetIcon,
      VideoIcon,
      EmailIcon,
      ChevronDownIcon,
      tasks: [
        {
          name: "Peter Thomas",
          role: "CEO at Modera lnk",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          tag: "Hot Prospect",
          type: "meeting",
        },
        {
          name: "Peter Thomas",
          role: "CEO Metamorphosis",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          tag: "High Interest",
          type: "offer",
        },
        {
          name: "John Wilson",
          role: "Brand manager at Summit Marketing",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          tag: "Medium Interest",
          type: "meeting",
        },
        {
          name: "Peter Thomas",
          role: "CEO  Metamorphosis",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          tag: "Medium Interest",
          type: "offer",
        },
      ],

    };
  },
  computed: {
    ...mapGetters(['isDarkTheme']),

    filteredTasks() {
      if (this.selectedFilter === "All") return this.tasks;
      return this.tasks.filter((task) => task.tag === this.selectedFilter);
    },
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

.task-card-active-light {
  background-image: url("./../assets/taskcard.png");

}

.task-card-active-dark {
  background-image: url("./../assets/taskCardLightbg.png");

}

.task-card-nonActive-Light {
  background-image: url("./../assets/taskCardLightbg.png");

}

.task-card-nonActive-dark {
  background-image: url("./../assets/taskCard3.png");
}

.lastIndexdark {
  background-image: url("./../assets/taskCard2.png");
}

.lastIndexLight {
  background-image: url("./../assets/taskCardLightbg.png");
}

.hover-circle:hover circle {
  fill: white;
  cursor: pointer;
}

.transition-hover {
  @apply transition-colors duration-300;
  cursor: pointer;
}
</style>
