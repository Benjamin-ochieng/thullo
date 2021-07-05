<template>
  <div id="header" class="py-8 flex justify-between items-center">
    <div class="flex justify-between items-center">
      <base-button-icon icon="padlock" label="Private" />
      <div id="board-members" class="flex">
        <base-profile-picture
          imgSrc="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBmYWNlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          class="w-10 h-10 ml-3"
        />
        <base-profile-picture
          imgSrc="https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBmYWNlc3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          class="w-10 h-10 ml-3"
        />
        <base-profile-picture
          imgSrc="https://images.unsplash.com/photo-1485423036251-8b2a2909899f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhhcHB5JTIwZmFjZXMlMjBhc2lhbiUyMHBvdHJhaXR8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          class="w-10 h-10 ml-3"
        />
        <base-profile-picture class="w-10 h-10 ml-3" />
        <base-button icon="plus" class="w-10 h-10 ml-3" />
      </div>
    </div>
    <base-button-icon icon="ellipsis" label="Show More" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
