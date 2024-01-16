/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    const COMPONENTS = (await import("./components.constants.mjs"))?.default;
    const namesCamelCase = COMPONENTS.filter(
      (name) => (name.match(/[A-Z]/)?.length || 0) !== 0,
    ).map((name) => {
      return {
        source: `/client/${name.toLowerCase()}`,
        destination: `/client/${name}`,
      };
    });
    return namesCamelCase;
  },
};

export default nextConfig;
