<template>
  <label :for="id" class="input-label">
    {{ label }}
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-required="required"
      :aria-invalid="invalid"
      class="input-field"
    />
  </label>
</template>

<script lang="ts" setup>
defineProps<{
  id: string
  label: string
  modelValue: string
  required?: boolean
  invalid?: boolean
  type?: string
}>()
</script>

<style scoped>
.input-label {
  display: block;
  margin-bottom: var(--space-sm);
}
.input-field {
  padding: var(--space-sm);
  border: 1px solid #ccc;
  border-radius: var(--radius-sm);
  width: 100%;
}
</style>
