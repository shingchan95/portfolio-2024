import hwSs from "./screenshots/hello-world-ss.jpeg"
import bmSs from "./screenshots/budget-me-ss.png"
import pbhSs from "./screenshots/project-bank-heist-ss.png"
import rgSs from "./screenshots/readme-generator-ss.png"
import ttbSs from "./screenshots/the-tech-blog-ss.jpeg"
import wfSs from "./screenshots/weather-forecast-ss.png"


const projects = [
    {
        heading: 'Hello World Social Networking',
        description: 'The application provides a social network environment. It is a full-stack application that primarily utilizes Node.js, GraphQL, MongoDB/Mongoose, and React.',
        screenshot: hwSs,
        technologies: 'React, GraphQL, Node.js, MongoDB, Mongoose, Express, HTML, CSS, Javascript',
        githubLink: 'https://github.com/shingchan95/hello-world-social-networking',
        lastUpdate: '2022-08-16',
    },
    {
        heading: 'Weather Forecast With Map Click',
        description: 'This application provides a Weather Forecast website using Google Map API and OpenWeather API. It allows users to click anywhere on the map and get the weather forecast details using the Fetch API.',
        screenshot: wfSs,
        technologies: 'RestAPI, Javascript, HTML, CSS',
        githubLink: 'https://github.com/shingchan95/know-your-city',
        projectLink: 'https://shingchan95.github.io/know-your-city/',
        lastUpdate: '2022-04-19',
    },
    {
        heading: 'Project Bank-Heist',
        description: 'This application provides a rudimentary online banking template. It is a full-stack application that primarily utilizes Node.js and employs the MVC pattern.',
        screenshot: pbhSs,
        technologies: 'Node.js, mySQL, Sequelize, Express, Handlebar.js, Bootstrap, HTML, CSS, Javascript',
        githubLink: 'https://github.com/ChrisAylen/project-bank-heist',
        lastUpdate: '2022-06-21',
    },
    {
        heading: 'README-generator',
        description: 'The application can dynamically generate a professional README.md file from a user\'s input using the Inquirer package.',
        screenshot: rgSs,
        technologies: 'Javascript, Node.js, Inquirer',
        githubLink: 'https://github.com/shingchan95/README-generator',
        lastUpdate: '2022-05-12',
    },
    {
        heading: 'The Tech Blog',
        description: 'This application provides a rudimentary Tech Blog template. It is a full-stack application that primarily utilizes Node.js and employs the MVC pattern.',
        screenshot: ttbSs,
        technologies: 'Node.js, mySQL, Sequelize, Express.js, Handlebar.js, HTML, CSS, Javascript',
        githubLink: 'https://github.com/shingchan95/week14-coursework',
        lastUpdate: '2022-06-19',
    },
    {
        heading: 'Budget-me Mobile App',
        description: 'Budget Me, my debut React Native app, utilizes Expo and integrates Expo SQLite and AsyncStorage for efficient personal budgeting. Designed for efficient personal budgeting. Track income, expenses, and budget goals seamlessly.  ',
        screenshot: bmSs,
        technologies: 'React native, Expo SQLite, Expo, AsyncStorage, Javascript, CSS',
        githubLink: 'https://github.com/shingchan95/budget-me',
        lastUpdate: '2024-01-18',
    },
];


export default projects;
