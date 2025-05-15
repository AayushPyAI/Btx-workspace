<template>
  <transition name="slide-fade">
    <div class="fixed inset-0 z-50 flex justify-center items-center bg-transparent" @click.self="$emit('close')">
      <div :class="isDarkTheme ? 'bg-[#1c0a6b] text-white' : 'bg-[#e7e9eb] text-black'"
        class="w-full max-w-[450px] h-[75vh] rounded-2xl bg-opacity-95 flex flex-col overflow-hidden shadow-xl">
        <!-- Close Button -->
        <div class="flex justify-end p-4">
          <button @click="$emit('close')" class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
            Close
          </button>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 px-6 py-4 overflow-y-auto" :class="isDarkTheme ? 'text-white' : 'text-black'">
          <h2 class="text-2xl font-bold mb-4">Create New Task</h2>
          <p>Modal Content Here...</p>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>

import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  unmounted() {
    document.body.style.overflow = '';
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
