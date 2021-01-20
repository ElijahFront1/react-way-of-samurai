import loadsvg from '../../../assets/img/loadsvg.svg';
import React from 'react';


let Preloader = (props) => {
    return (  
        <div>
            <img src={loadsvg} />
        </div>
    )
}

export default Preloader;