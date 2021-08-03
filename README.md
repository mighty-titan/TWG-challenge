This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### App routes
`/` - main page with sticky header and a call to action button which open the modal

`/products` - modal with input for product suggestions, adding `?query=${value}` to the link allows to open the modal with prefilled input

### Api

`/api/products` - endpoint to fetch products list, if `?query=` is added to the URL it will return all record that include the query
