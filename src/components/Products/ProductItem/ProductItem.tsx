export interface ProductItemProps {
  category: string;
  id: string;
  imageUrl: string;
}
const ProductItem: React.FC<ProductItemProps> = ({ category, imageUrl }) => {
  return (
    <>
      <div className="m-4 min-h-full transition duration-200 hover:scale-110">
        <figure className="text-center">
          <img
            src={imageUrl}
            className=" min-w-full rounded-md border-2"
            alt=""
          />
          <figcaption className="text-lg">{category}</figcaption>
        </figure>
      </div>
    </>
  );
};

export default ProductItem;
