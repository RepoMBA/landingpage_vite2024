import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    ssr: "src/entry-server.tsx",
    rollupOptions: {
      input: "src/entry-client.tsx",
    },
  },
  // plugins: [react()],
});
