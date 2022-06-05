import React, { Suspense } from 'react';
const Banner = React.lazy(() => import('../components/Banner/Banner'));
const Content = React.lazy(() => import('../components/Content/Content'));
const Products = React.lazy(() => import('../components/Products/Products'));
const Contact = React.lazy(() => import('../components/Contact/Contact'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));

function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Products />
        <Content />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
