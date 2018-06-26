<template>
  <div>
    <h2>Настройка APD</h2>

    <h2>FL вход</h2>
    <ControlFlIOForm flValue="2" krValue="2"/>

    <h2>FL выход</h2>
    <ControlFlIOForm flValue="2" krValue="2"/>

    <h2>TCH вход</h2>
    <ControlTchIOForm tchValue="2" krValue="2" r168Value="R-168"/>

    <h2>TCH выход</h2>
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

