<template>
  <div>
    <!-- Chat Button -->
    <button class="fixed z-50 bottom-6 right-3 bg-white text-white p-2 rounded-full shadow-[0px_0px_30px_rgba(0,0,0,0.3)]" @click="togglePersonList">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#3c50e0" class="bi bi-chat-quote-fill" viewBox="0 0 16 16">
        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
      </svg>
    </button>

    <!-- Person List -->
    <transition name="slide">
      <div v-if="isPersonListVisible" class="fixed z-99999 w-full max-w-[360px] shadow-[10px_0px_60px_rgba(0,0,0,0.3)] bg-white top-0 right-0 h-screen transition-transform transform">
        <div class="flex flex-col h-full p-2">
          <div class="p-3 border-b border-neutral-200 flex items-center justify-between">
            <h2 class="text-lg font-semibold truncate pr-3 text-neutral-800">Chat with Employee</h2>
            <button class="w-5 h-5 rounded-2xl bg-black bg-opacity-75 text-white p-1 flex items-center justify-center" @click="closePersonList">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </button>
          </div>
          <div class="grow overflow-y-auto space-y-1 pt-3">
            <button v-for="person in persons" :key="person.employeeId" class="flex w-full flex-col text-left rounded-md p-2 bg-neutral-50 hover:bg-neutral-100" @click="openChat(person.employeeId)">
              <div class="flex items-center w-full">
                <div class="w-9 h-9 shrink-0 mr-2 relative top-2.5">
                <img :src="person.employeeImage" class="w-full h-full rounded-full border border-neutral-400" alt="person" v-if="person.employeeImage"/>
                <img src="../../assets/images/user/user-01.jpg" class="w-full h-full rounded-full border border-neutral-400" alt="Logo" v-else/>
              </div>
                <p class="text-base font-medium truncate max-w-[210px] pr-1">{{ person.employeeName }}</p>
                <span class="text-xs text-gray-500 ml-auto shrink-0 bg-[#3c50e0] flex justify-center items-center w-[18px] h-[18px] rounded-full text-white ">{{person.unseenCount}}</span>
              </div>
              <p class="text-xs font-normal truncate pr-1 pl-11 text-neutral-400 max-w-full">{{person.lastMessage.content}}</p>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Chat Box -->
    <transition name="slide">
      <div v-if="activeChatId !== null" class="fixed z-99999 w-full max-w-[360px] shadow-lg bg-white top-0 right-0 h-screen transition-transform transform">
        <div class="py-3 px-2 border-b border-neutral-200 flex items-center justify-between">
          <button class="text-sm text-gray-600 flex items-center text-black px-1 py-0.5 bg-white hover:bg-neutral-100 rounded" @click="showPersonList">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
            Back
          </button>
          <h2 class="text-md font-medium truncate px-2 text-neutral-800">Chat with {{ getActivePersonName }}</h2>
          <button class="w-5 h-5 rounded-2xl bg-neutral-200 bg-opacity-75 text-black p-1 flex items-center justify-center" @click="closeAll">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </button>
        </div>

        <!-- Messages Area -->
        <div ref="messageContainer" class="flex flex-col-reverse p-4 overflow-y-auto h-[calc(100vh-120px)] cust-scroll" v-if="listData && listData?.messages && listData?.messages?.length > 0 "  @scroll="loadMoreNotifications">
          <div v-for="(message, index) in listData.messages" :key="index" :class="messageClass(message.sender)">
            <div class="p-2 text-sm rounded-lg break-all" :class="message.sender === 'admin' ? 'relative bg-blue-400 rounded-tr-none text-white after:w-3.5 after:h-3 after:absolute after:top-0 after:-right-1 after:-skew-x-[40deg] after:bg-blue-400' : 'relative bg-neutral-200 text-gray-800 rounded-tl-none before:w-3.5 before:h-3 before:absolute before:top-0 before:-left-1.5 before:skew-x-[40deg] before:bg-neutral-200'">
              <span class="text-[9px] text-neutral-600 block whitespace-nowrap text-left absolute -top-[20px] -left-2 time-msg">{{ formatDate(message.date) }} {{ formatTime(message.time) }}</span>
              <p>{{ message.content }}</p>
            </div>
          </div>
        </div>
        <div ref="messageContainer" class="flex flex-col-reverse p-4 overflow-y-auto h-[calc(100vh-120px)] cust-scroll relative" v-else>
          <div class="max-w-50 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">          
            <p class="text-sm">Don't Have Any Message Yet!</p>           
          </div>
        </div>

        <!-- Message Input Area -->
        <div class="p-3 flex items-center">
          <input type="text" v-model="newMessage" placeholder="Type a message..." class="border-neutral-200 flex-1 px-4 py-2 border rounded-full focus:outline-none" @keyup.enter="sendMessage"/>
          <button class="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600" @click="sendMessage">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toast-notification";
