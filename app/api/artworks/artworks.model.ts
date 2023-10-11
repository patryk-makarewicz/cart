export type ArtworkModel = {
  id: string;
  createdTime: string;
  fields: {
    imageAlt: string;
    price: number;
    imageSrc: string;
    category: string;
    bestseller: string;
    featured: string;
    details: string;
    name: string;
    recommendations: string;
    currency: string;
  };
};

export type CartModel = ArtworkModel & {
  quantity: number;
};

export type ArtworksListDTO = {
  records: ArtworkModel[];
};
