import { gql } from "@apollo/client";

export const movieQuery = gql `
    query MovieQuery ($id: ID){
        movieById(id: $id) {
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