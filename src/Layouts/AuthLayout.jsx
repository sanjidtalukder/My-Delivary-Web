import React from 'react';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png'
import ProplastLogo from '../shared/ProplastLogo/ProplastLogo';

const AuthLayout = () => {
    return (
        <div className="card  bg-base-100 shadow-sm lg:flex-row-reverse">
            
  <div className='flex-1/2'>
    <figure>
    <img
      src= {authimg}
      alt="Movie" />
  </figure>
  </div>
  <div className="card-body flex-1/2">
    <ProplastLogo></ProplastLogo>
    <Outlet></Outlet>
  </div>
</div>
    );
};

export default AuthLayout;