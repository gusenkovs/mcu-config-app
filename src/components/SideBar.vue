<template>
  <div class="side-bar">
    <h1>Actions</h1>
    <hr>
    <h3>Device control</h3>
    <form>
      <div class="form-group">
        <label for="deviceSelection">Select device</label>
        <select
          id="deviceSelection"
          name="deviceSelection"
          class="form-control"
          v-model="selectedDevice">
          <option
            v-for="(option, index) of deviceList"
            :key="index"
            :value="option">
            {{ option }}
          </option>
        </select>
      </div>
        <div style="max-width: 150px;" class="sidebar-button-align">
          <input
            type="button"
            class="btn btn-success"
            @click="createDevice()"
            value="Create">
          <input
            type="button"
            @click="deleteDevice()"
            class="btn btn-danger"
            value="Delete">
        </div>
      <hr>
      <div class="form-group">
        <label for="comport">Comport</label>
        <input
          type="text"
          id="comport"
          class="form-control"
          :value="comport">
      </div>
      <div class="form-group">
        <label for="comport">Self ip address</label>
        <input
          type="text"
          id="selfIpAddress"
          class="form-control"
          :value="selfIpAddress">
      </div>
      <div class="form-group">
        <label for="comport">Ip Address Board</label>
        <input
          type="text"
          id="ipAddressBoard"
          class="form-control"
          :value="ipAddressBoard">
      </div>
      <hr>
      <div style="max-width: 220px;" class="sidebar-button-align">
        <input
          type="button"
          @click="saveToFile()"
          class="btn btn-success"
          value="Save to file">
        <input
          type="button"
          @click="loadformFile()"
          class="btn btn-warning"
          value="Load config">
        </div>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  methods: {
    createDevice() {
      this.$store.commit('addDevice', {
        name: this.selectedDevice,
      })
    },

    deleteDevice() {
      this.$store.commit('deleteDevice', 1)
    },

    saveToFile() {},

    loadformFile() {},
  },
  data() {
    return {
      selfIpAddress: null,
      comport: null,
      ipAddressBoard: null,
      selectedDevice: 'MN825',
      deviceList: [
        'MN825',
        'MN921',
        'PO-06',
        'PO-07',
        'PO-08',
        'VIRT PO',
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../src/assets/styles/colors.scss";
.sidebar-button-align {
  margin: auto;
}
.side-bar {
  background-color: $sidebar-background;
  height: 150vh;
  padding: 20px 15px 15px 20px;
  color: $sidebar-color;
}

hr {
  color: $sidebar-color;
  background-color: $sidebar-color;
  width: 60%;
  height: 2px;
}
</style>

