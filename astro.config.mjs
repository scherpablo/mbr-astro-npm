import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // ...
  env: {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/public/',
  },
});
