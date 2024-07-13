/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeQuery
// ====================================================

export interface HomeQuery_movies_image {
  name: string | null;
  url: string;
}

export interface HomeQuery_movies {
  id: string;
  title: string;
  year: number;
  resume: string;
  genre: string;
  duration: string;
  country: string;
  image: HomeQuery_movies_image | null;
}

export interface HomeQuery {
  movies: HomeQuery_movies[];
}
