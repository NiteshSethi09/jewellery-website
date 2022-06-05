import React from 'react';
import ContentItem from '../ContentItem/ContentItem';

const Content: React.FC<{}> = () => {
  return (
    <section className="pt-20 font-poppins">
      <div className="mx-auto w-[80%]">
        <div className="relative flex items-center justify-center pb-5">
          <span className="abs-content mr-5" />
          <h1 className="text-5xl font-bold text-[#2d2e2e]">Best Jewellery</h1>
          <span className="abs-content ml-5" />
        </div>
        <p className="text-center text-[#1d1d1d]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo mollitia
          excepturi praesentium repellendus eum ea laborum facere, neque facilis
          nisi sunt ab ad totam corporis dignissimos at velit. Accusantium,
          aspernatur!
        </p>
      </div>
      <div className="mx-auto w-[80%]">
        <ContentItem />
        <ContentItem classes="flex-row-reverse" />
        <ContentItem />
        <ContentItem classes="flex-row-reverse" />
      </div>
    </section>
  );
};

export default Content;
