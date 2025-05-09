This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To run Dev mode localy:

```bash
npm run dev
```

To run Standalone mode localy:

```bash
npm run build
cd .next/standalone
cp -R ../static ./.next/static
node server.js
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You will get the random value generated at BUILD time instead of getting the value from the server component.
