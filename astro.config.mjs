// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import { defineConfig } from "astro/config";

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;
import { sanityIntegration } from "@narration-sd/sanity-astro";
import react from "@astrojs/react";

// Change this depending on your hosting provider (Vercel, Netlify etc)
// https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter
import netlify from "@astrojs/netlify";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  // Hybrid+adapter is required to support embedded Sanity Studio
  output: "server",
  adapter: netlify({
    imageCDN: false
  }),
  build: {
    output: 'static',
    // or another correct path based on your setup
    dist: 'dist',
    // default output folder
    format: 'directory' // ensure this is set to 'directory' (default) for correct file structure
  },
  integrations: [sanityIntegration({
    projectId,
    dataset,
    studioBasePath: "/admin",
    useCdn: false,
    // `false` if you want to ensure fresh data
    apiVersion: "2023-03-20" // Set to date of setup to use the latest API version
  }), react() // Required for Sanity Studio
  , robotsTxt()]
});