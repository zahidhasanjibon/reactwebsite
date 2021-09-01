const MenuNavbar = ({ func, menuItems }) => {
    const menuNav = [...new Set(menuItems.map((item) => item.category)), 'all'];

    return (
        <>
            <div className="container menu-tabs">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="menu-tab d-flex justify-content-around ">
                            {menuNav.map((item) => (
                                <button
                                    key={Math.random()}
                                    className="btn btn-warning"
                                    type="button"
                                    onClick={() => func(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MenuNavbar;
