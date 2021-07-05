<template>
  <div id="nav" class="py-6 border-b border-gray-300 flex">
    <div id="logo" class="flex items-center pr-20">
      <router-link to="/" class="flex items-center text-lg font-bold tracking-tight leading-6">
        <img src="../assets/Thullo.png" alt="logo" class="w-6 h-6" />
        <span class="px-3">Thullo</span>
      </router-link>
    </div>
    <div class="flex-grow flex justify-between items-center">
      <div id="boards" class="flex justify-between items-center divide-x divide-gray-400">
        <div class="px-6">
          <h2 id="current-board" class="text-lg font-medium tracking-tight leading-6">
            Devchallanges Board
          </h2>
        </div>
        <div class="px-6">
          <base-button-icon icon="menu" label="All boards" />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div id="search" class="mx-11 relative">
          <div class="absolute flex items-center inset-y-0 right-0">
            <button
              class="
                h-full
                py-2
                px-8
                rounded-lg
                flex
                items-center
                justify-center
                text-xs text-white
                font-medium
                bg-blue-500
              "
            >
              Search
            </button>
          </div>
          <input
            type="search"
            placeholder="Keyword..."
            class="
              w-full
              pl-4
              pr-28
              py-2
              focus:outline-none
              rounded-lg
              shadow-lg
              text-gray-400 text-sm
            "
          />
        </div>
        <div id="user" class="flex justify-between items-center">
          <base-profile-picture
            imgSrc="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBmYWNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <span class="text-xs mx-3 font-bold">Xanthe Neal</span>
          <base-icon iconId="arrow-down" class="w-4 h-3 fill-current" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
