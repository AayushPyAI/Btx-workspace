<template>
    <div class="p-4 w-full " :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
            <h2 class=" font-medium text-[18px]">Work Queue</h2>
            <div class="flex space-x-3">
                <div class="p-3 rounded-full  text-heading border bg-transparent hover:bg-white  hover:text-black transition-hover"
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="getMessageBoxIcon(isDarkTheme)"></span>
                </div>

                <button
                    class="p-3 px-3.5 rounded-full bg-transparent text-heading border hover:bg-white hover:text-black transition-hover "
                    :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-muted') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                    <span v-html="SearchIcon" />
                </button>
            </div>
        </div>

        <!-- Tabs -->
        <div :class="isDarkTheme ? 'bg-primary text-primary-dark' : 'bg-primary-dark text-primary-light'">
            <!-- Top Toggle Buttons -->
            <div class="flex space-x-3 mb-4">
                <button class="w-[120px] h-[36px]  text-white text-xs rounded-full font-medium truncate" :class="isDarkTheme ? 'bg-white text-primary-light' : 'bg-[#2D0C8C]  text-primary'">
                    Cadences
                </button>
                <button
                    class="w-[120px] h-[36px] hover:bg-white hover:text-[#2D0C8C] text-xs border border-[#d4cfea] rounded-full font-medium truncate cursor-pointer"
                    >
                    My Feed
                </button>
                <button
                    class="w-[120px] h-[36px] hover:bg-white hover:text-[#2D0C8C] text-xs border border-[#d4cfea] rounded-full font-medium truncate cursor-pointer">
                    My List
                </button>
            </div>

            <!-- Dropdown -->
            <div class="relative w-full">
                <select v-model="selectedCadence" @change="filterCards"
                    class="w-full appearance-none px-5 py-2 text-xs text-[#2D0C8C] bg-[#f7f6fb] border border-[#d4cfea] rounded-full font-medium focus:border-[#d4cfea] focus:ring-0 focus:outline-none">
                    <option v-for="cadence in cadences" :key="cadence" :value="cadence">
                        {{ cadence }}
                    </option>
                </select>
                <!-- Dropdown Icon -->
                <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg class="w-4 h-4 text-[#2D0C8C]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>

        <!-- Cards Container with Scroll -->
        <div
            class="max-h-[730px] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <!-- Cards -->
            <div v-for="(card, index) in filteredCards" :key="card.id" :class="[
                'relative p-4 py-5 mb-3 rounded-2xl shadow transition duration-300 hover:shadow-lg mt-3',
          
            //    index === 0 ? 'bg-[#1E319D] text-white':(
            //     isDarkTheme ? 'bg-[#25203c] text-white' : 'bg-white text-[#2D0C8C]'),

                index==0?(isDarkTheme ? 'bg-white text-black' : 'bg-[#1E319D] text-white') : (isDarkTheme ? 'bg-[#25203c] text-white' : 'bg-white text-[#2D0C8C]'),
        
            ]">
                <!-- Top Row -->
                <div class="flex items-start justify-between">
                    <!-- Avatar + Info -->
                    <div class="flex items-center">
                        <img :src="card.image" alt="avatar" class="w-10 h-10 rounded-full mr-3" />
                        <div>
                            <div :class="['text-sm font-semibold',
                                 index==0?(isDarkTheme ? ' text-black' : ' text-white') : (isDarkTheme ? 'text-white' : 'text-[#2D0C8C]'),
                            ]"
                            
                            >
                                {{ card.name }}
                            </div>
                            <div :class="['text-xs mt-0.5' , index==0?(isDarkTheme ? ' text-black' : ' text-white') : (isDarkTheme ? 'text-white opacity-80' : 'text-gray-500')]">
                                {{ card.role }}
                            </div>
                        </div>
                    </div>

                    <!-- Top Right Icon -->
                    <button
                        class="p-[10px] rounded-full bg-transparent  border hover:bg-white hover:text-black transition-hover "
                        :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-heading') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                        <span v-html="SearchIcon" />
                    </button>
                </div>

                <!-- Bottom Row -->
                <div class="flex items-center justify-between mt-4">
                    <div class="flex gap-2">
                        <span class="px-3 py-1 text-xs font-medium rounded-full text-white"
                            :class="
                            // index === 0 ? 'bg-white text-[#2D0C8C]' : 'bg-[#F1EFFB] text-[#2D0C8C]',
                            index==0?(isDarkTheme ? ' text-black bg-[#163B9F]   ' : '  bg-[#FFFFFF2E]') : (isDarkTheme ? 'text-white opacity-80' : 'text-gray-500')
                            ">
                            {{ card.status || '12 Hours Overdue' }}
                        </span>
                        <span class="w-6 h-6 text-xs font-semibold rounded-full flex items-center justify-center mr-2"
                            :class="index === 0 ? 'bg-[#69D2F1] text-white' : 'bg-[#F7B500] text-white'">
                            {{ card.score || '55' }}
                        </span>
                    </div>

                    <div class="flex items-center">
                        <!-- Bottom Right Icon -->
                        <button
                            class="p-3 rounded-full bg-transparent border hover:bg-white hover:text-black transition-hover"
                            :class="isDarkTheme ? (index === 0 ? 'border-Primary-dark text-muted' : 'border-Primary-dark text-heading') : (!index === 0 ? 'border-Primary' : 'border-Primary-dark')">
                            <span v-html="ArrowRightIcon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { MessageBoxIcon, SearchIcon, ArrowRightIcon,getMessageBoxIcon} from '../../assets/icons';
