import { gql } from "@apollo/client";

export const serieQuery = gql `
    query SeriesQuery {
    series {
        id
        title
        year
        resume
        genre
        seasons
        image {
            name
            url
        }
    }
}

`
export const corridorSerieQuery = gql `
query SeriesByGenre($genre: String!) {
   seriesByGenre(genre: $genre) {
        id
        title
        year
        resume
        genre
        seasons
        image {
            name
            url
        }
    }
}`