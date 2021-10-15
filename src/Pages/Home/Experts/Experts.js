import React from 'react';
import m1 from '../../../images/mechanic/mechanic-1.jpg'
import m2 from '../../../images/mechanic/mechanic-2.jpg'
import m3 from '../../../images/mechanic/mechanic-3.jpg'
import m4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {   
        id: 1,
        name: 'Replace Tire', 
        img: m1,
        expertize: '-Engine Expert-'
    },
    {
        id: 2,
        name: 'Replace Tire', 
        img: m2,
        expertize: '-Engine Expert-'
    },
    {
        id: 3,
        name: 'Replace Tire', 
        img: m3,
        expertize: '-Engine Expert-'
    },
    {
        id: 4,
        name: 'Replace Tire', 
        img: m4,
        expertize: '-Engine Expert-'
    }
  ]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert expert={expert} key={expert.id}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;