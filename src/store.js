import Vue from 'vue';
import Vuex from 'vuex';
import { Device } from './models';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: null,
    devices: [],
  },
  mutations: {
    addDevice(state, data) {
      state.devices.push(new Device({ name: data.name }));
    },
    deselectDevice(state) {
      state.id = null;
    },
    selectDevice(state, id) {
      state.id = id;
    },
    deleteDevice(state) {
      state.devices.splice(state.id, 1);
    },
    updateDevice(state, id, updatedDevice) {
      state.devices[id] = updatedDevice;
    },
  },
  getters: {
    getCurrentDevice(state) {
      return state.devices.slice()[state.id];
    },
    getCurrentDeviceId(state) {
      return state.id;
    },
    getDevices(state) {
      return state.devices.slice();
    },
  },
});
