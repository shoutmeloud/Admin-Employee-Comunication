<template>
    <div class="text-center p-10 min-h-screen flex items-center justify-center">
        <div>
            <h2 class="text-5xl font-medium">Welcome to the Meza</h2>
            <p class="text-neutral-600 pt-2 max-w-2xl mx-auto">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                alteration in some form
            </p>
            <div class="flex justify-center pt-10">
                <router-link to="/login"
                    value="Create account"
                    class="w-30 cursor-pointer mx-2 inline-block text-center rounded-lg border border-primary bg-primary px-4 py-2.5 font-medium text-white transition hover:bg-opacity-90"
                    > 
                    Login
                </router-link>
                <router-link to="/sign-up"
                    value="Create account"
                    class="w-30 cursor-pointer mx-2 inline-block text-center rounded-lg border border-primary bg-primary px-4 py-2.5 font-medium text-white transition hover:bg-opacity-90"
                    > 
                    Sign Up
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'Home',
    };
</script>