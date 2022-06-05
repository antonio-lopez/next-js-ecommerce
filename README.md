<div id="top"></div>

# Amiibo Hub

> A fake Next.js Ecommerce store where you can purchase an assortment of Amiibos at unbeatable prices.

## Table of contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
- [Author](#author)

## About The Project

🌐 [Live Demo](https://antonio-amiibo-hub.vercel.app/)

![screenshot](/public/amiibo-hub-screenshot.png)

- A responsive, full-stack, Next.js Ecommerce application where you can browse for Amiibos, add them to your cart, and checkout
- Stripe integration for processing payments, shipping rates, and checkout process.
- Products are easily managed using Sanity, a content management system, as the backend.
- Optimized data fetching using Next.js server-side rendering and static generation.
- State management using React Context API.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/)
- [Stripe](https://stripe.com/)
- [Amiibo API](https://github.com/N3evin/AmiiboAPI)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Have installed the latest stable version of [node.js](https://nodejs.org/en/)
- Sign up for a [Sanity account](https://www.sanity.io/), create your dataset, and obtain your `Sanity Token`, `Project ID`, and `Dataset`.
- Sign up for a [Stripe account](https://stripe.com/) and obtain your `Publishable Key` and `Secret Key`.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

Clone repository

```
git clone https://github.com/antonio-lopez/next-js-ecommerce
```

Install dependencies

```
cd next-js-ecommerce
npm install

cd sanity-ecommerce
npm install
```

Create a `.env` file in the root of your project and fill in these environment variables with your custom keys.

```
NEXT_PUBLIC_SANITY_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_SECRET_KEY=
```

Fetch data from the Amiibo API using `sanityExternalAPIFetch.js` script by filling in the variables with your own Sanity dataset.

```
const client = sanityClient({
  projectId: '',
  dataset: '',
  apiVersion: '',
  token: '',
  useCdn: true,
});
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

```
cd next-js-ecommerce
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

Amiibo images and information pulled from N3evin's Amiibo API and transferred using Sanity's external API fetch.

- Amiibo API - An Amiibo database that holds all amiibo information in a single API
  - [Github](https://github.com/N3evin/AmiiboAPI)
  - [Documentation](https://www.amiiboapi.com/docs/)
- Sanity external API fetch
  - [Guide](https://www.sanity.io/guides/guide-importing-data-from-external-sources)

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)

<p align="right">(<a href="#top">back to top</a>)</p>
