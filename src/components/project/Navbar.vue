<template>
  <nav class="flex w-full justify-between items-center p-4">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <span v-html="projectIcon" class="w-8 h-8" />
    </div>

    <!-- Search -->
    <div class="flex justify-center items-center flex-1 mx-8 relative max-w-[300px] border-2 px-5 rounded-4xl border-gray-400">
    <span v-html="searchIcon2"></span>
      <input
        type="text"
        placeholder="Search everything..."
        class="w-full py-2 px-4 rounded-full border-none  border-gray-300 outline-none"
      />
    </div>

    <!-- Notifications and Profile -->
    <div class="flex items-center gap-4">

        <div class="p-3 rounded-full  hover:bg-gray-100 cursor-pointer" @click="goTodashboard">
             <span v-html="Notification" class="w-6 h-6 " />
        </div>
        
         <div class=" rounded-full hover:bg-white bg-transparent  cursor-pointer" >
        <img src="../../assets/avatar.png" alt="Avatar" class="w-7 h-7 rounded-full" />
      </div>
    </div>
  </nav>

  <!-- Navigation and Filters -->
  <div class="flex justify-between items-center p-4 border-t-1 border-[#002354] mx-5 ">
    <!-- Navigation Tabs -->
    <div class="flex gap-3">
      <button class="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100">Dashboard</button>
      <button class="bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100">Time Tracker</button>
      <button class="bg-blue-900 text-white px-4 py-2 rounded-full">Projects</button>
      <button class="bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100">Calendar</button>
      <button class="bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100">Benefits</button>
      <button class="bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100">Teams</button>
    </div>

    <!-- Filters and Apply Button -->
    <div class="flex items-center gap-3">
      <select class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none">
        <option>Department</option>
        <option>HR</option>
        <option>Engineering</option>
        <option>Sales</option>
      </select>
      <select class="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none">
        <option>Role</option>
        <option>Manager</option>
        <option>Developer</option>
        <option>Designer</option>
      </select>
      <button class="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">Apply</button>
    </div>
  </div>
</template>



<script>

import { projectIcon, Notification,searchIcon2, callIcon } from '../../assets/icons';

const dashboard=["TimeTracker","Project","Calender","Benefits","Teams"];


export default{


    data(){
        return{
                projectIcon,
                dashboard,
                Notification,
                searchIcon2,
                callIcon
        }
    },

  methods: {
    goTodashboard() {
      this.$router.push('/');
    }
  }



    
}

</script>