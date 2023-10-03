import { CartModel } from '@/api/artworks/artworks.model';
import { useTranslation } from '@/app/i18n/client';

type CartListProps = {
  cart: CartModel[];
  lng: string;
};

export const CartList = ({ cart, lng }: CartListProps) => {
  const { t } = useTranslation(lng);

  return (
    <ul className="mb-3 flex w-96 flex-col rounded-md border border-gray-200 bg-white px-3 pt-3">
      {cart.map((item) => (
        <li key={item.id} className="mb-3 flex items-center">
          <img
            src={item.fields.imageSrc}
            alt={item.fields.imageAlt}
            className="mr-3 h-20 w-16 rounded-sm object-cover"
          />
          <div>
            <p className="mt max-w-2xl text-sm leading-6 text-gray-500">{item.fields.name}</p>
            <p className="mb text-base font-semibold leading-6 text-gray-900">
              {item.fields.price.toFixed(2)}$ {item.fields.currency}
            </p>
            <p className="text-base leading-6 text-gray-900">
              {t('page.cart.items')}: {item.quantity}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
