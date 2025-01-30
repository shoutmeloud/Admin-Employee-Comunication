<template>

    <div class="p-10 bg-neutral-100 min-h-screen">
        <div class="pb-5">
            <div class="flex flex-wrap">
                <div class="w-5/12 p-1">
                    <div class="bg-white p-3 min-h-[264px]">
                        <div class="border-b border-primary border-opacity-30 pb-2 flex items-center mb-2">
                            <h4 class="text-base font-medium text-black">Employee</h4>
                        </div>
                        <div>                          
                            <apexchart type="bar" height="182" :options="chartOptions" :series="series" ></apexchart>
                        </div>
                    </div>
                </div>
                <div class="w-7/12 p-1">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="bg-white p-3 min-h-[125px]">
                            <div class="border-b border-primary border-opacity-30 pb-2 flex items-center">
                                <h4 class="text-base font-medium text-black">Total Project</h4>
                            </div>
                            <div class="p-3" >
                                <p class="text-3xl text-primary font-medium" >1000</p>
                            </div>
                        </div>
                        <div class="bg-white p-3 min-h-[125px]">
                            <div class="border-b border-primary border-opacity-30 pb-2 flex items-center">
                                <h4 class="text-base font-medium text-black">Ongoing Project</h4>                               
                            </div>
                            <div class="p-3">
                                <p class="text-3xl text-primary font-medium" >160</p>
                            </div>
                        </div>
                        <div class="bg-white p-3 min-h-[133px]">
                            <div class="border-b border-primary border-opacity-30 pb-2 flex items-center">
                                <h4 class="text-base font-medium text-black">Completed Project</h4>
                            </div>
                            <div class="p-3">
                                <p class="text-3xl text-primary font-medium" >500</p>
                            </div>
                        </div>
                        <div class="bg-white p-3 min-h-[133px]">
                            <div class="border-b border-primary border-opacity-30 pb-2 flex items-center">
                                <h4 class="text-base font-medium text-black">Customers</h4>
                            </div>
                            <ul class="m-0 py-3 list-none w-full space-y-1">
                                <li class="flex items-center min-h-[25px]">
                                    <span class="shrink-0 w-2 h-2 rounded-xl bg-green-500"></span>
                                    <h6
                                        class="text-sm text-neutral-600 font-medium px-2 grow flex items-center after:border-t after:border-dashed after:border-neutral-400 after:grow after:ml-2">
                                        Active</h6>
                                    <p class="text-base text-neutral-600 font-medium" >600</p>
                                </li>
                                <li class="flex items-center min-h-[25px]">
                                    <span class="shrink-0 w-2 h-2 rounded-xl bg-yellow-500"></span>
                                    <h6
                                        class="text-sm text-neutral-600 font-medium px-2 grow flex items-center after:border-t after:border-dashed after:border-neutral-400 after:grow after:ml-2">
                                        Inactive</h6>
                                    <p class="text-base text-neutral-600 font-medium" >0</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
export default defineComponent({
    name: 'AdminDashboard',
    components: {
       
        apexchart: VueApexCharts,
    },
    data() {
        return {
            filterData: 'all',
            dashboardData: null,
            series: [                
                { 
                    name: '',
                    data: [800, 740, 10, 50],
                    color: "#3c50e0",
                }
            ],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 182,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 2,
                        borderRadiusApplication: 'start',
                        horizontal: true,                      
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                hover:{
                    enabled: false
                },
                xaxis: {
                    categories: [
                        'Total Employee',
                        'Active Employee',
                        'Inactive Employee',
                        'New Joinee',                    
                    ],
                },
            },
        };
    },
});
</script>
<style>
    .apexcharts-toolbar{
        display: none !important;
    }
    .vue-apexcharts g text{
        font-size: 12px;
        color: #525252;
    }
</style>
<style scoped>
    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-image: url('../assets/images/illustration/arrow-filter.png');
        background-repeat: no-repeat;
        background-position: 105px 10px;
        background-size: 9px;
    }
   
</style>