import { ArtworkModel, CartModel } from '../../api/artworks/artworks.model';
import { Button } from '../button';

type ProductsItemProps = {
  product: ArtworkModel;
  handleAddToCart: (item: CartModel) => void;
  handleRemoveFromCart: (item: CartModel) => void;
};

export const ProductsItem = ({ product, handleAddToCart, handleRemoveFromCart }: ProductsItemProps) => {
  return (
    <li className="m-3 w-72 overflow-hidden rounded-md border border-gray-200 bg-white">
      <img src={product.fields.imageSrc} alt={product.fields.imageAlt} className="h-96 w-full object-cover " />
      <div className="p-3">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {product.fields.category}
        </span>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{product.fields.name}</p>
        <p className="mb-2 text-base font-semibold leading-7 text-gray-900">
          {product.fields.price.toFixed(2)} {product.fields.currency}
        </p>
        <div className="mb-2 flex justify-evenly">
          <Button kind="addOrRemove" onClick={() => handleAddToCart(product as CartModel)}>
            +
          </Button>
          <Button kind="addOrRemove" onClick={() => handleRemoveFromCart(product as CartModel)}>
            -
          </Button>
        </div>
      </div>
    </li>
  );
};
