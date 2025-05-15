<template>
    <div class=" w-full flex justify-center" :class="isDarkTheme ? 'bg-primary' : 'bg-primary-dark'">
        <header class="w-full flex items-center px-6 py-4 rounded-lg">
            <!-- Left Section -->
            <div class="flex items-center flex-wrap space-x-4 gap-2">

                <h1 class=" text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-light tracking-wide xs:tracking-wider sm:tracking-widest whitespace-nowrap flex items-center"
                    :class="isDarkTheme ? 'text-primary' : 'text-primary-dark'">
                    W<span
                        class="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] inline-flex mr-1">
                        <svg width="36" height="36" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M23 9.29787C15.4325 9.29787 9.29787 15.4325 9.29787 23C9.29787 30.5675 15.4325 36.7021 23 36.7021C30.5675 36.7021 36.7021 30.5675 36.7021 23C36.7021 18.8764 34.8473 15.5208 32.4617 13.2945C32.0976 12.9547 32.0003 12.4069 32.2584 11.981L36.1818 5.50556C36.4878 5.00055 37.1638 4.86791 37.6194 5.24346C42.7297 9.45543 46 15.8463 46 23C46 35.7025 35.7025 46 23 46C10.2975 46 0 35.7025 0 23C0 10.2975 10.2975 0 23 0C25.418 0 27.7563 0.37469 29.9555 1.07177C30.5194 1.2505 30.7747 1.89192 30.5149 2.42334L27.2993 9.001C27.0792 9.45114 26.5616 9.66072 26.0751 9.54082C25.0894 9.29787 24.3337 9.29787 23 9.29787Z"
                                fill="url(#paint0_linear_33_776)" />
                            <defs>
                                <linearGradient id="paint0_linear_33_776" x1="6.3617" y1="7.34043" x2="39.3936"
                                    y2="38.9043" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#CB122D" />
                                    <stop offset="1" stop-color="#FF8300" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>RK AREA
                </h1>
                <button class="flex items-center  rounded-full pr-3 p-1.5 h-14" :class="isDarkTheme ? 'text-black bg-white' : 'text-muted bg-black'" @click="showModel = true" >
                    <div class="w-11 h-11 rounded-full flex items-center justify-center " :class="isDarkTheme ? 'text-[#898989]  bg-[#D9D9D9]' : ' text-muted bg-[#272727]'"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 " fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>

                    <span class="ml-3  whitespace-nowrap">New Task</span>
                </button>

                <div>
                    <Addtaskmodel v-if="showModel" @close="showModel = false"/>
                </div>


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
                            :class="isDarkTheme ? 'text-primary' : 'text-primary-dark'">
                            34
                        </div>
                        <div class="text-secondary text-[16px] mt-1">Deals</div>
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
                            :class="isDarkTheme ? 'text-primary' : 'text-primary-dark'">20</div>
                        <div class="text-secondary text-[16px] mt-1">won</div>
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
                            :class="isDarkTheme ? 'text-primary' : 'text-primary-dark'">3</div>
                        <div class="text-secondary text-[16px] mt-1">lost</div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'


import Addtaskmodel from './Addtaskmodel.vue';

export default {

    data(){
        return {
            showModel:false
        }
    },
    computed: {
        ...mapGetters(['isDarkTheme']),
    },
    components:{
        Addtaskmodel
    }
}
</script>

<style scoped>
/* Optional: smooth transition for modal */
</style>
