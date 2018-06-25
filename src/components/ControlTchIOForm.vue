<template>
  <div>
    <label>Control TCH </label>
    <select class="form-control" v-model.number="tchValue">
      <option selected>1</option>
      <option>2</option>
    </select>

    <label>Control KR</label>
    <select class="form-control" v-model.number="krValue">
      <option selected>1</option>
      <option>2</option>
    </select>

    <label>Control R-168</label>
    <select class="form-control" v-model.number="r168Value">
      <option selected>R-168</option>
      <option>R-168 100KB</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tchValue: 1,
      krValue: 1,
      r168Value: 'R-168',
    };
  },

  watch: {
    tchValue(newValue) {
      this.$emit('tchChange', newValue);
    },

    krValue(newValue) {
      this.$emit('krChange', newValue);
    },

    r168Value(newValue) {
      this.$emit('r168Change', newValue);
    },
  },
};
</script>

