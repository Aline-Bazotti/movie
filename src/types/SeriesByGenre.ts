/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeriesByGenre
// ====================================================

export interface SeriesByGenre_seriesByGenre_image {
  name: string | null;
  url: string;
}

export interface SeriesByGenre_seriesByGenre {
  id: string;
  title: string;
  year: number;
  resume: string;
  genre: string;
  seasons: string;
  image: SeriesByGenre_seriesByGenre_image | null;
}

export interface SeriesByGenre {
  seriesByGenre: SeriesByGenre_seriesByGenre[];
}

export interface SeriesByGenreVariables {
  genre: string;
}
