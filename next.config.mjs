/** @type {import('next').NextConfig} */
const nextConfig = {

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
