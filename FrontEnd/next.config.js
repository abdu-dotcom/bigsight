/** @type {import('next').NextConfig} */

const nextTraslate = require("next-translate");

const nextConfig = {
    ...nextTraslate(),
    reactStrictMode: true,
    modules: true,
    images: {
        domains: ["http://localhost:5000/"],
    },
};

module.exports = nextConfig;