<template>
    <div class=" w-full flex justify-center" :class="isDarkTheme ? 'bg-primary' : 'bg-primary-dark'">
        <header class="w-full flex items-center px-6 py-4 rounded-lg">
            <!-- Left Section -->
            <div class="flex items-center flex-wrap space-x-4 gap-2">

                <h1 class=" text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light tracking-wide xs:tracking-wider sm:tracking-widest whitespace-nowrap flex items-center"
                    :class="isDarkTheme ? 'text-white' : 'text-primary-light'">
                    W<span
                        class="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] inline-flex mr-1">
                        <span v-html="isDarkTheme ? logoDark : logoLight"></span>
                    </span>RK AREA
                </h1>
                <button @click="openModal" class="flex items-center  rounded-full pr-3 p-1.5 h-14"
                    :class="isDarkTheme ? 'text-black bg-white' : 'text-white bg-blue'">
                    <div class="w-11 h-11 rounded-full flex items-center justify-center "
                        :class="isDarkTheme ? 'text-[#898989]  bg-[#D9D9D9]' : ' text-white bg-[#D9D9D92E]'">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 " fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>

                    <span class="ml-3  whitespace-nowrap">New Task</span>
                </button>


                <div class="flex items-center space-x-16">

                    <div class="relative text-center flex flex-row  gap-3 items-end justify-end">
                        <!-- <span class="absolute top-3 -right-4 text-xs bg-green-300 rounded-full px-1 text-black">↑3</span> -->
                        <div
                            class="flex items-center absolute top-3 -right-4   bg-[#C0F573] rounded-xl py-0.5 px-2  font-bold">
                            <svg width="11" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.81191 12.3119L4.81197 2.63407L1.65236 5.79367L0.679347 4.82065L5.49999 7.93536e-06L10.3206 4.82065L9.34762 5.79367L6.18803 2.63408L6.18808 12.3119L4.81191 12.3119Z"
                                    fill="#30561A" />
                            </svg>

                            <span class="text-[13px] text-[#30561A] font-bold ">3</span>
                        </div>
                        <div class="text-[45px] xl:text-[60px] leading-none"
                            :class="isDarkTheme ? 'text-white' : 'text-primary-light'">
                            34
                        </div>
                        <div class="below-text text-[16px] mt-1">Deals</div>
                    </div>
                    <div class="relative text-center flex flex-row  gap-3 items-end justify-end">
                        <!-- <span class="absolute top-3 -right-4 text-xs bg-red-300 rounded-full px-1 text-black">↓2</span> -->
                        <div class="flex items-center absolute top-3 -right-4  bg-[#FE9694] rounded-xl py-0.5 px-2">
                            <svg width="11" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.81191 0.688093L4.81197 10.3659L1.65236 7.20633L0.679347 8.17935L5.49999 13L10.3206 8.17935L9.34762 7.20633L6.18803 10.3659L6.18808 0.688093L4.81191 0.688093Z"
                                    fill="#4B1A18" />
                            </svg>

                            <span class="text-[13px] text-[#4B1A18] font-bold ">2</span>
                        </div>
                        <div class=" text-[45px] xl:text-[60px] leading-none"
                            :class="isDarkTheme ? 'text-white' : 'text-primary-light'">20</div>
                        <div class="below-text text-[16px] mt-1">won</div>
                    </div>
                    <div class="relative text-center flex flex-row  gap-3 items-end justify-end">
                        <!-- <span class="absolute top-3 -right-4 text-xs bg-red-300 rounded-full px-1 text-black">↓1</span> -->
                        <div class="flex items-center absolute top-3 -right-4  bg-[#FE9694] rounded-xl py-0.5 px-2">
                            <svg width="11" height="13" viewBox="0 0 11 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.81191 0.688093L4.81197 10.3659L1.65236 7.20633L0.679347 8.17935L5.49999 13L10.3206 8.17935L9.34762 7.20633L6.18803 10.3659L6.18808 0.688093L4.81191 0.688093Z"
                                    fill="#4B1A18" />
                            </svg>

                            <span class="text-[13px] text-[#4B1A18] font-bold ">1</span>
                        </div>
                        <div class=" text-[45px] xl:text-[60px] leading-none"
                            :class="isDarkTheme ? 'text-white' : 'text-primary-light'">3</div>
                        <div class="below-text text-[16px] mt-1">lost</div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { logoDark, logoLight } from '../assets/icons';
import Addtaskmodel from "./Addtaskmodel.vue"

export default {
    data() {
        return {
            logoLight,
            logoDark,
        };
    },
    computed: {
        ...mapGetters(['isDarkTheme']),
    },
    components: {
        Addtaskmodel
    },
    methods: {
        ...mapActions(["openModal"]),
    },
}
</script>

<style scoped>
/* Optional: smooth transition for modal */
</style>
