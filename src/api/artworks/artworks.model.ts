export type ArtworksListModel = {
  records: {
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
  }[];
};

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
