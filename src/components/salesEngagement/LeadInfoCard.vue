<template>
  <div class="max-w-sm p-4 rounded-2xl shadow-md bg-white border border-gray-200">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <div class="bg-[#2A1A7E] p-2 rounded-full">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm.75 15.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 1 1 1.5 0Zm0-3.75a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
        <h2 class="text-[#2A1A7E] font-semibold">Lead Information</h2>
      </div>
      <div class="flex gap-2">
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1z"/>
          </svg>
        </div>
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34a1.25 1.25 0 0 0 0-1.77l-2.34-2.34a1.25 1.25 0 0 0-1.77 0l-1.83 1.83 4.11 4.11 1.83-1.83z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Info Section -->
    <div class="space-y-4">
      <!-- Job Title -->
      <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2h1a1 1 0 0 1 1 1v3h-2v-2H4v2H2V7a1 1 0 0 1 1-1h1zm0 5h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9zm4 2v2h8v-2H8z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-400">Job Title</p>
          <p class="text-[#2A1A7E] font-medium">Administrative Assistant</p>
        </div>
      </div>

      <!-- Phone -->
      <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.91 15.91 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.56a1 1 0 0 1-1 1A16 16 0 0 1 3 5a1 1 0 0 1 1-1h3.56a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.24 1z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-400">Phone</p>
          <p class="text-[#2A1A7E] font-medium">+11 705 555-1207</p>
        </div>
      </div>

      <!-- Email -->
      <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 0 0-2 2v1.6l10 6.4 10-6.4V6a2 2 0 0 0-2-2zM2 8.4V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.4l-10 6.4L2 8.4z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-400">Email</p>
          <p class="text-[#2A1A7E] font-medium">mbraswell@ominex.com</p>
        </div>
      </div>

      <!-- Source -->
      <div class="flex items-start gap-3">
        <div class="bg-gray-100 p-2 rounded-full">
          <svg class="w-4 h-4 text-[#2A1A7E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.9 12a9 9 0 0 1 15.1-6.36L17 7.65A6.5 6.5 0 0 0 6.35 17l1.01 1.01A9 9 0 0 1 3.9 12zM21 12a9 9 0 0 1-15.1 6.36L7 16.35A6.5 6.5 0 0 0 17.65 7l-1.01-1.01A9 9 0 0 1 21 12z"/>
          </svg>
        </div>
        <div>
          <p class="text-sm text-gray-400 mb-1">Source</p>
          <div class="flex gap-3">
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- Skype -->
              <svg class="w-4 h-4 text-[#00AFF0]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm.06 14.61c-1.3 0-2.6-.39-3.56-1.02a.75.75 0 0 1 .82-1.26c.67.43 1.53.73 2.49.73 1.24 0 2.09-.57 2.09-1.45 0-.83-.63-1.17-2.18-1.53-1.9-.45-3.12-1.14-3.12-2.71 0-1.49 1.17-2.48 2.95-2.61V6.5a.75.75 0 0 1 1.5 0v.31c.98.1 1.89.43 2.59.87a.75.75 0 1 1-.79 1.28 4.6 4.6 0 0 0-2.29-.68c-1.2 0-1.98.52-1.98 1.31 0 .82.7 1.18 2.34 1.55 2 .48 2.96 1.26 2.96 2.71 0 1.5-1.14 2.58-3.12 2.75v.26a.75.75 0 0 1-1.5 0v-.27z"/>
              </svg>
            </div>
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- Telegram -->
              <svg class="w-4 h-4 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.05 2.84 2.63 10.31c-1.45.58-1.44 1.4-.25 1.78l4.89 1.52 2.27 7.09c.3.94.53 1.3.86 1.35.34.05.73-.12.97-.33l3.34-3.1 4.59 3.38c.84.46 1.44.23 1.66-.78l2.76-12.99c.28-1.3-.5-1.9-1.67-1.3z"/>
              </svg>
            </div>
            <div class="bg-[#E8F3FC] p-2 rounded-full">
              <!-- LinkedIn -->
              <svg class="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zm.02 6h-3v12h3v-12zM9 9.5h2.85v1.71c.39-.65 1.31-1.81 3.18-1.81 3.4 0 4.02 2.24 4.02 5.15v6.95h-3v-6.45c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.67-2.48 3.4v6.57h-3v-12z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LeadInformationCard',
  // You can add data properties if you need dynamic content
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>