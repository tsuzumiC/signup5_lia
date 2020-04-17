import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_ALL_PERSONS = gql`
    query getAllPersons {
        getAllPersons {
            id
            email
            first_name
            last_name
        }
    }
`;

const PersonsList = () => {
    const { data, loading, error } = useQuery(GET_ALL_PERSONS);

    if (loading) return <div>Loading list</div>;
    if (error) {
        console.log(error);
        return <div>Error</div>;
    }
    if (!data) return <div>No data</div>;
    console.log(data);

    const personsList = data.getAllPersons.map((person) => {
        return (
            <>
                <div>{`ID: ${person.id}`}</div>
                <div>{`Name: ${person.first_name} ${person.last_name}`}</div>
            </>
        );
    });

    return <div>{personsList}</div>;
};

export default PersonsList;
