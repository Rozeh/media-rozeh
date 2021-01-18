import React from 'react';
import { Link } from 'react-router-dom';

function Patient({id, name}: {id:number; name:string}){
    return (
        <div>
            {" "}
            <Link to={`/patient/${id}`}>{name}</Link>
        </div>
    )
}

export default Patient;