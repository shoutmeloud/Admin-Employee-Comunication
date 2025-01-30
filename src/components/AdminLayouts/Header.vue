<template>
  <header
    class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 "
  >
    <div
      class="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11"
    >
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN -->
        <button
          class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
          @click.stop="sidebarToggle = !sidebarToggle"
        >
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="du-block absolute right-0 h-full w-full">
              <span
                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out "
                :class="{ '!w-full delay-300': !sidebarToggle }"
              ></span>
              <span
                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out "
                :class="{ '!w-full delay-400': !sidebarToggle }"
              ></span>
              <span
                class="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out "
                :class="{ '!w-full delay-500': !sidebarToggle }"
              ></span>
            </span>
            <span class="du-block absolute right-0 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out "
                :class="{ '!h-0 delay-[0]': !sidebarToggle }"
              ></span>
              <span
                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out "
                :class="{ '!h-0 dealy-200': !sidebarToggle }"
              ></span>
            </span>
          </span>
        </button>
        <!-- Hamburger Toggle BTN -->
        <a class="block flex-shrink-0 lg:hidden" href="index.html">
          <img src="../../assets/images/user/user-01.jpg" alt="Logo" />
        </a>
      </div>
      <div class="hidden sm:block">
        <!-- <form action="https://formbold.com/s/unique_form_id" method="POST"> -->
          <div class="relative">
            Welcome To Reddensoft
          </div>
        <!-- </form> -->
      </div>

     <div class="ml-auto">
        <!-- Notification button -->
        <button
          :data-tooltip="'You have 0 new Notifications'"
          data-tooltip-pos="down"
          data-tooltip-length="medium"
          ref="notificationBtn"
          class="tooltip p-0.5 border-none bg-transparent w-6 text-neutral-500 relative top-[2px]"
          @click="NotificationIconBtn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"
            />
          </svg>
          <span class="pulse"></span>
        </button>

        <!-- Notification dropdown -->
        <div
          ref="notificationDropdown"
          :class="['dropdown top-full absolute bg-white shadow-lg rounded-lg overflow-hidden z-20 w-70 right-8 border border-solid border-neutral-300', notificationIcon ? 'block' : 'hidden']"
        >
          <ul
            class="max-h-[300px] custom-scrollBar block divide-y-[1px] divide-neutral-300 py-1 overflow-auto"
         
          >
            <li >
              <button
                class="flex flex-col no-underline py-2 px-4 text-left w-full bg-[#ededff]" 
              >
                <p class="text-sm font-medium text-neutral-500 before:w-1.5 before:h-1.5 before:inline-block before:mr-1 before:rounded-xl before:-ml-2">
                  Notifications
                </p>
                <span class="text-xs text-neutral-400">29-01-2025</span>
              </button>
            </li>
          </ul>
         
        </div>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
     
        </ul>

        <!-- User Area -->
        <div class="relative" ref="UsertDropdownRef">
          <button
            class="flex items-center gap-4"
            href="#"
            @click="toggleUsertDropdown"
          >
            <span class="hidden text-right lg:block">
              <!-- <span class="block text-sm font-medium text-black dark:text-white"
                >Thomas</span
              > -->
              <span class="block text-xs font-medium">Admin</span>
            </span>

            <span class="h-15 w-15 rounded-full">
              <img src="../../assets/images/user/user-01.jpg" alt="User" />
            </span>

            <svg
              :class="dropdownOpen && 'rotate-180'"
              class="hidden fill-current sm:block"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </button>

          <div
            :class="['absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default ', userDropdownOpen ? 'block' : 'hidden']"
          >
           
            <button
             
              class="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                class="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                  fill=""
                />
                <path
                  d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                  fill=""
                />
              </svg>
              Log Out
            </button>
          </div>
         
        </div>
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/images/logo/logo.svg";

