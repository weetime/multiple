<template>
  <div class="content">
    <div class="card">
      <h2>About Vast</h2>
      <p>This is the about page of Vast.</p>
      <div class="info-section">
        <h3>Project Information</h3>
        <ul>
          <li><strong>Name:</strong> Vast</li>
          <li><strong>Framework:</strong> Vue 3</li>
          <li><strong>Build Tool:</strong> Vite</li>
          <li><strong>Architecture:</strong> Monorepo</li>
        </ul>
      </div>
      <div class="info-section">
        <h3>Technology Stack</h3>
        <ul>
          <li>Vue 3 Composition API</li>
          <li>Vue Router 4</li>
          <li>Vite 5</li>
          <li>ESLint & Prettier</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// About page component.
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

.info-section {
  margin-top: 2rem;
}

.info-section h3 {
  margin: 0 0 1rem;
  color: #333;
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-section li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.info-section li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
  font-size: 1.2rem;
}

.info-section strong {
  color: #333;
}
</style>

