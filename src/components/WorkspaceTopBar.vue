<template>
  <div>
    <div id="nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: !$store.getters.getCurrentDeviceId }">
            Home
          </router-link>
        </li>
        <li
          class="nav-item"
          v-for="(device, index) in devices"
          :key="index">
          <router-link
            :to="'/page/' + index"
            class="nav-link"
            :class="{ active: index === parseInt($route.params.deviceId) }">
            Device {{ index }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-top-bar',
  data() {
    return {
      deviceId: null,
      devices: null,
    };
  },
  beforeMount() {
    this.devices = this.$store.getters.getDevices;
    this.deviceId = this.$store.getters.getDeviceId;
    this.$store.subscribe((state) => {
      const subscribedStates = ['addDevice', 'deleteDevice'];
      if (subscribedStates.includes(state.type)) {
        this.devices = this.$store.getters.getDevices;
      }
      if (state.type === 'selectDevice') {
        this.deviceId = this.$store.getters.getDeviceId;
      }
    });
  },
};
</script>
