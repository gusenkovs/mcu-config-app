<template>
  <div class="sidebar">
    <h1>Действия</h1>
    <hr>
    <form>
      <div class="form-group">
        <label for="deviceSelection">Выберите тип устройства</label>
        <select
          id="deviceSelection"
          name="deviceSelection"
          class="form-control"
          v-model="selectedDeviceType">
          <option
            v-for="(option, index) of deviceTypeList"
            :key="index"
            :value="option">
            {{ option }}
          </option>
        </select>
      </div>
        <div class="sidebar-button-align">
          <input
            type="button"
            class="btn btn-success"
            @click="createDevice()"
            value="Создать">
          <input
            style="margin-left: 20px;"
            type="button"
            @click="deleteDevice()"
            class="btn btn-danger"
            value="Удалить">
        </div>
      <hr>
      <div class="form-group">
        <label for="comport">COM порт</label>
        <input
          type="text"
          id="comport"
          class="form-control"
          v-model="comport">
      </div>
      <div class="form-group">
        <label for="comport">IP адрес устройства</label>
        <input
          type="text"
          id="selfIpAddress"
          class="form-control"
          v-model="selfIpAddress">
      </div>
      <div class="form-group">
        <label for="comport">IP адрес доски</label>
        <input
          type="text"
          id="ipAddressBoard"
          class="form-control"
          v-model="ipAddressBoard">
      </div>
      <hr>
      <div class="sidebar-button-align">
        <input
          type="button"
          @click="sendJson"
          class="btn btn-success"
          value="Отправить">
        <!--input
          style="margin-left: 20px;"
          type="button"
          @click="loadformFile()"
          class="btn btn-warning"
          value="Загрузить"-->
        </div>
    </form>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    createDevice() {
      this.$store.commit('createDevice', {
        name: this.selectedDeviceType,
        selfIp: this.selfIpAddress || '127.0.0.1',
      });
    },
    deleteDevice() {
      this.$store.dispatch('deleteCurrentDevice');
      this.$router.push('/');
    },
    sendJson() {
      this.$store.commit('sendConfigurations');
    },
  },
  data() {
    return {
      selfIpAddress: '',
      comport: 0,
      ipAddressBoard: '',
      selectedDeviceType: 'MN825',
      deviceTypeList: [
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

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";

.sidebar-button-align {
  margin: auto;
}

.sidebar {
  background-color: $sidebar-background;
  min-height: 100vh;
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

