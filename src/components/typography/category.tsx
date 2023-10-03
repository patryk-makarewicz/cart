type CategoryProps = {
  category: string;
  subcategory?: string;
};

export const Category = ({ category, subcategory }: CategoryProps) => (
  <h2 className="mb text-xl font-semibold leading-7 text-gray-900">
    {category}
    {subcategory && (
      <>
        {' '}
        / <span className="font-normal text-gray-500">{subcategory}</span>
      </>
    )}
  </h2>
);
