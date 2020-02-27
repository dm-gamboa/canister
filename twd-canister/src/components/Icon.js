import React from 'react';

const Icon = (props) => (
    <span className='icon-link'>
        <span className={`icon icon-${props.icon}`} aria-hidden="true"></span>
    </span>
);

export default Icon;