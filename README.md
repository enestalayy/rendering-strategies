# Nuxt 3 Rendering Strategies

This project is an implementation of the concepts discussed in my Medium article titled [Rendering Strategies With Nuxt 3](https://medium.com/@enestalayy/rendering-strategies-with-nuxt-3-a4b29c5ba7c9).

## Live Demo

Check out the live demo: [Rendering Strategies Nuxt 3 Live Demo](https://rendering-strategies-nuxt.vercel.app/)

## Project Overview

In this project, I've focused on applying various rendering strategies of Nuxt 3, as outlined in the Medium article:

- Universal Rendering
- Server-Side Rendering (SSR)
- Client-Side Rendering (CSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Hybrid Rendering

Each rendering strategy's advantages, disadvantages, and use cases are explained in detail.

## Project Contents

The project content delves into the following topics:

- The hydration process and advantages for Universal Rendering
- Advantages and disadvantages of Server-Side Rendering (SSR) and Client-Side Rendering (CSR) methods
- Flexibility and performance gains with Hybrid Rendering
- Use cases and advantages of Static Site Generation (SSG) and Incremental Static Regeneration (ISR) techniques

## Getting Started

1. Clone the project repository:

    ```bash
    git clone https://github.com/enestalay/nuxt-rendering-strategies.git
    cd nuxt-rendering-strategies
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the project:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to observe the project.

## Routing Customizations

Within the project, examples of using `routeRules` in the `nuxt.config.js` file to customize rendering strategies for specific pages are provided.

```javascript
//nuxt.config.js
export default defineNuxtConfig({
    routeRules: {
      "/csr": { ssr: false },
      // Other examples...
    },
})