const $toast = useToast();
import moment from 'moment';
export default {
  name: 'ChatBox',
  data() {
    return {
      isPersonListVisible: false,
      newMessage: '',
      persons: [],
      activeChatId: null,
      listData: { 
        messages: [],
        pagination: {},
      },
      currentPage: 1,
      busy: false,
      noMoreNotifications: false,
    };
  },
  computed: {
    activeMessages() {
      return this.messages[this.activeChatId] || [];
    },
    getActivePersonName() {
      const person = this.persons.find(p => p.employeeId === this.activeChatId);
      return person ? person.employeeName : '';
    }
  },
  methods: {
    togglePersonList() {
      this.isPersonListVisible = !this.isPersonListVisible;
      if (this.activeChatId !== null) {
        this.activeChatId = null;
      }
    },

    async openChat(id) {
      this.currentPage = 1;
      this.noMoreNotifications = false;
      console.log('chat opened', id, 'page', this.currentPage);
      this.listData.messages = [];
      this.fetchPreviousConversation(this.currentPage, id);
      this.activeChatId = id;
      this.isPersonListVisible = false;
      this.scrollToBottom();
    },

    async fetchPreviousConversation(page, id){  
      console.log('excuting previous conversation api');    
      if (this.noMoreNotifications) return;
      console.log('block is not excuted');    
      this.busy = true;
      await axios.post(`${yourapiurl}`,{employeeId: id, page: page, limit: 10}).then(res => {
        if (res.data.messages.length === 0) {
          this.noMoreNotifications = true;
        } else {
          this.listData.messages.push(...res.data.messages);
          this.currentPage++;
        }

      }).catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.busy = false;
      });
    },

    showPersonList() {
      this.isPersonListVisible = true;
      this.activeChatId = null;
      this.fetchEmployeeMessageList()
    },

    closePersonList() {
      this.isPersonListVisible = false;
    },

    closeAll() {
      this.activeChatId = null;
      this.isPersonListVisible = true;
    },

    async fetchEmployeeMessageList(){
      try {
        const responce = await axios.get(`${yourapiurl}`);
        if (responce && responce.data) {
          console.log(responce.data);
          this.persons = responce.data.employees
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoader = false;
      }
    },

    async sendMessage() {
      if (this.newMessage.trim() !== '') {       
        const timestamp = new Date().toLocaleString('en-GB', { 
          day: '2-digit', month: '2-digit', year: '2-digit',
          hour: '2-digit', minute: '2-digit', hour12: true 
        });
        
        this.listData.messages.unshift({
          content: this.newMessage, 
          sender: 'admin', 
          timestamp: timestamp,
          seen_status: false
        });
        const messageToSend = this.newMessage;
        this.newMessage = '';
        this.scrollToBottom();
        console.log();
        await axios.post(`${yourapiurl}`, {message:messageToSend, employeeId:this.activeChatId}).then((response) => {
          console.log(response.data)            
            this.fetchPreviousConversation(this.currentPage,this.activeChatId);
        })
        .catch((error) => {
          $toast.error(error.data.message, {
            position: "bottom-right",
            duration: 4000,
          });
        });      
      }
    },

    loadMoreNotifications() {
      console.log('scrolling');
      console.log(this.busy);
      console.log(this.noMoreNotifications);
      if (!this.busy && !this.noMoreNotifications) {
        this.fetchPreviousConversation(this.currentPage,this.activeChatId);
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messageContainer;
        container.scrollTop = container.scrollHeight;
      });
    },

    getLastMessageTime(personId) {
      const lastMessage = this.messages[personId]?.[0];
      if (lastMessage) {
        const date = new Date(lastMessage.timestamp);
        return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });
      }
      return '';
    },

    messageClass(sender) {
      return sender === 'admin' ? 'self-end mt-3 relative pt-3' : 'self-start mt-3 relative pt-3';
    },

   formatTime(time) {
      if (!time) return ''; 
      return moment(time, ["h:mm A", "HH:mm"]).format("h:mm A");
    },

    formatDate(date){
      if (!date) return ''; 
      return moment(date).format("MM-DD-YYYY");
    }
  },

  mounted(){   
    this.fetchEmployeeMessageList();
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
.self-end .time-msg{
  left: auto;
  right: 0;
}
.cust-scroll {
    scrollbar-color: #888888 #f1f1f1;
    scrollbar-width: thin;
    -ms-overflow-style: none;
}
.cust-scroll::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: gray;
}
.cust-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.cust-scroll::-webkit-scrollbar-thumb {
    background: #888;
}
.cust-scroll::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.cust-scroll::-webkit-scrollbar-thumb:horizontal {
    background: #000;
    border-radius: 10px;
}
</style>
