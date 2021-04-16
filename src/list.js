import React from 'react';

const List = ({name, age, imagePerson}) =>{
    return(
        <div className="list-data">
            <img src={imagePerson} alt="person"/>
            <div className="person">      
                    <h3>{name}</h3>
                <p>{age} years</p>
            </div>

        </div>
    );
}

export default List;