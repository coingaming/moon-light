/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/client/:component/:example",
        destination: "/client?second=:component&raw=:example",
        // Since the :first parameter is used in the destination the :second parameter
        // will not automatically be added in the query although we can manually add it
        // as shown above
      },
      {
        source: "/client/:component",
        destination: "/client?second=:component",
      },
    ];
  },
};

module.exports = nextConfig;
