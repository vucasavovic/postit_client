import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler(async (event) => {
  const proxy = createProxyMiddleware('/api', {
    target: 'http://localhost:5555', // Replace with your backend URL
    changeOrigin: true, // Updates the request origin to match the target
    pathRewrite: { '^/api': '' }, // Optional: Rewrite '/api' to '' in the backend
  });

  

  // Proxy the request
  return promisifyNodeMiddleware(proxy)(event.node.req, event.node.res);
});