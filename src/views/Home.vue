<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
           <WorkspaceTopBar />
           <router-view/>
        </div>
        <div class="col-md-5 col-lg-4 col-xl-3">
          <SideBar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import WorkspaceTopBar from '@/components/WorkspaceTopBar.vue';

export default {
  name: 'home',
  components: {
    SideBar,
    WorkspaceTopBar,
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.deviceId) {
      const { deviceId } = to.params;
      this.$store.commit('selectDevice', deviceId);
    }
    next();
  },
};
</script>
