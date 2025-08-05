<template>
  <div v-if="open" class="modal-overlay" role="dialog" aria-modal="true">
    <div class="modal-content" tabindex="-1" ref="modalRef">
      <button class="close-button" @click="$emit('close')" aria-label="Close modal">×</button>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

defineProps<{ open: boolean }>();
const emit = defineEmits(['close']);
const modalRef = ref(null);

onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus();
  }
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: var(--space-md);
  border-radius: var(--radius-sm);
  outline: none;
}
.close-button {
  position: absolute;
  top: var(--space-sm);
  right: var(--space-sm);
  background: none;
  border: none;
  font-size: 1.5rem;
}
</style>
