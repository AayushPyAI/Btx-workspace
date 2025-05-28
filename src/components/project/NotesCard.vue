<template>
  <div class="max-w-4xl  p-4 bg-white rounded-2xl shadow-xl mx-4">
    <div class="flex justify-between items-start mb-4">
      <div class="flex items-center space-x-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="John Clever"
          class="w-10 h-10 rounded-full border border-orange-500"
        />
        <div>
          <p class="font-semibold text-gray-800">John Clever</p>
          <p class="text-sm text-gray-500">Project Manager</p>
        </div>
      </div>
      <div class="text-right text-lg font-medium text-gray-800">
        Mesh Square
      </div>
    </div>

    <p class="mb-2 font-medium text-gray-800">Dear,</p>

    <div class="text-gray-600 mb-6 leading-relaxed">
      Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately. Any purchases necessary for the website, such as plugins, themes, third-party tools, or other paid services, will be charged separately.
    </div>

    <div class="flex justify-between items-center">
      <div class="flex items-center space-x-2">
       <span v-html="messageIcon"></span>
        <p class="text-gray-600">8</p>
        <button class="bg-orange-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-orange-600 transition">
          Add Response
        </button>
      </div>
      <div class="flex -space-x-2">
        <img
          src="https://i.pravatar.cc/32"
          alt="avatar"
          class="w-8 h-8 rounded-full border-2 border-white"
        />
        <img
          src="https://i.pravatar.cc/32?img=1"
          alt="avatar"
          class="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>
    </div>
  </div>
</template>

<script>

import  {messageIcon} from '../../assets/icons';
export default {
  name: 'PaymentStatusCard',
  data() {
    return {
      messageIcon,
    };
  },
};
</script>
