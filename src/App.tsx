import React, { Suspense } from 'react';
// import Banner from './components/Banner/Banner';
const Banner = React.lazy(() => import('./components/Banner/Banner'));
// import Content from './components/Content/Content';
const Content = React.lazy(() => import('./components/Content/Content'));
// import Products from './components/Products/Products';
const Products = React.lazy(() => import('./components/Products/Products'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Products />
        <Content />
      </Suspense>
    </>
  );
}

export default App;
