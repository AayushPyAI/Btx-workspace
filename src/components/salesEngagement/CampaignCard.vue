<template>
  <div class="bg-white p-6 rounded-xl shadow-sm">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-indigo-900">Campaign History</h2>
      <div class="flex space-x-2">
        <!-- Plus icon -->
        <button class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-indigo-900">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <!-- Pencil icon -->
        <button class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-indigo-900">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4h2m2 0a2 2 0 0 1 2 2v2m0 0L7 19H5v-2L17 6z" />
          </svg>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-[#F4F0FD] rounded-2xl p-6 w-full max-w-sm shadow-sm">
    <!-- Header Row -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Google_Ads_logo.svg"
          alt="Google Adwords"
          class="w-10 h-10 rounded-md"
        />
        <div>
          <h2 class="text-lg font-semibold text-[#2E1F79]">Google Adwords</h2>
          <p class="text-sm text-gray-500">
            Status: <span class="text-[#2E1F79] font-medium">Connected</span>
          </p>
        </div>
      </div>
      <button class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">
        <svg
          class="w-4 h-4 text-[#2E1F79]"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>

    <!-- Type and Date -->
    <div class="flex justify-between items-center mt-6">
      <div class="flex items-center space-x-2">
        <div class="bg-white rounded-full p-2">
          <svg class="w-5 h-5 text-[#2E1F79]" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4z"
            />
          </svg>
        </div>
        <div>
          <p class="text-xs text-gray-500">Type</p>
          <p class="text-sm font-medium text-[#2E1F79]">Web Marketing</p>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <div class="bg-white rounded-full p-2">
          <svg class="w-5 h-5 text-[#2E1F79]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M8 7V3m8 4V3m-9 8h10m-13 7h16" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          <p class="text-xs text-gray-500">Start Date</p>
          <p class="text-sm font-medium text-[#2E1F79]">18.02.2025</p>
        </div>
      </div>
    </div>

    <!-- Action Button -->
    <button
      class="mt-6 w-full py-2 rounded-full bg-[#2E1F79] text-white font-semibold hover:bg-[#241964] transition"
    >
      Send email
    </button>
  </div>

      <!-- X / Twitter -->
      <div class="bg-indigo-50 p-4 rounded-xl">
        <div class="flex items-center space-x-4 mb-2">
          <!-- X Logo SVG -->
          <svg width="40" height="40" viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg">
            <path d="M714.5 564.5L1119.44 0H1013.8L666.6 479.2 365.6 0H0L428.4 641.4 0 1227h105.8l370.6-503.8L834.4 1227H1200L714.5 564.5z" fill="#140A2C"/>
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-indigo-900">X-twitter Social Listening</h3>
            <p class="text-sm text-gray-600">Status: <span class="text-indigo-800">Engaged</span></p>
          </div>
        </div>
        <div class="flex justify-between items-center mb-3">
          <div class="text-sm text-gray-700">
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4 text-indigo-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3z" />
              </svg>
              <span>Social Media</span>
            </div>
          </div>
          <div class="text-sm text-gray-700">
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4 text-indigo-800" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10m-13 7h16" />
              </svg>
              <span>06.03.2025</span>
            </div>
          </div>
        </div>
        <button class="w-full py-2 rounded-full bg-indigo-900 text-white text-sm font-semibold hover:bg-indigo-800">Send email</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic yet – static component for now
</script>
