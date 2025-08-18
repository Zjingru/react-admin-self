import { defineConfig } from 'vite'
// import { resolve } from 'path';
import react from '@vitejs/plugin-react'
// import path from 'path';

import { fileURLToPath } from 'url';
import { dirname ,resolve} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{ 
    alias: {
      '@': resolve(__dirname, 'src') // 将 '@' 指向 src 目录
    }
  }
})
