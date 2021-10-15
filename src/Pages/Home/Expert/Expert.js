import React from 'react';

const Expert = ({expert}) => {
    const {img, name, expertize} = expert;
    return (
        <div className="col-md-6 col-lg-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3 className="text-danger">{expertize}</h3>
        </div>
    );
};

export default Expert;