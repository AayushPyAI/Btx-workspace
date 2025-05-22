<template>
    <div class="flex items-center  justify-self-start  px-1 py-2 w-full border-b- border-white" :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-white text-primary-light'">
        <!-- Left Section -->
        <div class="flex items-center space-x-2 ">
            <button
                class="p-2 rounded-full  text-heading border bg-white hover:text-black transition-hover"
            >
                <span v-html="MenuIcon" />
            </button>
            <span class=" font-semibold text-[20px]">Sales Engagement</span>
        </div>

        <div class="flex items-center space-x-4  font-medium text-sm ml-32 gap-5">
            <div class="text-[16px]  font-medium hidden sm:block">Work Queue</div>
            <div class="flex items-center  gap-3">
                <div class="flex items-center justify-center gap-3">
                    <span v-html="avtarIcon" class="bg-white p-2 rounded-full" > </span>
                    <span class="text-[16px]">Miguel Braswell</span>
                </div>

                <div class="flex items-center ">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>


                    <button class=" hover:text-purple-900">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { avtarIcon, MenuIcon } from '../../assets/icons';
import { mapGetters } from 'vuex';
export default {
    name: 'TopBar',
    data() {
        return {
            MenuIcon,
            avtarIcon,
        }
    },
      computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>
