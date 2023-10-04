// import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <div className='py-6 px-20 bg-white text-xl rounded-lg border-solid border-2 border-pink-50 text-center	' >{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array,
};
