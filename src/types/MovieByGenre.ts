/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieByGenre
// ====================================================

export interface MovieByGenre_movieByGenre_image {
  name: string | null;
  url: string;
}

export interface MovieByGenre_movieByGenre {
  id: string;
  title: string;
  year: number;
  resume: string;
  genre: string;
  duration: string;
  country: string;
  image: MovieByGenre_movieByGenre_image | null;
}

export interface MovieByGenre {
  movieByGenre: MovieByGenre_movieByGenre[];
}

export interface MovieByGenreVariables {
  genre: string;
}
