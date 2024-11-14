import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './cert.key')),
      cert: fs.readFileSync(path.resolve(__dirname, './cert.crt')),
    },
    host: true, // Ensures the server is bound to 0.0.0.0, accessible from other devices
    port: 5173, // Ensure the port is correct
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
