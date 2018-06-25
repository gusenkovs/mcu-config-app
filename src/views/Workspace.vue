<template>
  <div>
    <!-- <h1>Hello world, it`s u workspace</h1> -->
    <!-- <p>Create a new device or select from existings</p> -->
    <DeviceForm class="form"/>
  </div>
</template>

<script>
import DeviceForm from '../components/DeviceForm.vue';

export default {
  name: 'Workspace',
  data() {
    return {
      device: null,
    };
  },
  components: {
    DeviceForm,
  },
  beforeMount() {
    this.$store.commit('deselectDevice');
  },
};
</script>

