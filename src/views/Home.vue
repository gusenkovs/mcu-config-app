<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
           <Workspace/>
        </div>
        <div class="col-md-5 col-lg-4 col-xl-3">
          <SideBar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Workspace from '@/components/Workspace.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'home',
  components: {
    Workspace,
    SideBar,
  },
};
</script>
