import "./navbar.css"
import Logo from "../../images/logo.png"

const Navbar = () => {
    return (
        <nav id="navbar">
            
            <div class="navbar-container">
                
                <div className="menu">

                    <div className="logo">
                        <a href="#top"><img src={Logo} alt=""/></a>
                    </div>
                    
                    <ul>
                        <li><a href="#intro">ABOUT</a></li>
                        <li><a href="#resume">RESUME</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#interests">INTERESTS</a></li>
                        <li><a href="#carousel-gallery">GALLERY</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
