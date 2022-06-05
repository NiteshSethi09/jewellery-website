import { useNavigate } from 'react-router-dom';

export interface ProductItemProps {
  category: string;
  id: string;
  imageUrl: string;
}
const ProductItem: React.FC<ProductItemProps> = ({ category, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="m-4 w-[30%] transition duration-200 hover:scale-110"
        onClick={() => navigate(`/${category}`)}
      >
        <figure className="text-center">
          <img
            src={imageUrl}
            className="min-w-full rounded-md border-2"
            alt=""
          />
          <figcaption className="text-lg">{category}</figcaption>
        </figure>
      </div>
    </>
  );
};

export default ProductItem;
