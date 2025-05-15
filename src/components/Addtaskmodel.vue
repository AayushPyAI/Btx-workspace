<template>
  <transition name="slide-fade">
    <div
    
      class="absolute  inset-0 z-50 flex justify-center items-center bg-opacity-50"
      @click.self="$emit('close')"
    >
      <div
      :class="isDarkTheme? 'bg-[#1c0a6b] text-white':'bg-[#e7e9eb] text-black' "
        class="h-3/4  bg-[#151223] bg-opacity-95 text-white flex flex-col"
        style="width: 100%; max-width: 600px;"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-4">
          <button
            @click="$emit('close')"
            class=" bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 px-10 py-6 overflow-y-auto" :class="isDarkTheme?'text-white':'text-black'">
          <h2 class="text-3xl font-bold mb-4">Create New Task</h2>
          <!-- Your form goes here -->
          <p >Modal Content Here...</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import {mapGetters} from 'vuex'

 export default{

    computed:{
        ...mapGetters(['isDarkTheme'])
    }
 }

     
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.4s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0%);
}
</style>
