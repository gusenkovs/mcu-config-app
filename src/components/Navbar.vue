<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a
          href="/"
          class="nav-link"
          @click="printDevices">
          JSON to console
        </a>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          to="/"
          :class="{ active: $store.state.currentDevice === null }">
          Домой
        </router-link>
      </li>
      <li
        class="nav-item"
        v-for="device in $store.state.devices"
        :key="device.id">
        <router-link
          class="nav-link"
          :to="`/device/${device.id}`"
          :class="{ active: device.id === $store.getters.currentDeviceId }">
          Устройство #{{ device.id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    printDevices(event) {
      event.preventDefault();
      console.log(this.$store.getters.generateJson);
    },
  },
};
</script>

