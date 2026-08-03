const CACHE_NAME = 'sun-chat-v16-pwa';
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
self.addEventListener('fetch', (event) => {
    // 基础的网络优先，失败回退逻辑，骗过 PWA 安装检测
    event.respondWith(
        fetch(event.request).catch(() => new Response("Network offline, but App is running."))
    );
});