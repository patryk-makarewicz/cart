import { ArtworksListDTO } from '@/api/artworks/artworks.model';
import { request } from '@/api/request';

export const getArtworksMock = () => {
  return request<ArtworksListDTO>({
    records: [
      {
        id: 'recOOCGhyxR83tpnt',
        createdTime: '2021-11-03T11:06:10.000Z',
        fields: {
          imageAlt: 'About the Pizza',
          price: 99.99,
          imageSrc:
            'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          category: 'food',
          bestseller: 'false',
          featured: 'false',
          details: 'null',
          name: 'Pizza from mocks',
          recommendations: 'false',
          currency: 'USD'
        }
      }
    ]
  });
};
