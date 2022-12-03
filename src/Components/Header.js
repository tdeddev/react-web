import './Header.css'

const Header = () => {
    return (
        <header className="nav">
            <div className="logo">
                <img src="./images/logo-tour.png" />
            </div>
            <div className="link-list">
                <ul>
                    <li>
                        <a href="">HOME</a>
                        <a href="">OUR SERVICES</a>
                        <a href="">PRODUCT</a>
                        <a href="">ABOUT</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header