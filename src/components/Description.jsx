import React, { useContext, useEffect } from 'react';
import PeopleContext from './context/PeopleProvider';
import {   useParams   } from "react-router-dom";

import Card from './UI/Card'

const Description = () => {
    const { person, moreInfo, films } = useContext(PeopleContext);
    let { name } = useParams();

    useEffect(()=> {
        let _pLS = localStorage.getItem("startWars_person");
        if ( person.url ) {
            localStorage.setItem("startWars_person", person.url)
            _pLS = person.url;
        }
        console.log( typeof person.url)
        moreInfo(_pLS)
    }, []);

    return (
        <div  className="container mx-auto">
            <h1 className="text-center py-4 text-4xl font-bold text-cyan-800">More of {name}</h1>
            <table className='table-auto text-gray-700 text-base w-full text-left'>
                <tbody>
                    <tr>
                        <th>Gender</th><td>{person.gender}</td>
                        <th>Years</th><td>{person.birth_year}</td>
                    </tr>    
                    <tr>
                    <th>Eye Color</th><td>{person.eye_color}</td>
                        <th>Hair Color</th><td>{person.hair_color}</td>
                    </tr>
                    <tr>
                        <th>Heigth</th><td>{person.height}</td>
                        <th>Mass</th><td>{person.mass}</td>
                    </tr>
                    <tr>
                        
                        <th></th><td></td>
                    </tr>
                </tbody>
            </table>
            <h2 className='my-4 text-center font-bold text-2xl'>Films</h2>
            <div className='flex flex-wrap'>
            
                {films?.length > 0 ?
                    films?.map((_film, i) => {
                        return <Card key={i} p={_film} source="d" />
                    }) : null}
            </div>
        </div>
    );
};

export default Description;