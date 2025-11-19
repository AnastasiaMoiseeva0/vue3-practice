<template>
  <div class="form-control" :class="{ invalid: error}">
    <label :for="id">{{label}}</label>
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="change"
      />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    placeholder: String,
    label: String,
    error: String
  },
  methods: {
    change (event) {
      this.$emit('update:modelValue', event.target.value)
    }

  },
  data () {
    return {
      id: 'input-' + Math.random()
    }
  }
}
</script>
