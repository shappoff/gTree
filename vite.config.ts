import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path for GitHub Pages project sites: https://<user>.github.io/<repo>/
// Set VITE_BASE_PATH in CI or use repo name from GITHUB_REPOSITORY
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesBase =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/');

export default defineConfig({
  plugins: [react()],
  base: pagesBase,
});
