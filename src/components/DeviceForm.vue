<template>
  <div class="form">
    <h2>Настройка устройства</h2>

    <label for="serverIp">IP сервера</label>
    <input
      type="text"
      class="form-control"
      id="serverIp"
      v-model="serverIp">

    <label for="serverSipPort">SIP порт сервера</label>
    <input
      type="number"
      class="form-control"
      id="serverSipPort"
      v-model.number="serverSipPort">

    <label for="selfIp">IP устройства</label>
    <input
      type="text"
      class="form-control"
      id="selfIp"
      v-model="selfIp">

    <label for="subnetMask">Маска подсети</label>
    <input
      type="text"
      class="form-control"
      id="subnetMask"
      v-model="subnetMask">

    <label for="gateway">Шлюз</label>
    <input
      type="text"
      class="form-control"
      id="gateway"
      v-model="gateway">

    <label for="r168ConfigPort">Порт конфигурации R-168</label>
    <input
      type="number"
      class="form-control"
      id="r168ConfigPort"
      v-model.number="r168ConfigPort">

    <!-- <ApdConfigForm class="form"/> -->
  </div>
</template>

<script>
import ApdConfigForm from './ApdConfigForm.vue';

function buildComputed(name) {
  return {
    [name]: {
      get() {
        return this.$store.state.currentDevice[name];
      },
      set(value) {
        this.$store.commit('updateCurrentDeviceFields', {
          [name]: value,
        });
      }
    },
  };
}

export default {
  components: {
    ApdConfigForm,
  },

  computed: {
    ...buildComputed('serverIp'),
    ...buildComputed('serverSipPort'),
    ...buildComputed('selfIp'),
    ...buildComputed('subnetMask'),
    ...buildComputed('gateway'),
    ...buildComputed('r168ConfigPort'),
  },
};
</script>

<style lang="scss">
label {
  font-size: 1rem;
}

.form {
  margin-top: 20px;
}
</style>

