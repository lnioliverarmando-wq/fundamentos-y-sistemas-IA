import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', devIndicators: false, allowedDevOrigins: ['terminal.local'], experimental: { reactDebugChannel: false }, trailingSlash: true, images: { unoptimized: true } };
export default config;
