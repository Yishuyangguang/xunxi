const CACHE_NAME = 'sun-chat-v14-pwa';
// 让 Service Worker 立即接管页面，触发安装机制
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
// 拦截网络请求，保证即使断网也能打开 APP 骨架
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => new Response("Network offline")));
});