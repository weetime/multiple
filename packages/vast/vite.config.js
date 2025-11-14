import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Allow external access.
    cors: true, // Enable CORS.
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Modern build optimizations.
    cssCodeSplit: true,
    minify: 'esbuild', // Use esbuild for faster minification.
    target: 'esnext', // Target modern browsers.
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
        },
        // Optimize chunk file names.
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Chunk size warnings threshold.
    chunkSizeWarningLimit: 1000,
    // Report compressed size.
    reportCompressedSize: true,
  },
  // Optimize dependencies.
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
