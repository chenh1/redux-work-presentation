import React from 'react';
import PropTypes from 'prop-types';

const AnotherChild = ({someProp, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>Counter State with Redux</button>
            {someProp}
        </div>
    )
};

export default AnotherChild;