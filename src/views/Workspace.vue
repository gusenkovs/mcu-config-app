<template>
  <div>
    <h1>Hello world, it`s u workspace</h1>
    <p>Create a new device or select from existings</p>
  </div>
</template>

<script>
// import { Device } from '../models';

export default {
  name: 'Workspace',
  data() {
    return {
      device: null,
    };
  },
  methods: {

  },
  beforeMount() {
    this.$store.commit('deselectDevice');
  },
};
</script>

