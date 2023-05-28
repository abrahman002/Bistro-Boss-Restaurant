import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,img,title,subtitle}) => {
    return (
        <div className='pt-8 mb-10'>
            {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-5 uppercase">Oder your favourite food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;