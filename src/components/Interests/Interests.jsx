import "./interests.css"

const Interests = () => {
    return (
        <section id="interests">

            <div className="interests-box">

                <h1 className="interests-title">interests</h1>

                {/* <div className="interests-rows"></div> */}

                    <div className="row1">
                        <div className="clothes"></div>
                    
                        <div className="interest-block">
                            <h2 className="interest-name">At a Young Age...</h2>
                            <p className="interest-desc">

                                <ul>
                                    <li>I was given the opportunity to participate in several extracurricular activites including language classes, piano classes, music theory, drawing lessons, skating and swimming lessons, and just
                                        about anything my parents could find to keep me occupied.
                                    </li>
                                    <br/>
                                    <li>
                                        Back then, I didn't realize how important these experiences would be. As I got older, I stopped many of them, but continued specifically with art and music. Even with the added
                                        stress and pressure to keep up in school while performing well in classes, my parents were adamant on me continuing. There were several instances where I was sure I was ready to give up, but time and time again, it felt wrong to let go of all the hard work.
                                    </li>
                                </ul>
                            
                            </p>
                        </div>
                    </div>
                    
                    <div className="row2">
                        
                        <div className="interest-block">
                            <h2 className="interest-name">And Now...</h2>
                            <p className="interest-desc">

                                <ul>
                                    <li>After over 10 years of dedication, I've come to truly love the things that I used to worry and stress about. After completing my Level 10 Piano, Level 10 Music History and Level 10 Harmony and Counterpoint courses from the
                                        Royal Conservatory of Music, my passion for music still stands strong. I'm constantly fascinated by all things related to design and any visual concepts and I'll always be eager to talk about
                                        or just indulge in creating art! 
                                    </li>
                                    <br/>
                                    <li>
                                        I've done lots of traditional art pieces and sketches focusing mainly on pencil, inking and watercolours, but I'm generating an increasing interest in digital art and the connections
                                        that can be built between technology and design. I hope to learn more about such concepts and apply them in new projects soon!
                                    </li>
                                </ul>
                                
                            </p>
                        </div>

                        <div className="girl"></div>
                    </div>

                {/* </div> */}
            </div>
        </section>

    )
}

export default Interests
