import "./contact.css"
import Mail from "../../images/mail-icon.svg"
import Insta from "../../images/insta-icon.svg"
import GitHub from "../../images/github-icon.svg"
import LinkedIn from "../../images/linkedin-icon.svg"

const Contact = () => {
    return (
        <section id="contact">

            <div className="contact-box">

                <h1 className="contact-title">contact:</h1>
                <ul className="menu-bar">
                    <li className="icons"><a href="mailto: vanessaliu014@gmail.com"><img src={Mail} alt=""/></a></li>
                    <li className="icons"><a href="https://www.instagram.com/vanesssa_liu/" target="_blank"><img src={Insta} alt=""/></a></li>
                    <li className="icons"><a href="https://github.com/NessaLiu" target="_blank"><img src={GitHub} alt=""/></a></li>
                    <li className="icons"><a href="https://www.linkedin.com/in/vanessa-liu014/" target="_blank"><img src={LinkedIn} alt=""/></a></li>
                </ul>
                
            </div>
        </section>
    )
}

export default Contact
