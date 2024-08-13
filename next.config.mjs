/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/portfolio",
    // output: "export",
    // reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'personal-use-images.oss-cn-shanghai.aliyuncs.com',

            },
        ],
    },

};

export default nextConfig;
