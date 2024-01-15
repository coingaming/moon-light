/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    const COMPONENTS = (await import("./components.constants.mjs"))?.default;
    const namesCamelCase = COMPONENTS.filter((name) => /A-Z/.test(name)).map(
      (name) => {
        return {
          source: `/client/${name.toLowerCase()}`,
          destination: `/client/${name}`,
          permanent: true,
        };
      },
    );
    return namesCamelCase;
  },
};

export default nextConfig;
