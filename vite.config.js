import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.MAIN_CONTACT_FORM_SERVICE_KEY": JSON.stringify(
        env.MAIN_CONTACT_FORM_SERVICE_KEY
      ),
      "process.env.MAIN_CONTACT_FORM_TEMPLATE_KEY": JSON.stringify(
        env.MAIN_CONTACT_FORM_TEMPLATE_KEY
      ),
      "process.env.MAIN_CONTACT_FORM_PUBLIC_KEY": JSON.stringify(
        env.MAIN_CONTACT_FORM_PUBLIC_KEY
      ),
      "process.env.HERO_HEADER_FROM_SERVICE_KEY": JSON.stringify(
        env.HERO_HEADER_FROM_SERVICE_KEY
      ),
      "process.env.HERO_HEADER_FROM_TEMPLATE_KEY": JSON.stringify(
        env.HERO_HEADER_FROM_TEMPLATE_KEY
      ),
      "process.env.HERO_HEADER_FROM_PUBLIC_KEY": JSON.stringify(
        env.HERO_HEADER_FROM_PUBLIC_KEY
      ),
    },
    plugins: [react()],
  };
});
