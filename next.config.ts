import type { NextConfig } from "next"
import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX({
  // customize the config file path if needed
  // configPath: "source.config.ts"
})

const nextConfig: NextConfig = {}

export default withMDX(nextConfig)

