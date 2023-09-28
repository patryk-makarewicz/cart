import { BASE_URL, headers } from '../config';
import { ArtworksListModel } from './artworks.model';

export const getArtworks = async (): Promise<ArtworksListModel> => {
  const data = await fetch(`${BASE_URL}/artworks?view=default`, { headers, next: { revalidate: 0 } });
  const artworks = await data.json();

  return artworks;
};
