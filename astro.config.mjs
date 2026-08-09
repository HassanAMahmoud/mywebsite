// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://hassan-mahmoud.netlify.app",
  redirects: {
    "/projects": "/research",
    "/projects/printable-near-field-strain-sensors":
      "/research/printable-e-tattoo-wireless-sensors",
    "/projects/e-tattoo-wireless-sensors":
      "/research/printable-e-tattoo-wireless-sensors",
    "/projects/lig-temperature-sensing": "/research/lig-flexible-sensors",
    "/projects/printable-e-tattoo-wireless-sensors":
      "/research/printable-e-tattoo-wireless-sensors",
    "/projects/wireless-crack-strain-sensors":
      "/research/wireless-crack-strain-sensors",
    "/projects/event-driven-edge-ai-shm": "/research/event-driven-edge-ai-shm",
    "/projects/lig-flexible-sensors": "/research/lig-flexible-sensors",
    "/projects/wearable-hmi-sensing": "/research/wearable-hmi-sensing",
    "/projects/composite-joint-toughness":
      "/research/composite-joint-toughness",
  },
});
