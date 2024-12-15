This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

this is,add to card hero section's code, so , 
// pages/index.jsx
import Head from "next/head";
import CeramicsShowcase from "../components/CeramicsShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>Ceramics Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CeramicsShowcase />
      </main>
    </div>
  );
}

hero,tsx
// components/CeramicsShowcase.jsx
export default function CeramicsShowcase() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          New Ceramics
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Product Card */}
        {[
          {
            name: "The Dandy Chair",
            price: "£250",
            image:
              "https://example.com/dandy-chair.jpg", // Replace with actual URLs
          },
          {
            name: "Rustic Vase Set",
            price: "£155",
            image:
              "https://example.com/rustic-vase.jpg", // Replace with actual URLs
          },
          {
            name: "The Silky Vase",
            price: "£125",
            image:
              "https://example.com/silky-vase.jpg", // Replace with actual URLs
          },
          {
            name: "The Lucy Lamp",
            price: "£399",
            image:
              "https://example.com/lucy-lamp.jpg", // Replace with actual URLs
          },
        ].map((product, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <img
              className="mx-auto h-40 w-40 object-contain"
              src={product.image}
              alt={product.name}
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h2>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex justify-center">
        <button className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          View Collection
        </button>
      </div>
    </div>
  );
}
