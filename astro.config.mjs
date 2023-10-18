import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno()
});