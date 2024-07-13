import { gql } from "@apollo/client";

export const ratingQuery = gql `
    query MovieRatingById($movieId: String!) {
    movieRatingById(id_movie: $movieId) {
        id
        id_movie
        direction
        script
        acting
    }
}
`