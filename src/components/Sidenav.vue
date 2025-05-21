<template>
  <div class="flex flex-col items-center  w-16 py-4 space-y-6 pt-7">
    <!-- Back button -->
    <button @click="goToSalesPage"
      class="rounded-full w-10 h-10 flex items-center justify-center hover:bg-white bg-transparent  cursor-pointer"
      :class="isDarkTheme ? 'hover:bg-white border-Primary' : 'border-Primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary"  fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>

    <!-- Spacer -->
    <div class="flex-grow mt-18"></div>

    <!-- Main navigation buttons -->
    <button class=" rounded-full w-10 h-10 flex items-center justify-center mb-1.5"
      :class="isDarkTheme ? 'bg-white' : 'bg-active-icon'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " :class="isDarkTheme ? 'text-secondary' : 'text-white'"
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </button>

    <button
      class=" rounded-full w-10 h-10 flex items-center justify-center mb-1.5 hover:bg-white bg-transparent  cursor-pointer"
      :class="isDarkTheme ? 'hover:bg-white border-Primary' : 'border-Primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    </button>

    <button
      class=" rounded-full w-10 h-10 flex items-center justify-center mb-1.5 hover:bg-white bg-transparent  cursor-pointer"
      :class="isDarkTheme ? 'hover:bg-white border-Primary' : 'border-Primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>

    <button
      class=" rounded-full w-10 h-10 flex items-center justify-center mb-1.5 hover:bg-white bg-transparent  cursor-pointer"
      :class="isDarkTheme ? 'hover:bg-white border-Primary' : 'border-Primary-dark'">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NewLeads",
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
  methods: {
    // ...mapActions(["OPENSALESPAGE"]),
     goToSalesPage() {
      this.$router.push('/salesEngagement')
    }
  },
}
</script>