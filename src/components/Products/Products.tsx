import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ProductItem, { ProductItemProps } from './ProductItem/ProductItem';

const Products: React.FC = () => {
  const [data, setData] = useState<ProductItemProps[]>();

  const fetchImageData = useCallback(async () => {
    const imageData = await axios.get(
      'https://khatri-alankar.herokuapp.com/api/categories/get'
    );
    const res = imageData.data.data;

    setData(res);
  }, []);

  useEffect(() => {
    fetchImageData();
  }, [fetchImageData]);

  if (!data) return <div>Fetching....</div>;
  return (
    <>
      <section className="pt-20 font-poppins">
        <div className="mx-auto w-[80%]">
          <div className="">
            <hr />
            <h2 className="my-4 bg-gray-200 py-2 text-center text-3xl">
              We have all good &amp; Trusted products
            </h2>
            <hr />
          </div>
          <div className="mt-4 flex flex-wrap justify-between">
            {data.map((item: ProductItemProps) => (
              <ProductItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
