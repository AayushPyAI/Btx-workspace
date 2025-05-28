<template>

    <div class="bg-gradient-to-[45deg] bg-[linear-gradient(360deg,_#FFDEBC,_#F4F4F5)]" >
  <Navbar />
  <div class="p-6">
    <!-- Top Header -->
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-semibold text-gray-800">Projects</h3>
        <p class="text-gray-500 text-sm">See through your project and the progress</p>
      </div>

      <div class="flex items-center space-x-4">
        <div class="bg-[#eae4da] p-2 rounded-full">
          <span v-html="phoneIcon" class="w-5 h-5"></span>
        </div>
        <div class="bg-black p-2 rounded-full">
          <span v-html="messageBoxIcon" class="text-white w-5 h-5"></span>
        </div>
      </div>
    </div>

    <!-- Breadcrumbs and Search + Icons -->
    <div class="flex justify-between items-center mt-6">
      <div class="text-sm text-gray-500">App &gt; Projects</div>

      <div class="flex items-center gap-3">
        <div class="flex justify-center items-center flex-1 mx-8 relative max-w-[300px] bg-white px-5 rounded-sm">
          <span v-html="searchIcon2"></span>
          <input
            type="text"
            placeholder="Search"
            class="w-full py-2 px-4 rounded-full border-none border-gray-300 outline-none"
          />
        </div>
        <div class="bg-white p-2 rounded-md hover:bg-gray-100">
          <span v-html="fileDownLoadIcon"></span>
        </div>
        <div class="bg-white p-2 rounded-md hover:bg-gray-100">
          <span v-html="appIcon"></span>
        </div>
        <div class="bg-white p-2 rounded-md hover:bg-gray-100">
          <span v-html="filterIcon"></span>
        </div>
      </div>
    </div>

    <!-- Submenu Tabs -->
    <div class="flex gap-4 mt-6">
      <div
        v-for="item in submenu"
        :key="item"
        :class="[
          'px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition',
          item === activeTab
            ? 'bg-blue-900 text-white'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
        ]"
        @click="activeTab = item"
      >
        {{ item }}
      </div>
    </div>

    <!-- Tab Content -->
 
  </div>

     <div class="mt-6">
      <Task v-if="activeTab === 'Task'" />
      <Notes v-if="activeTab === 'Notes'" />

    </div>

    </div>


</template>

<script>
import Navbar from './Navbar.vue';
import Task from './Task.vue';
import Notes from './Notes.vue';
import {
  phoneIcon,
  messageBoxIcon,
  projectIcon,
  Notification,
  searchIcon2,
  callIcon,
  fileDownLoadIcon,
  filterIcon,
  appIcon,
} from '../../assets/icons';



export default {
  components: {
    Navbar,
    Task,
    Notes

  },
  data() {
    return {
      phoneIcon,
      messageBoxIcon,
      projectIcon,
      Notification,
      callIcon,
      searchIcon2,
      fileDownLoadIcon,
      filterIcon,
      
      appIcon,
      submenu: ['Overview', 'Details', 'Task', 'Milestones', 'Notes'],
      activeTab: 'Task', // default selected tab
    };
  },
};
</script>
