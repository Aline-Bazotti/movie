/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieQuery
// ====================================================

export interface MovieQuery_movieById_image {
  name: string | null;
  url: string;
}

export interface MovieQuery_movieById {
  id: string;
  title: string;
  year: number;
  resume: string;
  genre: string;
  duration: string;
  country: string;
  image: MovieQuery_movieById_image | null;
}

export interface MovieQuery {
  movieById: MovieQuery_movieById | null;
}

export interface MovieQueryVariables {
  id?: string | null;
}
