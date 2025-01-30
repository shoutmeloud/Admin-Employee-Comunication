import { createApp } from 'vue';
import './assets/css/style.css';
import store from './store'
import infiniteScroll from "vue-infinite-scroll";
const initializeApp = async () => {
  try {
    console.log('Initializing app...');
    
    const { default: App } = await import('./App.vue');
    const { default: router } = await import('./routes');
    const { default: axios } = await import('axios');

    console.log('App, router, and axios imported successfully.');

    axios.interceptors.request.use((config) => {
      return config;
    }, (error) => {
      return Promise.reject(error);
    });

    // axios.interceptors.response.use(
    //   (response) => {
    //     // If the response is successful, just return it
    //     return response;
    //   },
    //   (error) => {
    //     return Promise.reject(error); // Handle other errors normally
    //   }
    // );

    console.log('Axios interceptor configured successfully.');

    const app = createApp(App);
    app.config.globalProperties.$apiUrl = import.meta.env.VITE_VUE_APP_APIURL; 
    app.use(router);
    app.use(store); // Use the Vuex store
    app.use(infiniteScroll);
    app.mount('#app');
    

    console.log('App initialized successfully.');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
};

initializeApp();


