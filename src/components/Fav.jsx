import React, { useContext } from 'react';
import PeopleContext from './context/PeopleProvider';

import Card from './UI/Card'

const Favorite = () => {
    const { favorites } = useContext(PeopleContext);

    return (
        <div  className="container mx-auto">
            <h1 className="text-center py-4 text-4xl font-bold text-cyan-800">My Favorites Star Wars characters</h1>
            <div className='flex flex-wrap'>
                {favorites.length > 0 ?
                    favorites.map((favoite, i) => {
                        return <Card key={i} p={favoite} source="f" />
                    }) : null}
            </div>
        </div>
    );
};

export default Favorite;