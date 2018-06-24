<template>
  <div>
    <h1>Device #{{ this.$route.params.deviceId }} - {{ this.device.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      device: null,
      deviceId: null,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.device = this.$store.getters.getCurrentDevice;
    next();
  },
  beforeMount() {
    this.device = this.$store.getters.getCurrentDevice;
    this.$store.subscribe((state) => {
      if (state.type === 'deleteDevice') {
        this.device = this.$store.getters.getCurrentDevice;
      }
    });
  },
};
</script>


<style lang="scss" scoped>

</style>
