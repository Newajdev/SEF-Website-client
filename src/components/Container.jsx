import React from 'react';

const Container = ({children}) => {
    return (
        <div className='m lg:max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;