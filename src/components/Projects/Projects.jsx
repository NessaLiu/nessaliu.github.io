import "./projects.css"

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-box">

                <h1 className="projects-title">projects</h1>
                
                <div className="projects-columns">

                    <div className="project-block">
                        <h2 className="project-name">"Finn" Finance Bot</h2>
                        <p className="project-desc">
                            During the past winter break of 2021, I joined the 2-day online hackathon "Hacky Winterland", hosted by MLH (Major League Hacking). With a team of 10 peers
                            from CFM, we developed an all-in-one financial Discord bot, incorporating a festive theme to keep up the holiday spirits! The vision for Finn was to help
                            individuals of all backgrounds to improve financial literacy and smoothen the learning curve by providing a variety of features. Our bot accessed Yahoo Finance's
                            python library to extract information and display an abundance of statistics to aid investors in making financial decisions. Finn can also algorithmically put together
                            a portfolio depending on the type needed using an input of stock tickers! Check Finn out <a href="https://github.com/Finn-Discord-Bot" target="_blank"> here</a>!
                        </p>
                    </div>

                    <div className="project-block">
                        <h2 className="project-name">"Vantoria"<br />
                        Entertainment Bot</h2>
                        <p className="project-desc">
                            Another exciting project I had the opportunity to work on was an entertainment Discord bot, designed and created with my friend!
                            In order to study databases using MySQL, we incorporated several profile commands which all accessed a database with the stored data to create, edit, view and delete entries.
                            To dive deeper into the many possibilities of this creative project, we used BeautifulSoup to webscrape quotes and deliver category-specific content depending on a user's reaction to a outputted command message.
                            A simple and clear help menu describes all the commands one can use, with a "Games" section featuring 3 minigames, a "Profile" section and a "Self-care" section as well.
                            With careful thought put into the aesthetic and added convenience with slash commands, we were proud to launch the bot after several weeks of diligent hard work!
                            See what else Vantoria has to offer <a href="https://github.com/NessaLiu/VantoriaBot" target="_blank"> here</a>!
                        </p>
                    </div>

                    <div className="project-block">
                        <h2 className="project-name">Safe Portfolio<br /> Generator</h2>
                        <p className="project-desc">
                            I worked with two group members to create a Python program in Jupyter Notebook which takes in a CSV file of tickers and goes through a filtering process
                            using several calculations and libraries like Yahoo Finance, NumPy Financial, Matplotlib and more. Numerical, graphical and thorough written analysis were implemented within,
                            as well as reasonings to why the chosen calculations of risk were used and how it affects the selection process. Ultimately, it generates a list of 10-20 tickers that would
                            generate the safest portfolio based on measures such as standard deviation, beta, correlation, and so on. Check out the complete tested file  <a href="https://github.com/NessaLiu/SafePortfolioMaker" target="_blank"> here</a>!
                        </p>
                    </div>

                </div>

                <div className="horizontal-block">
                    <h2 className="project-name">Summer Showdown Platform Game</h2>
                    <p className="project-desc">
                        For the final culminating assignment for ICS4U Grade 12 Computer Science, we were given the task to study independently and be creative with developing a small project. Whether it be a website, app, browser extension, or game,
                        we were free to explore any area that blossomed interest. Hence, to compliment my love for games, I decided to research PyGame and the various possibilities of entertainment forms I could create. I ended up choosing to code a
                        single-player platform game with a scrolling background, influenced by the nostalgic games I used to play in my childhood. This "Summer Showdown" game uses object-oriented programming to
                        implement running and jumping, a level system, health status, item collection, music and sound effects. There were also enemy AI which the user could attack and also receive damage from. It was a great learning experience and
                        being able to successfully produce a functioning game was extremely rewarding! Take a look at the game <a href="https://github.com/NessaLiu/SummerShowdownPlatformGame" target="_blank"> here</a>!
                    </p>
                </div>

        
            </div>
        </section>
    )
}

export default Projects
