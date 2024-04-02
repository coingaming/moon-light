/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    const COMPONENTS = (await import("./components.constants.mjs"))?.default;
    const namesCamelCase = Object.keys(COMPONENTS)
      .filter((name) => (name.match(/[A-Z]/)?.length || 0) !== 0)
      .map((name) => {
        return {
          source: `/client/${name.toLowerCase()}`,
          destination: `/client/${name}`,
        };
      });
    return namesCamelCase;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
