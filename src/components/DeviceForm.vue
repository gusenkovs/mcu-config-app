<template>
  <div>
    <h2>Device Config</h2>

    <label for="serverIp">Server IP</label>
    <input type="text" class="form-control" id="serverIp">

    <label for="serverSipPort">Server SIP Port</label>
    <input type="text" class="form-control" id="serverSipPort">

    <label for="selfIp">Self IP</label>
    <input type="text" class="form-control" id="selfIp">

    <label for="subnetMask">Subnet Mask</label>
    <input type="text" class="form-control" id="subnetMask">

    <label for="gateway">Gateway</label>
    <input type="text" class="form-control" id="gateway">

    <label for="r168ConfigPort">R-168 Config Port</label>
    <input type="text" class="form-control" id="r168ConfigPort">

    <ApdConfigForm/>
  </div>
</template>

<script>
import ApdConfigForm from './ApdConfigForm.vue';

export default {
  components: {
    ApdConfigForm,
  },
};
</script>

<style lang="scss">
label {
  font-size: 1rem;
}
</style>

