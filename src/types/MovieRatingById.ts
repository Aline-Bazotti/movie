/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieRatingById
// ====================================================

export interface MovieRatingById_movieRatingById {
  id: string;
  id_movie: number;
  direction: number;
  script: number;
  acting: number;
}

export interface MovieRatingById {
  movieRatingById: MovieRatingById_movieRatingById | null;
}

export interface MovieRatingByIdVariables {
  movieId: string;
}
