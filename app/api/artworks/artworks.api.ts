import { getFeaturedMock } from '@/api/artworks/artworks.mock';
import { ArtworkModel } from '@/api/artworks/artworks.model';
import { BASE_URL, headers, useAPImocks } from '@/api/config';

export const getFeatured = async (): Promise<ArtworkModel> => {
  if (useAPImocks) {
    return getFeaturedMock();
  } else {
    const data = await fetch(`${BASE_URL}/artworks/recp7Ph6m0VYKoBkO`, {
      headers
    });

    const featured = await data.json();
    return featured;
  }
};
