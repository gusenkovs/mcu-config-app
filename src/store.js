import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: null,
    devices: [],
    device: null,
  },
  mutations: {
    addDevice(state, params, kke) {
      console.log(kke);
      state.devices.push(params);
      console.log(params);
      console.log(state.devices);
    },
    deleteDevice(state, id) {
      state.devices.splice(id, 1);
      console.log(state.devices);
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
