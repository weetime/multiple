<template>
  <div class="content">
    <div class="card">
      <h2>Welcome to Model-X</h2>
      <p>This is the home page of Model-X.</p>
      <div class="demo-section">
        <p class="info">Current date: {{ formattedDate }}</p>
        <p class="info">Unique ID: {{ uniqueId }}</p>
        <button @click="handleClick" class="btn">Count is: {{ count }}</button>
        <p class="hint">Click button uses debounce from shared package</p>
      </div>
      <div class="features">
        <h3>Features:</h3>
        <ul>
          <li>Vue 3 Composition API</li>
          <li>Vite for fast development</li>
          <li>Shared utilities from @multiple/shared</li>
          <li>Shared Layout component</li>
          <li>Vue Router integration</li>
          <li>Unique ID generation demo</li>
          <li>Modern UI design with pink theme</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { formatDate, debounce, generateId } from '@multiple/shared';

const count = ref(0);
const formattedDate = computed(() => formatDate(new Date()));
const uniqueId = ref(generateId());

const handleClick = debounce(() => {
  count.value++;
  console.log('Button clicked! Count:', count.value);
}, 300);
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  margin: 0 0 1rem;
  color: #333;
}

.card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.info {
  color: #f5576c;
  font-weight: 500;
  margin: 0;
}

.hint {
  font-size: 0.875rem;
  color: #999;
  margin: 0;
  font-style: italic;
}

.btn {
  background: #f5576c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  align-self: flex-start;
}

.btn:hover {
  background: #e04a5f;
}

.features {
  margin-top: 2rem;
}

.features h3 {
  margin: 0 0 1rem;
  color: #333;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #f5576c;
  font-weight: bold;
}
</style>

