import React from 'react';
import PropTypes from 'prop-types';

const Child = ({someProp, onClick}) => {
    return (
        <div>
            <button onClick={onClick}>Toggle state with Redux</button>
            Is active? (State from Redux): {someProp}
        </div>
    )
};

export default Child;