<template>
  <div>
    <h2>APD Config</h2>

    <h2>Control FL IO on Input</h2>
    <ControlFlIOForm flValue="2" krValue="2"/>

    <h2>Control TCH IO on Output</h2>
    <ControlTchIOForm tchValue="2" krValue="2" r168Value="R-168"/>
  </div>
</template>

<script>
import ControlFlIOForm from './ControlFlIOForm.vue';
import ControlTchIOForm from './ControlTchIOForm.vue';

export default {
  components: {
    ControlFlIOForm,
    ControlTchIOForm,
  },
};
</script>

