<template>
  <div class="mx-auto max-w-screen-2xl p-4 md:p-6 lg:px-6 2xl:py-10">
    <div class="text-center pt-10 max-w-125 mx-auto">
      <div class="max-w-60 mx-auto">
        <img
          src="../assets/images/404-image.jpg"
          class="max-w-full"
          alt="User"
        />
      </div>
      <h3
        class="text-xl font-extrabold text-zinc-800 uppercase tracking-[2px] mt-4 mb-3"
      >
        Page Not Found
      </h3>
      <h2 class="text-md font-semibold text-zinc-800 uppercase tracking-[1px]">
        We're sorry, the page you requested could not be found please go back to
        the homepage
      </h2>
      <p></p>
      <router-link
        to="/admin-dashboard"
        class="cursor-pointer mx-2 mt-5 inline-block text-center rounded-lg border border-primary bg-primary px-4 py-2.5 font-medium text-white transition hover:bg-opacity-90"
      >
        Go back to the main page
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "404page",
};
</script>
