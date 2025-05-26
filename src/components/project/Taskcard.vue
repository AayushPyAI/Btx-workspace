<template>
  <div class="bg-white shadow rounded-md p-3 border border-gray-200 text-sm">
    <!-- Header -->
    <div class="flex justify-between items-start">
      <div>
        <p class="font-semibold text-gray-800 text-sm">Get project</p>
        <p class="text-xs text-gray-500 mt-0.5">Project: Web Development and Digital Marketing</p>
        <p class="text-xs text-gray-500">Created: 11.05.2024</p>
        <p class="text-xs text-gray-500">Due: 11.08.2024</p>
        <p class="text-xs text-gray-500">Assigned To: Kalim Hussain</p>
      </div>
      <div class="text-gray-400 text-lg cursor-pointer">⋯</div>
    </div>

    <!-- Priority and Avatars -->
    <div class="flex justify-between items-center mt-3">
      <div class="bg-orange-100 text-orange-600 font-medium text-xs px-2 py-0.5 rounded">
        High
      </div>
      <div class="flex -space-x-1">
        <img
          v-for="(avatar, index) in avatars"
          :key="index"
          :src="avatar"
          alt="user"
          class="w-6 h-6 rounded-full border-2 border-white"
        />
      </div>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center mt-3 pt-2 border-t border-gray-100 text-xs text-gray-500">
      <div class="flex space-x-2 items-center">
        <div class="flex items-center space-x-1">
          <span v-html="messageIcon" class="w-3 h-3"></span>
          <span>8</span>
        </div>
        <div class="flex items-center space-x-1">
          <span v-html="chainIcon" class="w-3 h-3"></span>
          <span>3</span>
        </div>
      </div>
      <div>
        Client: <span class="font-medium text-gray-700">John Company</span>
      </div>
    </div>
  </div>
</template>

<script>
import { chainIcon, messageIcon } from '../../assets/icons';

export default {
  data() {
    return {
      chainIcon,
      messageIcon,
      avatars: [
        'https://i.pravatar.cc/300?img=1',
        'https://i.pravatar.cc/300?img=2',
        'https://i.pravatar.cc/300?img=3',
      ],
    };
  },
};
</script>

<style scoped>
</style>
