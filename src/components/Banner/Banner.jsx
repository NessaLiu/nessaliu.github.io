import "./banner.css"
import bannerBg from '../../images/banner-bg.svg';

const Banner = () => {
    return (
        <section id="banner">
            <div className="banner-container">
                <h1 className="banner-name">V A N E S S A • L I U</h1>
                <svg className="banner-bg" src={bannerBg} alt="banner-background" />
                
                {/* <div className="banner-bg"></div> */}
            </div>
        </section>
    )
}

export default Banner