export default {
  name: "Header",
  data() {
    return {
      logo,
      dropdownOpen: false,
      notifying: true,
      chatDropdownOpen: false,
      chatNotifying: true,
      userDropdownOpen: false,
      sidebarToggle: false,
      darkMode: false,
      notificationIcon: false,     
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      this.notifying = false;
    },
    toggleChatDropdown() {
      this.chatDropdownOpen = !this.chatDropdownOpen;
      this.chatNotifying = false;
    },
    toggleUsertDropdown() {
      this.userDropdownOpen = !this.userDropdownOpen;
    },
    handleClickOutside(event) {
      
      if (!this.$el.contains(event.target)) {
        this.dropdownOpen = false;
      };
      
    },

    handleClickChatOutside() {
      if (!this.$el.contains(event.target)) {
        this.chatDropdownOpen = false;
      }
    },

    handleClickOutside(event) {
      const notificationDropdown = this.$refs.notificationDropdown;
      const UsertDropdownRef = this.$refs.UsertDropdownRef;
      if (notificationDropdown && !notificationDropdown.contains(event.target) && !this.$refs.notificationBtn.contains(event.target)) {
        this.notificationIcon = false;
      };
      if (
        UsertDropdownRef &&
        !UsertDropdownRef.contains(event.target) &&
        !this.$refs.UsertDropdownRef.contains(event.target)
      ) {
        this.userDropdownOpen = false;
      }
    },
    NotificationIconBtn() {
      this.notificationIcon = !this.notificationIcon
    },
    
  },

  mounted() {
    document.addEventListener("click", this.handleClickOutside, this.handleClickChatOutside);
    window.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.handleClickOutside);
  }
};
</script>
<style scoped>
.dropdown ul li:first-child p::before{
  background-color: #00ffff;
}
.dropdown ul li:nth-child(1n + 2) p::before{
  background-color: #00ff73;
}
.dropdown ul li:nth-child(2n + 3) p::before{
  background-color: #ae00ff;
}
.dropdown ul li:nth-child(3n) p::before{
  background-color: rgba(0, 81, 255, 0.993);
}
.dropdown ul li:nth-child(4n) p::before{
  background-color: #800080;
}
.dropdown ul li:nth-child(5n) p::before{
  background-color: #5f9ea0;
}
.dropdown ul li:nth-child(7n) p::before{
  background-color: #d2691e;
}
.pulse {
  display: block;
  width: 7px;
  height: 7px;
  position: absolute;
  top: -3px;
  right: 3px;
  border-radius: 50px;
  background: #0084f1;
  box-shadow: 0 0 0 #0084f1;
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgb(0 132 241 / 60%);
  }
  70% {
    -webkit-box-shadow: 0 0 0 8px rgba(135, 200, 38, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(135, 200, 38, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgb(0 132 241 / 60%);
    box-shadow: 0 0 0 0 rgb(0 132 241 / 60%);
  }
  70% {
    -moz-box-shadow: 0 0 0 8px rgba(135, 200, 38, 0);
    box-shadow: 0 0 0 8px rgba(135, 200, 38, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(135, 200, 38, 0);
    box-shadow: 0 0 0 0 rgba(135, 200, 38, 0);
  }
}
.tooltip {
  position: relative;
}
.tooltip:after,
.tooltip:before {
  opacity: 0;
  pointer-events: none;
  bottom: 100%;
  left: 50%;
  position: absolute;
  z-index: 10;
  transform: translate(-50%, 10px);
  transform-origin: top;
  transition: all 0.18s ease-out 0.18s;
}

.tooltip:after {
  background-color: #f5f5f5;
  box-shadow: 0 0 3px #ddd;
  content: attr(data-tooltip);
  padding: 10px;
  white-space: nowrap;
  margin-bottom: 11px;
}

.tooltip:before {
  width: 0;
  height: 0;
  content: "";
  margin-bottom: 6px;
}

.tooltip:hover:before,
.tooltip:hover:after {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}

[data-tooltip-pos="up"]:before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #f5f5f5;
  margin-bottom: 6px;
}

[data-tooltip-pos="down"]:before {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #f5f5f5;
  margin-top: 6px;
}

[data-tooltip-pos="right"]:before {
  border-top: 6px solid transparent;
  border-right: 6px solid #f5f5f5;
  border-bottom: 6px solid transparent;
  margin-left: 6px;
}

[data-tooltip-pos="left"]:before {
  border-top: 6px solid transparent;
  border-left: 6px solid #f5f5f5;
  border-bottom: 6px solid transparent;
  margin-right: 6px;
}

[data-tooltip-pos="down"]:before,
[data-tooltip-pos="down"]:after {
  bottom: auto;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -10px);
}

[data-tooltip-pos="down"]:after {
  margin-top: 11px;
}

[data-tooltip-pos="down"]:hover:before,
[data-tooltip-pos="down"]:hover:after {
  transform: translate(-50%, 0);
}

[data-tooltip-pos="left"]:before,
[data-tooltip-pos="left"]:after {
  bottom: auto;
  left: auto;
  right: 100%;
  top: 50%;
  transform: translate(10px, -50%);
}

[data-tooltip-pos="left"]:after {
  margin-right: 11px;
}

[data-tooltip-pos="left"]:hover:before,
[data-tooltip-pos="left"]:hover:after {
  transform: translate(0, -50%);
}

[data-tooltip-pos="right"]:before,
[data-tooltip-pos="right"]:after {
  bottom: auto;
  left: 100%;
  top: 50%;
  transform: translate(-10px, -50%);
}

[data-tooltip-pos="right"]:after {
  margin-left: 11px;
}

[data-tooltip-pos="right"]:hover:before,
[data-tooltip-pos="right"]:hover:after {
  transform: translate(0, -50%);
}

[data-tooltip-length]:after {
  white-space: normal;
}

[data-tooltip-length="small"]:after {
  width: 80px;
}

[data-tooltip-length="medium"]:after {
  width: 150px;
}

[data-tooltip-length="large"]:after {
  width: 260px;
}

[data-tooltip-length="fit"]:after {
  width: 100%;
}


.custom-scrollBar {
  scrollbar-color: #888888 #f1f1f1;
  scrollbar-width: thin;
  -ms-overflow-style: none;
}

.custom-scrollBar::-webkit-scrollbar {
  height: 4px;
  width: 4px;
  background: #808080;
}

.custom-scrollBar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom-scrollBar::-webkit-scrollbar-thumb {
  background: #888;
}

.custom-scrollBar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.custom-scrollBar::-webkit-scrollbar-thumb:horizontal {
  background: #000;
  border-radius: 10px;
}
</style>