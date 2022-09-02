export const sliderItems = [
    {
        key: 0,
        title: "Vegan dish",
        imgLink: 'assets/images/slide1.jpg'
    },
    {
        key: 1,
        title: "Strawberry picking",
        imgLink: 'assets/images/slide2.jpg'
    },
    {
        key: 2,
        title: "Graduation",
        imgLink: 'assets/images/slide3.jpg'
    },
    {
        key: 3,
        title: "Miko",
        imgLink: 'assets/images/slide4.jpg'
    },
    {
        key: 4,
        title: "Watercolour painting",
        imgLink: 'assets/images/slide5.jpg'
    },
    {
        key: 5,
        title: "Piano",
        imgLink: 'assets/images/slide6.png'
    },
    {
        key: 6,
        title: "Smoothie bowl",
        imgLink: 'assets/images/slide7.jpg'
    },
    {
        key: 7,
        title: "Hong Kong landscape",
        imgLink: 'assets/images/slide8.jpg'
    },
]

export const projects = {
    title: "projects",
    featuredTitle: "featured project",
    featured: [
        {key: 0, projectName: "Stages of Growth", projectDesc: "An interactive creative experience which aims to convey the 4 stages of personal growth through the use of textures, colours and lighting applied to floating spheres. This environment was created using Three.js and WebGL and features buttons and quotes to venture through the different stages.", projectLink: "https://jam3.github.io/intern-dev-training-digital-art/artworks/artwork-vanessa-liu/index.html", imgLink: "assets/images/stages-of-growth-thumbnail.jpg"},
        {key: 1, projectName: "The Story of Icarus", projectDesc: "This animated story-telling site brings the user through the tale of Icarus from Greek mythology. The goal was to explore the features of GSAP using tools such as ScrollTrigger, MotionPath, keyframes, yo-yo effects, scrubbing animation and parallax effects to create a beautifully aesthetic and immersive page.", projectLink: "https://story-of-icarus.vercel.app/", imgLink: "assets/images/story-of-icarus-thumbnail.png"}],
    transitionText: "check out the rest:",
    projects: [
        {key: 0, projectName: "'Finn' Finance Bot", projectDesc: "Developed an all-in-one financial Discord bot in a team for the MLH ‘Hacky Winterland’ Hackathon. The vision for Finn was to help individuals of all backgrounds to improve financial literacy and smoothen the learning curve by providing a variety of features. The bot accesses Yahoo Finance's python library to extract and display information and can algorithmically put together a portfolio depending on the type needed using an input of stock tickers!", projectLink: "https://github.com/Finn-Discord-Bot/finn", imgLink: "assets/images/finn-thumbnail.png"},
        {key: 1, projectName: "Safe Portfolio Generator", projectDesc: "I worked with two group members to create a Python program in Jupyter Notebook which takes in a CSV file of tickers and goes through a filtering process using several calculations and libraries like Yahoo Finance, NumPy Financial, Matplotlib and more. Numerical, graphical and thorough written analysis were implemented within, as well as reasonings to why the chosen calculations of risk were used and how it affects the selection process. Ultimately, it generates a list of 10-20 tickers that would generate the safest portfolio based on measures such as standard deviation, beta, correlation, and so on. ", projectLink: "https://github.com/NessaLiu/SafePortfolioMaker", imgLink: "assets/images/safe-portfolio-thumbnail.jpg"},
        {key: 2, projectName: "'Vantoria' Entertaiment Bot", projectDesc: "This Discord entertainment bot was designed and created with my friend! In order to study databases using MySQL, we incorporated several profile commands which all accessed a database with the stored data to create, edit, view and delete entries. To dive deeper into the many possibilities of this creative project, we used BeautifulSoup to webscrape quotes and deliver category-specific content depending on a user's reaction to a outputted command message. A simple and clear help menu describes all the commands one can use, with a 'Games' section featuring 3 minigames, a 'Profile' section and a 'Self-care' section as well.", projectLink: "https://github.com/NessaLiu/VantoriaBot", imgLink: "assets/images/vantoria-thumbnail.png"},
        {key: 3, projectName: "Summer Showdown Platform Game", projectDesc: "For the final culminating assignment for ICS4U Grade 12 Computer Science, we were given the task to study independently and be creative with developing a small project. I chose to code a single-player platform game with a scrolling background. This 'Summer Showdown' game uses object-oriented programming to implement running and jumping, a level system, health status, item collection, music and sound effects. There were also enemy AI which the user could attack and also receive damage from. It was a great learning experience and being able to successfully produce a functioning game was extremely rewarding!", projectLink: "https://github.com/NessaLiu/SummerShowdownPlatformGame", imgLink: "assets/images/summer-showdown-thumbnail.jpg"}
    ],
    linkText: "LET'S GO"
}

export const skills = {
    title: "skills",
    subtitleOne: "languages",
    subtitleTwo: "tools + libraries",
    languages: ["JavaScript", "HTML/CSS", "TypeScript", "C", "Python", "SQL"],
    toolsAndLibraries: ["React", "Next.js", "Three.js", "GSAP", "Jupyter Notebook", "Git"]
}