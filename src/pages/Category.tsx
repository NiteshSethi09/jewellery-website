import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  category: string;
  description: string;
  id: string;
  metalQualityType: string;
  images: Array<string>;
  metalType: string;
  personFor: string;
  referenceName: string;
  weight: number;
}

const Category: React.FC = () => {
  const { category } = useParams();
  const [state, setState] = useState<Product[]>();
  const fetchImageData = async () => {
    const imageData = await axios.post(
      `https://khatri-alankar.herokuapp.com/api/products/getWithFilters`,
      {
        category,
        personFor: "MALE",
      }
    );
    setState(imageData.data.data);
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  if (!state) return <div className="">No such product available yet...</div>;
  return (
    <>
      {state.map((item: Product) => (
        <div
          className="m-4 w-[30%] transition duration-200 hover:scale-110"
          key={item.id}
        >
          <figure className="text-center">
            <img
              src={item.images[0]}
              alt=""
              className="min-w-full rounded-md border-2"
            />
            <figcaption>{item.description}</figcaption>
          </figure>
        </div>
      ))}
    </>
  );
};

export default Category;
