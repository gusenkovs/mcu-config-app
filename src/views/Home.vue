<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <Navbar/>
          <router-view/>
        </div>
        <div class="col-md-6 col-lg-5 col-xl-4">
          <Sidebar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
  },

  beforeRouteUpdate(to, from, next) {
    const deviceId = parseInt(to.params.deviceId, 10);
    this.$store.commit('selectDevice', deviceId);
    next();
  },
};
</script>
