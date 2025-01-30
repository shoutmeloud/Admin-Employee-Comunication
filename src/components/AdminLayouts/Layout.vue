<template>
  <div>
    
    <div class="flex h-screen overflow-hidden">

      <SideBar/>
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header/>
          <main>
            <router-view></router-view>
            <ChatBox/>
          </main>
        </div>
    </div>
    
  </div>
</template>
  
  <script>
    import SideBar from './SideBar.vue';
    import Header from './Header.vue';
    import ChatBox from '../Widgets/ChatBox.vue';
    export default {
      components: {
        SideBar, Header, ChatBox,
      },
      data() {
          return {
            SideBar
          };
      }
    };

  </script>