import React from 'react';

const SubHeader = ({heading, subHeading}) => {
    return (
        <div>
            <p>----{subHeading}----</p>
            <p>{subHeading}</p>
            
        </div>
    );
};

export default SubHeader;