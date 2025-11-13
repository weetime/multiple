<template>
  <div class="content">
    <div class="card">
      <h2>Contact Model-X</h2>
      <p>This is the contact page of Model-X.</p>
      <div class="info-section">
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Email:</strong> model-x@example.com</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Address:</strong> 123 Main St, City, State</li>
        </ul>
      </div>
      <div class="info-section">
        <h3>Project Details</h3>
        <ul>
          <li><strong>Name:</strong> Model-X</li>
          <li><strong>Framework:</strong> Vue 3</li>
          <li><strong>Build Tool:</strong> Vite</li>
          <li><strong>Architecture:</strong> Monorepo</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// Contact page component.
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
  color: #f5576c;
  font-weight: bold;
  font-size: 1.2rem;
}

.info-section strong {
  color: #333;
}
</style>

