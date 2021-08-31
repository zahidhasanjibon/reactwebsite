import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './foodMenu/menu';
import './style/app.css';

function FilterImage() {
    const [items, setItems] = useState(Menu);

    function filterMenu(filterItem) {
        const arr = Menu.filter((item) => item.category === filterItem);
        setItems(arr);
    }

    function getAll() {
        setItems(Menu);
    }

    return (
        <div>
            <h1 className="mt-5 text-center main-header">Order your favorite Dish</h1>
            <hr />
            <div className="container menu-tabs">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="menu-tab d-flex justify-content-around ">
                            <button
                                onClick={() => filterMenu('breakfast')}
                                className="btn btn-warning"
                                type="button"
                            >
                                Breakfast
                            </button>
                            <button
                                onClick={() => filterMenu('lunch')}
                                className="btn btn-warning"
                                type="button"
                            >
                                Lunch
                            </button>
                            <button
                                onClick={() => filterMenu('dinner')}
                                className="btn btn-warning"
                                type="button"
                            >
                                Dinner
                            </button>
                            <button
                                onClick={() => getAll()}
                                className="btn btn-warning"
                                type="button"
                            >
                                All
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* menu items start here */}

            <div className="menu-items container-fluid my-5 ">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-1 gx-5">
                            {items.map((item) => {
                                const { id, image, name, description, price } = item;
                                return (
                                    <div
                                        key={id}
                                        className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3"
                                    >
                                        <div className="row item-inside">
                                            {/* for images */}
                                            <div className="col-4 col-md-3 col-lg-4 img-div">
                                                <img
                                                    src={image}
                                                    alt="menupic"
                                                    className="img-fluid"
                                                />
                                            </div>

                                            {/* menu items description */}

                                            <div className="col-8 col-md-9 col-lg-8 descr">
                                                <div className="main-title pb-1">
                                                    <h1>{name}</h1>
                                                    <p>
                                                        <strong>{description}</strong>
                                                    </p>
                                                </div>

                                                <div className="row menu-price">
                                                    <div className="col-12 d-flex justify-content-between  pb-2 pricebox">
                                                        <p>
                                                            <strong>price:{price}</strong>
                                                        </p>
                                                        <button
                                                            type="button"
                                                            className="order btn btn-sm"
                                                        >
                                                            Order Now
                                                        </button>
                                                    </div>
                                                    <p>*price may varry by date</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterImage;
