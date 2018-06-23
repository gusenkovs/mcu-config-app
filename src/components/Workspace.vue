<template>
  <div>
    <div id="nav">
      <ul class="nav nav-pills">
        <li
          class="nav-item"
          v-for="(device, index) in devices"
          :key="index">
          <router-link
            :to="'/' + index"
            :class="{ 'nav-link': true, active: index === parseInt($route.params.deviceId) }">
            Device {{ index }}
          </router-link>
        </li>
      </ul>
    </div>
    <h2>Device {{ $route.params.deviceId }}</h2>
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

