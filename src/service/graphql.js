import { gql } from "@apollo/client";

export const FIND_CHARACTER = gql`

query allCharacters ($number: ID!) {
    character(id:$number){
    id
    name
    image
    status
    species
    type
    gender
    origin{
    dimension
    }
    location{
    name
    }
    created
    image
}
}
`;

export const ALL_CHARACTERS = gql `
query allCharacters{
  characters{
    info{
      count
    }
    results{
      id
      name
      status
      species
      type
      gender
      origin{
        dimension
      }
      location{
        name
      }
      created
      image
      
    }
  }
}
`;