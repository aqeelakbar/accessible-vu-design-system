<template>
  <button
    :class="['btn', `btn--${variant}`]"
    :disabled="disabled"
    @click="$emit('click')"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  ariaLabel?: string
}>()
</script>

<style scoped>
.btn {
  font-size: 1rem;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
}
.btn--primary {
  background-color: var(--color-primary);
  color: white;
}
.btn--secondary {
  background-color: var(--color-secondary);
  color: white;
}
</style>
