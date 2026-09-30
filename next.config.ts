import type { NextConfig } from 'next';
import { DEFAULT_LOCALE } from './config/site';

const nextConfig: NextConfig = {
  // Главная показывает язык по умолчанию, адрес в браузере остаётся "/".
  async rewrites() {
    return [{ source: '/', destination: `/${DEFAULT_LOCALE}` }];
  },
};

export default nextConfig;
