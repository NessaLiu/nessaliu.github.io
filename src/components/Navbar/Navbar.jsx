import "./navbar.css"
// import Logo from "../../images/logo.png"

const Navbar = () => {
    return (
        // <nav id="navbar"> 

            <div className="navbar">
                
                <div class="navbar-container flex">

                    <h1 className="logo">V . L . </h1>

                    {/* <div className="logo">
                        <a href="#top"><img src={Logo} alt=""/></a>
                    </div> */}
                    
                    <nav>
                        <ul>
                            <li><a href="#intro">ABOUT</a></li>
                            <li><a href="#resume">RESUME</a></li>
                            <li><a href="#projects">PROJECTS</a></li>
                            <li><a href="#interests">INTERESTS</a></li>
                            <li><a href="#carousel-gallery">GALLERY</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </nav>
                   

                </div>
            </div>
            
        // </nav>
    )
}

export default Navbar
