import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './foodMenu/Menu';
import MenuCard from './MenuCard';
import MenuNavbar from './MenuNavbar';
import './style/app.css';

function FilterImage() {
    const [items, setItems] = useState(Menu);

    function filterMenu(filterItem) {
        if (filterItem === 'all') {
            setItems(Menu);
        } else {
            const arr = Menu.filter((item) => item.category === filterItem);

            setItems(arr);
        }
    }

    return (
        <div>
            <h1 className="mt-5 text-center main-header">Order your favorite Dish</h1>
            <hr />
            {<MenuNavbar func={filterMenu} menuItems={Menu} />}

            {/* menu items start here */}

            <div className="menu-items container-fluid my-5 ">
                <div className="row">
                    <MenuCard menuItems={items} />
                </div>
            </div>
        </div>
    );
}

export default FilterImage;
