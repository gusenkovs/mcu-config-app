<template>
  <div>
    <div id="nav">
      <ul class="nav nav-pills">
        <li
          class="nav-item"
          v-for="device in devices"
          :key="device.id">
          <router-link
            :to="'/' + device.id"
            :class="{ 'nav-link': true, active: device.id === parseInt($route.params.deviceId) }">
            Device {{ device.id }}
          </router-link>
        </li>
      </ul>
    </div>
    <h2>Device {{ $route.params.deviceId }}</h2>
  </div>
</template>

<script>
class Device {
  constructor(id) {
    this.id = id;
  }
}

export default {
  data() {
    return {
      devices: [
        new Device(1),
        new Device(2),
        new Device(3),
      ],
    };
  },
};
</script>

