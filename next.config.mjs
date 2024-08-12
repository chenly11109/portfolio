/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/home/projects",
    output: "export",
    reactStrictMode: true,

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
