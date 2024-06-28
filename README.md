## TODO

- [ ] Switch to primarily using tailwind with cn (clsx + twMerge) & use css for something obscure
- [ ] Make this a custom hook

```js
const searchParams = useSearchParams();
let [params, setParams] = useState("");
const [pageData, setPageData] = useState(csData[0]);

useEffect(() => {
  const url = searchParams.toString();
  setParams(url.replace("=", ""));
}, [searchParams]);

useEffect(() => {
  // Find the service in csData based on params
  if (params) {
    setPageData(csData[params]);
  } else {
    // Handle case where service is not found
    setPageData(csData[0]); // You can set it to an empty object or handle it differently
  }
}, [params]);
```

- [ ] clean up and use reuseble utility components, separate js and jsx completely
- [ ] create a template for array data (Maybe switch to typescript & use generics)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

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

## Deployments

https://neviton.com/
