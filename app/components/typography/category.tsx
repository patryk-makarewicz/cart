type CategoryProps = {
  category: string;
  subcategory?: string;
};

export const Category = ({ category, subcategory }: CategoryProps) => (
  <h2 className="mb-2.5 text-xl font-semibold leading-7">
    {category}
    {subcategory && (
      <>
        {' '}
        / <span className="font-normal text-appGray">{subcategory}</span>
      </>
    )}
  </h2>
);
