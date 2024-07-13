import { gql } from "@apollo/client";

export const homeQuery = gql `
    query HomeQuery {
        movies {
            id
            title
            year
            resume
            genre
            duration
            country
            image {
                name
                url
            }
        }
    }
`
export const corridorQuery = gql `
query MovieByGenre($genre: String!) {
   movieByGenre(genre: $genre) {
        id
        title
        year
        resume
        genre
        duration
        country
        image {
            name
            url
        }
    }
}`