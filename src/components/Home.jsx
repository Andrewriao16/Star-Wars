import React, { useContext, useEffect, useState } from 'react';
import PeopleContext from './context/PeopleProvider';

import Card from './UI/Card'

const Home = () => {
    const { _setPeople, peoples, page, wait } = useContext(PeopleContext);   

    return (
        <div className="container mx-auto">
            <h1 className="text-center py-4 text-4xl font-bold text-cyan-800">Star Wars characters</h1>
            <div className='flex flex-wrap text-left justify-around'>
                {peoples.length > 0 ?
                    peoples.map((people, i) => {
                        return <Card key={i} p={people} source="h" />
                    }) : null}
            </div>
            <div className='py-4 text-center'>
                {wait ? (
                    <button className="bg-blue-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full text-xl">
                    <i className='fas fa-spinner fa-pulse' ></i> Wait, loading characters
                </button>
                ): (
                    page === 0 ? (
                        <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full">
                        There are no more characters.
                    </button>
                    ) : (
                        <button className="bg-blue-500 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded-full" onClick={() => { _setPeople(page) }}>
                        More characters     
                    </button>
                    )
                )}
                
                
            </div>
        </div>
    );
};

export default Home;