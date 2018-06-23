<template>
  <div>
    <div id="nav">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: !$route.params.deviceId }">
            Home
          </router-link>
        </li>
        <li
          class="nav-item"
          v-for="(device, index) in devices"
          :key="index">
          <router-link
            :to="'/' + index"
            class="nav-link"
            :class="{ active: index === parseInt($route.params.deviceId) }">
            Device {{ index }}
          </router-link>
        </li>
      </ul>
    </div>
    <h2 v-if="$route.params.deviceId">Device {{ $route.params.deviceId }}</h2>
    <h2 v-else>Add or choose a device</h2>
  </div>
</template>

<script>
import { Device } from '../models';

export default {
  data() {
    return {
      devices: [
        new Device(),
        new Device(),
        new Device(),
      ],
    };
  },
};
</script>

