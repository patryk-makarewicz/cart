import { ArtworksListModel } from '@/api/artworks/artworks.model';
import { BASE_URL, headers } from '@/api/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const artworksApi = createApi({
  reducerPath: 'artworkApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    headers
  }),
  endpoints: (builder) => ({
    getArtworks: builder.query<ArtworksListModel, null>({
      query: () => '/artworks?view=default'
    })
  })
});

export const { useGetArtworksQuery } = artworksApi;
