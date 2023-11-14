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
    description?: string;
    dimensionsWidth?: number;
    dimensionsHeight?: number;
    size?: number;
  };
};

export type CartModel = ArtworkModel & {
  quantity: number;
};

export type ArtworksListDTO = {
  records: ArtworkModel[];
};

export enum ArtworksListSortMethod {
  DEFAULT = 'default',
  PRICE = 'sort%5B0%5D%5Bfield%5D=price',
  PRICE_DESC = 'sort%5B0%5D%5Bfield%5D=price&sort%5B0%5D%5Bdirection%5D=desc',
  NAME = 'sort%5B0%5D%5Bfield%5D=name',
  NAME_DESC = 'sort%5B0%5D%5Bfield%5D=name&sort%5B0%5D%5Bdirection%5D=desc'
}

export type RangeParams = 'none' | 'lower' | 'middle' | 'higher' | 'more';

export type FiltersParams = {
  category: string[];
  range: RangeParams;
};
