/** @type {import('next').NextConfig} */
const nextConfig = {
    // async redirects() {
    //     return [
    //       // Basic redirect
    //       {
    //         source: '/home',
    //         destination: '/home/projects',
    //         permanent: true,
    //       },
    //       {
    //         source: '/',
    //         destination: '/home/projects',
    //         permanent: true,
    //       }
    //     ]
    //   },

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
