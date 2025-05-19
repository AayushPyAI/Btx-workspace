<template>
    <div class="bg-white p-4 rounded-xl shadow-sm w-[800px]">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
            <div class="flex items-center gap-2">
                <button
                    class="p-3 rounded-full bg-blue text-white border hover:bg-white hover:text-black transition-hover"
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="DollarIcon" />
                </button>
                <h2 class="font-semibold  text-indigo-900">Campaign History</h2>
            </div>
            <div class="flex gap-2">
                <button
                    class="p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="AddIcon" />
                </button>
                <button
                    class="p-3 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="PencilIcon" />
                </button>
            </div>
        </div>

        <!-- Card Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                v-for="(card, index) in cards"
                :key="index"
                class="bg-[#F4F0FD] rounded-2xl p-4 w-full max-w-sm shadow-sm"
            >
                <!-- Header Row -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <button class="p-3 rounded-2xl" :class="card.bgClass">
                            <span v-html="card.icon" />
                        </button>
                        <div>
                            <h2 class="text-lg  text-[#2E1F79]">{{ card.title }}</h2>
                            <p class="text-sm text-gray-500">
                                Status: <span class="text-[#2E1F79] font-medium">{{ card.status }}</span>
                            </p>
                        </div>
                    </div>
                   <button
                    class="p-4 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover"
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="ArrowDownIcon" />
                </button>
                </div>

                <!-- Type and Date -->
                <div class="flex justify-between items-center mt-6">
                    <div class="flex items-center space-x-2">
                        <div class="bg-white rounded-full p-2">
                            <svg class="w-5 h-5 text-[#2E1F79]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Type</p>
                            <p class="text-sm font-medium text-[#2E1F79]">{{ card.type }}</p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2">
                        <div class="bg-white rounded-full p-2">
                            <svg class="w-5 h-5 text-[#2E1F79]" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path d="M8 7V3m8 4V3m-9 8h10m-13 7h16" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500">Start Date</p>
                            <p class="text-sm font-medium text-[#2E1F79]">{{ card.date }}</p>
                        </div>
                    </div>
                </div>

                <!-- Action Button -->
                <button class="mt-6 w-full py-2 rounded-full bg-[#2E1F79] text-white  hover:bg-[#241964] transition">
                    Send email
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {
    AddIcon,
    AdwordIcon,
    ArrowDownIcon,
    DollarIcon,
    PencilIcon,
    TwitterIcon
} from '../../assets/icons';

export default {
    name: 'CampaignCard',
    data() {
        return {
            DollarIcon,
            AddIcon,
            PencilIcon,
            ArrowDownIcon,
            cards: [
                {
                    icon: AdwordIcon,
                    title: 'Google Adwords',
                    status: 'Connected',
                    type: 'Web Marketing',
                    date: '18.02.2025',
                    bgClass: 'bg-green-400 hover:bg-white hover:text-black transition-hover'
                },
                {
                    icon: TwitterIcon,
                    title: 'X-twitter Social Listening',
                    status: 'Engaged',
                    type: 'Social Media',
                    date: '06.03.2025',
                    bgClass: 'bg-blue hover:bg-white hover:text-black transition-hover'
                }
            ]
        };
    },
    computed: {
        ...mapGetters(['isDarkTheme'])
    }
};
</script>

