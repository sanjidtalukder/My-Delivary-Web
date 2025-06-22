import React from 'react';
import logo from '../../assets/logo.png'

const ProplastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl -ml-2 font-bold'>PlantShape</p>
        </div>
    );
};

export default ProplastLogo;