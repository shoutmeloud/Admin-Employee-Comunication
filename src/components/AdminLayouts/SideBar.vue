<template>
    <aside :class="sidebarToggle ? 'translate-x-0' : '-translate-x-full'"
        class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
        @click.outside="sidebarToggle = false">

        <!-- SIDEBAR HEADER -->
        <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
            <router-link to="/admin-dashboard">
                <img src="../../assets/images/logo/logo.png" class="w-40 object-cover mx-auto" alt="Logo" />
            </router-link>

            <button class="block lg:hidden" @click.stop="sidebarToggle = !sidebarToggle">
                <svg class="fill-current" width="20" height="18" viewBox="0 0 20 18" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                        fill="" />
                </svg>
            </button>
        </div>
        <!-- SIDEBAR HEADER -->

        <div class="no-scrollbar custom-sidebar flex flex-col overflow-y-auto duration-300 ease-linear">
            <!-- Sidebar Menu -->
            <nav class="mt-5 px-4 py-4 lg:mt-5 lg:px-6" x-data="{selected: $persist('Dashboard')}">
                <!-- Menu Group -->
                <div>
                    <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

                    <ul class="mb-6 flex flex-col gap-1.5">

                        <li>
                            <router-link class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                                to="/admin-dashboard" @click="selected = (selected === 'Chart' ? '' : 'Chart')"
                                :class="{ 'bg-graydark dark:bg-meta-4': (selected === 'Chart') && (page === 'Chart') }">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path d="M12 9a1 1 0 0 1-1-1V3c0-.552.45-1.007.997-.93a7.004 7.004 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5Z" />
                                    <path d="M8.003 4.07C8.55 3.994 9 4.449 9 5v5a1 1 0 0 0 1 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7.002 7.002 0 0 1 6.003-6.93Z" />
                                </svg>
                                Dashboard
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </aside>
</template>

<script>

export default {
    name: 'SideBar',
    data() {
        return {
            // logo,
            sidebarToggle: false,
            selected: false,
            page: '',
        };
    }
};

</script>

<style scoped>
.custom-sidebar{overflow: auto;scrollbar-color: #888888 #f1f1f1;scrollbar-width: thin;-ms-overflow-style: none;}
.custom-sidebar::-webkit-scrollbar{height: 4px; width: 4px;background: gray;}
.custom-sidebar::-webkit-scrollbar-track {background: #f1f1f1; }
.custom-sidebar::-webkit-scrollbar-thumb {background: #888; }
.custom-sidebar::-webkit-scrollbar-thumb:horizontal{background: #000;border-radius: 10px;}
</style>