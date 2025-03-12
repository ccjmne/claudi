// @ts-check
import { defineConfig } from 'astro/config'
import pkg from './package.json'

// https://astro.build/config
export default defineConfig({
  site: `https://${pkg.author.handle}.github.io`,
  base: pkg.name,
})
