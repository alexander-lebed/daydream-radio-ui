const withOffline = require('next-offline');

const nextConfig = {
    target: 'server',
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
    // turn on the SW in dev mode so that we can actually test it
    generateInDevMode: true,
    workboxOpts: {
        swDest: '../public/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'images',
                    expiration: {
                        maxEntries: 10,
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'https-calls',
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
};

module.exports = withOffline(nextConfig);