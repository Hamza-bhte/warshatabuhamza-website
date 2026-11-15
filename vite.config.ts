import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function seoStaticHeadersPlugin(): Plugin {
  const serveSeoFile = (baseDir: string) => {
    return (
      req: {url?: string},
      res: {
        statusCode: number;
        setHeader: (name: string, value: string) => void;
        end: (data: Buffer | string) => void;
      },
      next: () => void,
    ) => {
      const reqPath = (req.url || '').split('?')[0];
      if (reqPath === '/sitemap.xml') {
        const filePath = path.resolve(baseDir, 'sitemap.xml');
        if (fs.existsSync(filePath)) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.end(fs.readFileSync(filePath));
          return;
        }
      }
      if (reqPath === '/robots.txt') {
        const filePath = path.resolve(baseDir, 'robots.txt');
        if (fs.existsSync(filePath)) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.end(fs.readFileSync(filePath));
          return;
        }
      }
      next();
    };
  };

  return {
    name: 'seo-static-headers',
    configureServer(server) {
      server.middlewares.use(serveSeoFile(path.resolve(__dirname, 'public')));
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveSeoFile(path.resolve(__dirname, 'dist')));
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), seoStaticHeadersPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
