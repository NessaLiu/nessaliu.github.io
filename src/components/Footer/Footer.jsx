import "./footer.css"
import React from 'react'

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="copyright">
                <p><em>Copyright &copy; 2022 Vanessa Liu</em></p>
            </div>
            <p className="modification">
                <script language="Javascript">
                    document.write("This page was last modified on: " + document.lastModified +"");
                    </script>
            </p>
        </footer>
    )
}

export default Footer

