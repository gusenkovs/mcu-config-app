import Vue from 'vue';
import Vuex from 'vuex';
import { Device } from "./models";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: null,
    devices: [],
    device: null,
  },
  mutations: {
    addDevice(state, data) {
      state.devices.push(new Device(name=data.name));
      state.id = state.devices.length - 1;
    },
    deleteDevice(state, id) {
      state.devices.splice(id, 1);
    },
    updateDevice(state, id, updatedDevice) {
      state.devices[id] = updatedDevice;
    },
  },
  getters: {
    getCurrentDevice: (state) => {
      return state.devices.slice()[state.id];
    },
    getDevices: (state) => {
      return state.devices.slice();
    },
  },
  actions: {

  },
});
