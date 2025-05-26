// import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";
// const withNextIntl = createNextIntlPlugin();
// Get directory name using ES Module approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const sassOptions: import('next').NextConfig = {
  additionalData: `
    $var: red;
  `,
}
const nextConfig = {
  sassOptions: {
    ...sassOptions,
    implementation: "sass-embedded",
    includePaths: [path.join(__dirname, "src/styles")],
  },
  reactStrictMode: false,
  swcMinify: false,
};
export default nextConfig

// export default withNextIntl(nextConfig);
