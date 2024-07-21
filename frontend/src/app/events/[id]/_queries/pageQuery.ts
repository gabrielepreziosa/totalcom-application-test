import { gql } from '@apollo/client';

const pageQuery = gql`
query ($id: ID!) {
    node(id: $id) {
        id
        ... on Event {
            name
            date
            program {
                speaker
                startTime
                endTime
                __typename
            }
        }
    }
}`;

export default pageQuery;