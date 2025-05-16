<template>
    <div class="flex items-center  justify-self-start bg-white px-1 py-2 w-full">
        <!-- Left Section -->
        <div class="flex items-center space-x-2">
            <button
                class="p-2 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
                :class="isDarkTheme ? 'border-Primary' : 'border-Primary-dark'">
                <span v-html="MenuIcon" />
            </button>
            <span class="text-primary-light font-semibold text-[20px]">Sales Engagement</span>
        </div>

        <div class="flex items-center space-x-4 text-primary-light font-medium text-sm ml-32 gap-5">
            <div class="text-[16px] text-primary-light font-medium hidden sm:block">Work Queue</div>
            <div class="flex items-center  gap-3">
                <div class="flex items-center gap-1">
                    <span v-html="avtarIcon" />
                    <span class="text-[16px]">Miguel Braswell</span>
                </div>

                <div class="flex items-center ">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>


                    <button class="text-primary-light hover:text-purple-900">
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
export default {
    name: 'TopBar',
    data() {
        return {
            MenuIcon,
            avtarIcon,
        }
    }
}
</script>
