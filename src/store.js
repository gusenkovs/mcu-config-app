import Vue from 'vue';
import Vuex from 'vuex';
import { Device } from './models';

function findDeviceById(state, deviceId) {
  const device = state.devices.find(d => d.id === deviceId);
  if (device !== undefined) {
    return device;
  } else {
    throw new Error('Device not found!');
  }
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    devices: [],
    currentDevice: null,
  },

  mutations: {
    createDevice(state, data) {
      state.devices.push(new Device({ id: state.counter++, ...data }));
    },

    updateDevice(state, deviceId, updatedDevice) {
      const device = findDeviceById(state, deviceId);
      state.devices[state.devices.indexOf(device)] = updatedDevice;
    },

    updateCurrentDeviceFields(state, fields) {
      const device = state.currentDevice;
      if (device) {
        Object.keys(fields).forEach((key) => { device[key] = fields[key]; });
      } else {
        throw new Error('No device selected!');
      }
    },

    deleteDevice(state, deviceId) {
      const device = findDeviceById(state, deviceId);
      state.devices.splice(state.devices.indexOf(device), 1);
    },

    selectDevice(state, deviceId) {
      if ((typeof deviceId === 'number') && (!Number.isNaN(deviceId))) {
        const device = findDeviceById(state, deviceId);
        state.currentDevice = device;
      } else {
        state.currentDevice = null;
      }
    },
  },

  getters: {
    currentDeviceId({ currentDevice }) {
      if (currentDevice) {
        return currentDevice.id;
      } else {
        return null;
      }
    },

    generateJson({ devices }) {
      return JSON.stringify(devices);
    },
  },

  actions: {
    deleteCurrentDevice({ state, commit }) {
      if (state.currentDevice) {
        commit('deleteDevice', state.currentDevice.id);
        commit('selectDevice', state.devices[0]);
      }
    },
  },
});
