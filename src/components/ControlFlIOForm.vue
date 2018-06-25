<template>
  <div>
    <label>Control FL</label>
    <select class="form-control" v-model.number="flValue">
      <option selected>1</option>
      <option>2</option>
    </select>

    <label>Control KR</label>
    <select class="form-control" v-model.number="krValue">
      <option selected>1</option>
      <option>2</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flValue: 1,
      krValue: 1,
    };
  },

  watch: {
    flValue(newValue) {
      this.$emit('flChange', newValue);
    },

    krValue(newValue) {
      this.$emit('krChange', newValue);
    },
  },
};
</script>