export default {
    name: 'WorkQueue',
    data() {
        return {
            cadences: ['Event Cadence (10)', 'Cadence A', 'Cadence B'],
            selectedCadence: 'Event Cadence (10)',
            MessageBoxIcon,
            SearchIcon,
            ArrowRightIcon,
            getMessageBoxIcon,
            cards: [
                {
                    id: 1,
                    name: 'Miguel Braswell',
                    role: 'Administrative Assistant',
                    score: 69,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/men/1.jpg',
                },
                {
                    id: 2,
                    name: 'Andrea Wilcott',
                    role: 'Chief Information Officer',
                    score: 55,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/women/2.jpg',
                },
                {
                    id: 3,
                    name: 'Adrian Newsom',
                    role: 'Head of Partnerships',
                    score: 44,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/men/3.jpg',
                },
                {
                    id: 4,
                    name: 'Alisha Claude',
                    role: 'VP of Marketing',
                    score: 41,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/women/4.jpg',
                },
                {
                    id: 5,
                    name: 'Aaron McCleery',
                    role: 'SVP Marketing',
                    score: 40,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/men/5.jpg',
                },
                {
                    id: 6,
                    name: 'Sophia Jenkins',
                    role: 'Product Manager',
                    score: 47,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/women/6.jpg',
                },
                {
                    id: 7,
                    name: 'Michael Johnson',
                    role: 'Sales Director',
                    score: 52,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/men/7.jpg',
                },
                {
                    id: 8,
                    name: 'Emily Davis',
                    role: 'UX Designer',
                    score: 48,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/women/8.jpg',
                },
                {
                    id: 9,
                    name: 'Robert Wilson',
                    role: 'Data Analyst',
                    score: 45,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/men/9.jpg',
                },
                {
                    id: 10,
                    name: 'Sarah Thompson',
                    role: 'Content Strategist',
                    score: 43,
                    cadence: 'Event Cadence (10)',
                    image: 'https://randomuser.me/api/portraits/women/10.jpg',
                },
                {
                    id: 11,
                    name: 'David Martinez',
                    role: 'Frontend Developer',
                    score: 56,
                    cadence: 'Cadence A',
                    image: 'https://randomuser.me/api/portraits/men/11.jpg',
                },
                {
                    id: 12,
                    name: 'Jennifer Lee',
                    role: 'HR Manager',
                    score: 39,
                    cadence: 'Cadence A',
                    image: 'https://randomuser.me/api/portraits/women/12.jpg',
                },
                {
                    id: 13,
                    name: 'Christopher Brown',
                    role: 'Backend Engineer',
                    score: 51,
                    cadence: 'Cadence B',
                    image: 'https://randomuser.me/api/portraits/men/13.jpg',
                },
                {
                    id: 14,
                    name: 'Jessica Garcia',
                    role: 'Marketing Specialist',
                    score: 42,
                    cadence: 'Cadence B',
                    image: 'https://randomuser.me/api/portraits/women/14.jpg',
                }
            ],
            filteredCards: [],
            mailIcon: `<svg class="w-5 h-5" fill="currentColor"><rect width="20" height="14"/></svg>`,
            arrowIcon: `<svg class="w-4 h-4" fill="currentColor"><path d="M5 12h14"/></svg>`,
            searchIcon: `<svg class="w-5 h-5" fill="currentColor"><circle cx="10" cy="10" r="9"/></svg>`,
        }
    },
    created() {
        this.filterCards()
    },
    computed: {
        ...mapGetters(['isDarkTheme'])
    },
    methods: {
        ...mapMutations(['toggleTheme']),
        filterCards() {
            this.filteredCards = this.cards.filter(card => card.cadence === this.selectedCadence)
        }
    }
}
</script>

<style scoped>
.card-darkThemebg {
    background-image: url("../../assets/image.png");
}
</style>