import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/welcome',
    //             permanent: true // set to true if this is a permanent redirect
    //         }
    //     ]
    // },
    // basePath: '/MyWebsite',
    images: {
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        icon: true
                    }
                }
            ]
        })

        return config
    }
}

export default nextConfig
