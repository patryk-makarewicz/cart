import { BASE_URL, headers, useAPImocks } from '../config';
import { getArtworksMock } from './artworks.mock';
import { ArtworksListDTO } from './artworks.model';

export const getArtworks = async (): Promise<ArtworksListDTO> => {
  if (useAPImocks) {
    return getArtworksMock();
  } else {
    const data = await fetch(`${BASE_URL}/artworks?view=default`, { headers, next: { revalidate: 0 } });
    const artworks = await data.json();
    return artworks;
  }
};
