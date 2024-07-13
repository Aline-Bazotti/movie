/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeriesQuery
// ====================================================

export interface SeriesQuery_series_image {
  name: string | null;
  url: string;
}

export interface SeriesQuery_series {
  id: string;
  title: string;
  year: number;
  resume: string;
  genre: string;
  seasons: string;
  image: SeriesQuery_series_image | null;
}

export interface SeriesQuery {
  series: SeriesQuery_series[];
}
