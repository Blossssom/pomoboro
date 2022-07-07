

const Header = () => {
    return (
        <header>
            <div className="header-wrapper">
                <div>
                    <h2>Pomoboro</h2>
                </div>

                <ul className="header-nav__list">
                    <li>
                        <button className="header-nav__btn">
                            Report
                        </button>
                    </li>
                    <li>
                        <button className="header-nav__btn">
                            Setting
                        </button>
                    </li>
                    <li>
                        <button className="header-nav__btn">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;