<template>
  <div class="p-6 text-white box-border">
    <!-- Header -->
    <div class="flex items-center gap-4 flex-wrap mb-6 whitespace-nowrap">
      <h2 class="text-xl sm:text-2xl font-semibold flex-shrink-0 text-primary">
        Your Daily Tasks
      </h2>
      <span class="text-secondary text-xl flex-shrink-0 border-b-2 border-white"
        >16 Tasks</span
      >

      <button
        class="p-3 rounded-full bg-transparent border border-Primary text-[#2E4C73] hover:bg-white hover:text-black transition-hover"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </button>
      <button
        class="p-3 rounded-full bg-transparent border border-Primary text-[#2E4C73] hover:bg-white hover:text-black transition-hover"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
      </button>

      <div
        class="flex items-center gap-3 flex-nowrap overflow-x-auto scrollbar-hide"
      >
        <button
          v-for="filter in filters"
          :key="filter"
          @click="selectedFilter = filter"
          :class="[
            'px-4 py-3 rounded-full border border-Primary text-sm transition-all flex-shrink-0 cursor-pointer transition-hover',
            selectedFilter === filter
              ? 'bg-white text-black'
              : 'bg-transparent text-secondary hover:bg-white hover:text-black',
          ]"
        >
          <span v-if="filter === 'Hot'">🔥</span> {{ filter }}
        </button>
      </div>
    </div>

    <!-- Cards Container -->
    <div class="relative">
      <div class="flex flex-nowrap gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <div
          v-for="(task, index) in filteredTasks"
          :key="index"
          class="rounded-2xl p-4 relative shadow-lg flex flex-col gap-4 min-w-[385px] min-h-[280px] flex-shrink-0"
          :class="index == 0 ? 'task-card' : 'task-card2'"
        >
          <!-- Social Icons at top right -->
          <div class="absolute top-0 right-2.5 flex gap-2">
            <div
              class="text-[#191F27] hover:text-black transition-colors duration-300 w-auto h-[53px] flex pt-6"
            >
              <svg
                class="hover-circle mr-0.5"
                width="51"
                height="51"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32.5"
                  cy="32.5"
                  r="31.5"
                  stroke="#191F27"
                  stroke-width="2"
                />
                <path
                  d="M39.4038 39.2144H24.1799V41.065H39.4038V39.2144ZM38.6699 30.12L39.0955 33.876L40.9343 33.6677L40.5088 29.9117L38.6699 30.12ZM24.4881 33.876L24.9136 30.12L23.0748 29.9117L22.6493 33.6677L24.4881 33.876ZM23.1891 36.8897C23.9104 36.0407 24.362 34.9895 24.4881 33.876L22.6493 33.6677C22.564 34.4208 22.259 35.1262 21.7788 35.6914L23.1891 36.8897ZM39.0955 33.876C39.2217 34.9895 39.6732 36.0407 40.3944 36.8897L41.8048 35.6914C41.3245 35.1262 41.0196 34.4208 40.9343 33.6677L39.0955 33.876ZM24.1799 39.2144C23.0858 39.2144 22.3899 37.8303 23.1891 36.8897L21.7788 35.6914C20.0281 37.7521 21.4017 41.065 24.1799 41.065V39.2144ZM39.4038 41.065C42.1819 41.065 43.5555 37.7521 41.8048 35.6914L40.3944 36.8897C41.1937 37.8303 40.4978 39.2144 39.4038 39.2144V41.065ZM40.5088 29.9117C39.9966 25.3902 36.2676 21.9423 31.7918 21.9423V23.7929C35.2835 23.7929 38.2589 26.491 38.6699 30.12L40.5088 29.9117ZM24.9136 30.12C25.3247 26.491 28.3001 23.7929 31.7918 23.7929V21.9423C27.316 21.9423 23.587 25.3902 23.0748 29.9117L24.9136 30.12Z"
                  fill="#2E4C73"
                />
                <path
                  d="M36.3594 42.932C36.5388 42.4534 36.2962 41.9202 35.8177 41.7408C35.3391 41.5614 34.8059 41.804 34.6265 42.2826L36.3594 42.932ZM28.957 42.2826C28.7777 41.804 28.2444 41.5614 27.7659 41.7408C27.2873 41.9202 27.0448 42.4534 27.2241 42.932L28.957 42.2826ZM34.6265 42.2826C34.2284 43.3449 33.1299 44.1494 31.7918 44.1494V46C33.8712 46 35.68 44.7447 36.3594 42.932L34.6265 42.2826ZM31.7918 44.1494C30.4537 44.1494 29.3552 43.3449 28.957 42.2826L27.2241 42.932C27.9035 44.7447 29.7123 46 31.7918 46V44.1494Z"
                  fill="#2E4C73"
                />
              </svg>

              <svg
                class="hover-circle"
                width="51"
                height="51"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32.5"
                  cy="32.5"
                  r="31.5"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M26.4697 38.5113C26.1768 38.8042 26.1768 39.279 26.4697 39.5719C26.7626 39.8648 27.2374 39.8648 27.5303 39.5719L26.4697 38.5113ZM39.7916 27C39.7916 26.5858 39.4558 26.25 39.0416 26.25L32.2916 26.25C31.8774 26.25 31.5416 26.5858 31.5416 27C31.5416 27.4142 31.8774 27.75 32.2916 27.75L38.2916 27.75L38.2916 33.75C38.2916 34.1642 38.6274 34.5 39.0416 34.5C39.4558 34.5 39.7916 34.1642 39.7916 33.75L39.7916 27ZM27 39.0416L27.5303 39.5719L39.5719 27.5303L39.0416 27L38.5113 26.4697L26.4697 38.5113L27 39.0416Z"
                  class="transition-colors duration-300 fill-[#2E4C73] hover:fill-black"
                />
              </svg>
            </div>
          </div>

          <div class="flex items-center gap-2 pt-6">
            <!-- Avatar Section -->
            <img
              :src="task.avatar"
              alt="Avatar"
              class="w-12 h-12 rounded-full border border-gray-400"
            />

            <div>
              <h3 class="text-[17px] font-bold mb-1 text-primary">
                {{ task.name }}
              </h3>
              <p
                class="text-[12px]"
                :class="index === 0 ? 'text-primary' : 'text-muted'"
              >
                {{ task.role }}
              </p>
            </div>
          </div>

          <div class="py-4 rounded-lg w-full">
            <div class="flex justify-between items-start gap-4">
              <div class="text-primary w-full">
                <!-- Google Meet Call Section -->

                <div
                  v-show="task.type === 'meeting'"
                  class="flex items-center rounded-r-2xl text-white py-2.5"
                >
                  <!-- Left Icon -->
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-full border bg-opacity-10 mr-4"
                  >
                    <svg
                      width="25"
                      height="28"
                      viewBox="0 0 33 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46953 0.174927L0.292694 8.35176L4.38111 10.8826L8.46953 8.35176L10.7783 4.26334L8.46953 0.174927Z"
                        fill="#FF2820"
                      />
                      <path
                        d="M8.4695 8.35168H0.292664V18.9816L4.38108 21.2267L8.4695 18.9816V8.35168Z"
                        fill="#0084FF"
                      />
                      <path
                        d="M0.292664 18.9816V24.4328C0.292664 25.9319 1.51919 27.1584 3.0183 27.1584H8.4695L10.7782 22.8182L8.4695 18.9816H0.292664Z"
                        fill="#0066DD"
                      />
                      <path
                        d="M31.3117 3.07809L26.2545 7.08416V7.12524L24.6052 13.422L26.2545 19.7944L31.2892 23.8465C31.9647 24.4133 33.0004 23.9372 33.0004 23.0529V3.87162C33.0004 2.98738 31.9872 2.51127 31.3117 3.07809Z"
                        fill="#00AD3C"
                      />
                      <path
                        d="M26.2544 7.08416V2.86926C26.2544 1.3874 25.0539 0.174927 23.5867 0.174927H18.2513H8.46977V8.35176H18.4864V13.6667L23.868 13.0672L26.2544 7.08416Z"
                        fill="#FFBA00"
                      />
                      <path
                        d="M18.4864 18.9816H8.46977V27.1584H18.2513H23.5867C25.0539 27.1584 26.2544 25.9477 26.2544 24.468V19.7993L23.5846 14.3143L18.4864 13.6666V18.9816Z"
                        fill="#00AD3C"
                      />
                      <path
                        d="M18.4863 13.6665L26.2543 19.7992V7.08398L18.4863 13.6665Z"
                        fill="#00831E"
                      />
                    </svg>
                  </div>

                  <!-- Right Content -->
                  <div class="flex flex-col justify-center">
                    <span class="text-[22px]">Google Meet Call</span>
                    <div class="flex items-center gap-2 text-sm mt-1">
                      <!-- Avatars -->
                      <div class="flex -space-x-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          class="w-6 h-6 rounded-full border-2 border-white"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/33.jpg"
                          class="w-6 h-6 rounded-full border-2 border-white"
                        />
                      </div>
                      <!-- Date and Time -->
                      <span>March 28, 2023 at 2 PM</span>
                    </div>
                  </div>
                </div>

                <!-- --Offers-- -->
                <div
                  v-show="task.type === 'offer'"
                  class="flex items-center rounded-r-2xl text-white py-2.5 gap-2"
                >
                  <div>
                    <svg
                      width="54"
                      height="54"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="31.35"
                        stroke="#ADB9C8"
                        stroke-opacity="0.5"
                        stroke-width="1.3"
                      />
                      <path
                        d="M37.4865 20.3462H28.3981C27.9765 20.3467 27.5722 20.5201 27.2741 20.8282C26.9759 21.1364 26.8082 21.5541 26.8077 21.9899V27.6255C26.8082 28.0613 26.9759 28.4791 27.2741 28.7873C27.5722 29.0954 27.9765 29.2687 28.3981 29.2693H37.4865C37.9081 29.2687 38.3124 29.0954 38.6105 28.7873C38.9087 28.4791 39.0764 28.0613 39.0769 27.6255V21.9899C39.0764 21.5541 38.9087 21.1364 38.6105 20.8282C38.3124 20.5201 37.9081 20.3467 37.4865 20.3462ZM35.6688 26.9211H30.2158C30.035 26.9211 29.8616 26.8469 29.7338 26.7148C29.606 26.5826 29.5342 26.4035 29.5342 26.2166C29.5342 26.0298 29.606 25.8506 29.7338 25.7185C29.8616 25.5864 30.035 25.5122 30.2158 25.5122H35.6688C35.8496 25.5122 36.0229 25.5864 36.1508 25.7185C36.2786 25.8506 36.3504 26.0298 36.3504 26.2166C36.3504 26.4035 36.2786 26.5826 36.1508 26.7148C36.0229 26.8469 35.8496 26.9211 35.6688 26.9211ZM35.6688 24.1033H30.2158C30.035 24.1033 29.8616 24.0291 29.7338 23.8969C29.606 23.7648 29.5342 23.5857 29.5342 23.3988C29.5342 23.212 29.606 23.0328 29.7338 22.9007C29.8616 22.7686 30.035 22.6944 30.2158 22.6944H35.6688C35.8496 22.6944 36.0229 22.7686 36.1508 22.9007C36.2786 23.0328 36.3504 23.212 36.3504 23.3988C36.3504 23.5857 36.2786 23.7648 36.1508 23.8969C36.0229 24.0291 35.8496 24.1033 35.6688 24.1033Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M46.2649 19.2307H45.2735C44.8135 19.2312 44.3725 19.4036 44.0472 19.7099C43.722 20.0163 43.539 20.4316 43.5385 20.8649V36.7399C43.5385 36.8914 43.5906 37.0388 43.6871 37.16L45.1743 39.0277C45.2436 39.1146 45.3334 39.1852 45.4367 39.2338C45.5399 39.2823 45.6538 39.3076 45.7692 39.3076C45.8847 39.3076 45.9985 39.2823 46.1018 39.2338C46.205 39.1852 46.2949 39.1146 46.3642 39.0277L47.8514 37.16C47.9478 37.0388 47.9999 36.8914 48 36.7399V20.8649C47.9994 20.4316 47.8165 20.0163 47.4912 19.7099C47.1659 19.4036 46.7249 19.2312 46.2649 19.2307ZM45.2735 20.6314H46.2649C46.3307 20.6315 46.3937 20.6561 46.4401 20.6999C46.4866 20.7437 46.5127 20.803 46.5128 20.8649V22.966H45.0256V20.8649C45.0257 20.803 45.0519 20.7437 45.0983 20.6999C45.1448 20.6561 45.2078 20.6315 45.2735 20.6314ZM45.7692 37.4402L45.0256 36.5064V24.3667H46.5128V36.5064L45.7692 37.4402Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M21.0667 46H37.6007C38.1486 45.9994 38.674 45.781 39.0614 45.3926C39.4489 45.0043 39.6668 44.4778 39.6674 43.9286V42.3175H40.3563C40.9043 42.3169 41.4296 42.0984 41.8171 41.7101C42.2045 41.3218 42.4225 40.7952 42.4231 40.246V19.0714C42.4225 18.5222 42.2045 17.9957 41.8171 17.6074C41.4296 17.219 40.9043 17.0006 40.3563 17H24.741C24.193 17.0006 23.6677 17.219 23.2802 17.6074C22.8927 17.9957 22.6748 18.5222 22.6742 19.0714V19.7619H21.0667C20.5188 19.7625 19.9935 19.9809 19.606 20.3693C19.2185 20.7576 19.0006 21.2841 19 21.8333V43.9286C19.0006 44.4778 19.2185 45.0043 19.606 45.3926C19.9935 45.781 20.5188 45.9994 21.0667 46ZM24.052 19.0714C24.0522 18.8884 24.1249 18.7129 24.254 18.5834C24.3832 18.454 24.5583 18.3812 24.741 18.381H40.3563C40.539 18.3812 40.7141 18.454 40.8433 18.5834C40.9724 18.7129 41.045 18.8884 41.0452 19.0714V40.246C41.045 40.4291 40.9724 40.6046 40.8433 40.7341C40.7141 40.8635 40.539 40.9363 40.3563 40.9365H24.741C24.5583 40.9363 24.3832 40.8635 24.254 40.7341C24.1249 40.6046 24.0522 40.4291 24.052 40.246V19.0714ZM20.3778 21.8333C20.378 21.6503 20.4507 21.4748 20.5798 21.3453C20.709 21.2159 20.8841 21.1431 21.0667 21.1429H22.6742V40.246C22.6748 40.7952 22.8927 41.3218 23.2802 41.7101C23.6677 42.0984 24.193 42.3169 24.741 42.3175H38.2896V43.9286C38.2894 44.1116 38.2167 44.2871 38.0876 44.4166C37.9584 44.546 37.7833 44.6188 37.6007 44.619H21.0667C20.8841 44.6188 20.709 44.546 20.5798 44.4166C20.4507 44.2871 20.378 44.1116 20.3778 43.9286V21.8333Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M28.6401 34.8461H37.2445C37.4347 34.8461 37.6171 34.7873 37.7515 34.6828C37.886 34.5782 37.9616 34.4363 37.9616 34.2884C37.9616 34.1405 37.886 33.9986 37.7515 33.8941C37.6171 33.7895 37.4347 33.7307 37.2445 33.7307H28.6401C28.45 33.7307 28.2676 33.7895 28.1331 33.8941C27.9986 33.9986 27.9231 34.1405 27.9231 34.2884C27.9231 34.4363 27.9986 34.5782 28.1331 34.6828C28.2676 34.7873 28.45 34.8461 28.6401 34.8461Z"
                        fill="#ADB9C8"
                      />
                      <path
                        d="M36.1572 35.9615H29.7274C29.5447 35.9615 29.3694 36.0791 29.2402 36.2882C29.111 36.4974 29.0385 36.7811 29.0385 37.0769C29.0385 37.3728 29.111 37.6565 29.2402 37.8656C29.3694 38.0748 29.5447 38.1923 29.7274 38.1923H36.1572C36.3399 38.1923 36.5152 38.0748 36.6444 37.8656C36.7736 37.6565 36.8461 37.3728 36.8461 37.0769C36.8461 36.7811 36.7736 36.4974 36.6444 36.2882C36.5152 36.0791 36.3399 35.9615 36.1572 35.9615Z"
                        fill="#ADB9C8"
                      />
                    </svg>
                  </div>

                  <div class="flex flex-col justify-center gap-1">
                    <p class="text-[22px]">Send Offer</p>
                    <p>
                      <span class="text-[13px] text-[#ADB9C8] mr-1">
                        Amount
                      </span>
                      $20,000
                    </p>
                  </div>
                </div>

                <!-- Status & Actions -->

                <div class="flex flex-col mt-10">
                  <label
                    class="text-xs mb-1"
                    :class="index == 0 ? 'text-primary' : 'text-muted'"
                    >Status</label
                  >

                  <div
                    class="flex text-white w-full max-w-xs justify-between min-w-[100%] gap-5"
                  >
                    <div
                      class="flex items-center gap-10 justify-between px-3 py-2 rounded-full border border-white/30"
                    >
                      <div class="flex items-center gap-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/31.jpg"
                          class="w-6 h-6 rounded-full"
                          alt="User"
                        />
                        <span class="text-sm text-white">Call Scheduled</span>
                      </div>
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="flex gap-2">
                        <button
                          class="h-[46px] w-[46px] bg-opacity-20 p-1 rounded-full flex items-center justify-center"
                          :class="
                            task.type === 'meeting'
                              ? 'border bg-transparent'
                              : 'bg-[#FF8300] '
                          "
                        >
                          <svg
                            width="25"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <mask
                              id="mask0_172_93"
                              style="mask-type: luminance"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="18"
                              height="18"
                            >
                              <path d="M0 0H18V18H0V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_172_93)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.92857 2.89289C1.57353 2.89289 1.28571 3.18071 1.28571 3.53575V14.4643C1.28571 14.8193 1.57353 15.1072 1.92857 15.1072H16.0714C16.4264 15.1072 16.7143 14.8193 16.7143 14.4643V3.53575C16.7143 3.18071 16.4264 2.89289 16.0714 2.89289H1.92857ZM0 3.53575C0 2.47062 0.86345 1.60718 1.92857 1.60718H16.0714C17.1365 1.60718 18 2.47062 18 3.53575V14.4643C18 15.5294 17.1365 16.3929 16.0714 16.3929H1.92857C0.86345 16.3929 0 15.5294 0 14.4643V3.53575Z"
                                fill="#FFD5BA"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.153835 3.43984C0.384284 3.16975 0.790049 3.13762 1.06013 3.36807L8.59103 9.79375C8.70616 9.88867 8.85074 9.94063 9.00001 9.94063C9.14929 9.94063 9.29387 9.88867 9.40899 9.79375L16.9399 3.36807C17.2099 3.13762 17.6157 3.16975 17.8462 3.43984C18.0766 3.70993 18.0445 4.11569 17.7744 4.34614L10.2343 10.7797C9.88779 11.0683 9.45102 11.2263 9.00001 11.2263C8.549 11.2263 8.11227 11.0683 7.76572 10.7796L7.75986 10.7747L0.225605 4.34614C-0.0444823 4.11569 -0.0766146 3.70993 0.153835 3.43984Z"
                                fill="#FFD5BA"
                              />
                            </g>
                          </svg>
                        </button>
                        <button
                          class="bg-[#CB122D] h-[46px] w-[46px] bg-opacity-20 p-1 rounded-full flex items-center justify-center"
                          v-show="task.type === 'meeting'"
                        >
                          <svg
                            width="20"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.1311 2.03847C20.8711 1.91103 20.5804 1.86087 20.2931 1.89387C20.0058 1.92686 19.7338 2.04165 19.5089 2.22477L16.8891 4.33477V3.88292C16.9491 3.36143 16.8912 2.83302 16.7198 2.33723C16.5484 1.84143 16.2679 1.39108 15.8992 1.01986C15.5305 0.648643 15.0833 0.36617 14.5909 0.19357C14.0985 0.0209703 13.5738 -0.0372871 13.0559 0.0231559H3.85619C3.33829 -0.0372871 2.81352 0.0209703 2.32114 0.19357C1.82875 0.36617 1.3815 0.648643 1.01284 1.01986C0.644179 1.39108 0.363649 1.84143 0.192238 2.33723C0.0208259 2.83302 -0.0370304 3.36143 0.0229965 3.88292V12.1171C-0.0370304 12.6386 0.0208259 13.167 0.192238 13.6628C0.363649 14.1586 0.644179 14.6089 1.01284 14.9801C1.3815 15.3514 1.82875 15.6338 2.32114 15.8064C2.81352 15.979 3.33829 16.0373 3.85619 15.9768H13.0559C13.5738 16.0373 14.0985 15.979 14.5909 15.8064C15.0833 15.6338 15.5305 15.3514 15.8992 14.9801C16.2679 14.6089 16.5484 14.1586 16.7198 13.6628C16.8912 13.167 16.9491 12.6386 16.8891 12.1171V11.6652L19.5089 13.7752C19.7792 13.9951 20.1162 14.115 20.4636 14.1149C20.6947 14.1146 20.9228 14.0622 21.1311 13.9615C21.3922 13.8363 21.6126 13.6389 21.7665 13.3923C21.9203 13.1457 22.0013 12.8601 22 12.5689V3.43107C22.0013 3.13985 21.9203 2.85427 21.7665 2.60768C21.6126 2.36109 21.3922 2.16366 21.1311 2.03847ZM15.3558 12.1171C15.3558 13.7402 14.6678 14.4329 13.0559 14.4329H3.85619C2.24421 14.4329 1.55627 13.7402 1.55627 12.1171V3.88292C1.55627 2.25976 2.24421 1.56706 3.85619 1.56706H13.0559C14.6678 1.56706 15.3558 2.25976 15.3558 3.88292V12.1171ZM20.4667 12.57L16.8891 9.688V6.312L20.4667 3.43004V12.57Z"
                              fill="#FFD3D9"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Offers-->
            </div>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewLeads",
  data() {
    return {
      selectedFilter: "All",
      filters: ["All", "Hot", "Due Today", "Overdue", "Completed"],
      tasks: [
        {
          name: "Peter Thomas",
          role: "CEO at Modera lnk",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          tag: "Hot Prospect",
          type: "meeting",
        },
        {
          name: "Peter Thomas",
          role: "CEO Metamorphosis",
          sources: ["LinkedIn", "Facebook"],
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          tag: "High Interest",
          type: "offer",
        },
        {
          name: "John Wilson",
          role: "Brand manager at Summit Marketing",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          tag: "Medium Interest",
          type: "meeting",
        },
        {
          name: "Peter Thomas",
          role: "CEO  Metamorphosis",
          sources: ["Typeform"],
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          tag: "Medium Interest",
          type: "offer",
        },
      ],
    };
  },
  computed: {
    filteredTasks() {
      if (this.selectedFilter === "All") return this.tasks;
      return this.tasks.filter((task) => task.tag === this.selectedFilter);
    },
  },
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.task-card {
  background-image: url("./../assets/taskcard.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
}
.task-card2 {
  background-image: url("./../assets/taskCard2.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 30px;
}

.hover-circle:hover circle {
  fill: white;
  cursor: pointer;
}

.transition-hover {
  @apply transition-colors duration-300;
  cursor: pointer;
}
</style>
