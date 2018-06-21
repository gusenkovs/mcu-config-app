<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-9">
           твой код
        </div>
        <div class="col-3">
          <SideBar />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import SideBar from "@/components/SideBar.vue";

export default {
  name: 'home',
  components: {
    SideBar,
  },
};
</script>

<style lang="scss" scoped>
  .container {
    max-width: none;
  }
</style>
