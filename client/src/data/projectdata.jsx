import pythonLogo from '../images/Python-Symbol.png';
import reactLogo from '../images/React-icon.svg.png';
import meanLogo from '../images/Mean+Stack.png';
import mernLogo from '../images/MERN-logo.png';
import cLogo from '../images/C_Logo.png';
import dataintensiveLogo from '../images/3044854.png';
import androidLogo from '../images/android.png';
import unity from '../images/unity.png';
import sern from '../images/serv2.png';

const projects = [
  {
    src: sern,
    text: 'Manufacture Resource Planner',
    label: 'Kaskein Marja',
    description:
      'A MRP system developed for Kaskein Marja during the university course called Running a Software Project. The system is deployed and in active use by Kaskein Marja. There is no repository to show as the source code is private.',
    demoVideoLink: 'https://youtu.be/_ITZxGm1PFU'
  },
  {
    src: unity,
    text: 'Summer Job Survival',
    label: 'Unity',
    description:
      "A singleplayer game done using Unity game development engine in the summer of 2023. The game was done for a university course called 'Game Development Prject'.",
    repository: 'https://github.com/ViliRaunola/Summer-Job-Survival',
    demoVideoLink: 'https://www.youtube.com/watch?v=02w33QYB1mc',
    liveBuild: 'https://viliraunola.github.io/Summer-Job-Survival-Live/'
  },
  {
    src: cLogo,
    text: 'DC-converter controller & converter model controlled by PI-controller',
    label: 'Embedded systems',
    description:
      "Embedded system project, designed, and developed as part of final assignment on a course called 'Embedded System Programming', demonstrates a comprehensive approach to real-time control of a DC-converter designed and implemented on the ZYBO Z-7 development board.",
    repository:
      'https://github.com/ViliRaunola/Embedded-System-Programming-Assignment',
    demoVideoLink:
      'https://www.youtube.com/watch?v=HlXvMNreUl4&ab_channel=kaalikello'
  },
  {
    src: cLogo,
    text: 'Burglar alarm',
    label: 'Embedded systems',
    description:
      "A burglar alarm done using Arduino Uno as a slave and Mega as a master. The project was done as a final project with a team to a course called 'Introduction to Embedded Systems'. The system utilized for example keypad, infrared motion detector, buzzer and a keypad.",
    repository:
      'https://github.com/ViliRaunola/Intro-To-Embedded-Systems-Exercise'
  },
  {
    src: pythonLogo,
    text: 'Shortest path between two Wikipedia links',
    label: 'Wikipedia',
    description:
      'A client-server service that allows the user the find the shortest path between two Wikipedia pages. The service uses Wikipedia API to fetch the links on each page. The server has the option to select the number of worker threads to experiment with the search process.',
    repository: 'https://github.com/ViliRaunola/DistributedFinalProject',
    demoVideoLink: 'https://youtu.be/BWgY070F2Z8'
  },
  {
    src: dataintensiveLogo,
    text: 'Online store utilizing a distributed database',
    label: 'Distributed database',
    description:
      "An online store that was done using SERN-stack. The online store's database is designed to be country specific. This means that each supported county has their own selection but the user profiles are shared between the countries.",
    repository: 'https://github.com/AlmondRumble11/DataIntensiveProjectApp',
    demoVideoLink: 'https://youtu.be/iDcYlj8GF2w'
  },
  {
    src: pythonLogo,
    text: 'Detecting nearby Wlan and Bluetooth devices using Raspberry Pi',
    label: "Bachelor's theses",
    description:
      "This project was done as a bachelor's thesis. It uses Raspberry Pi to detect closeby WLAN and Bluetooth signals and identifies the devices using their MAC address. The data from the discovered devices can be stored locally to the Raspberry or to be sent to a Mongo database on the web. A visualisation website was also done that uses the Mongo database to display the data in a user-friendly matter.",
    repository: 'https://github.com/ViliRaunola/Kandi-Raspberry'
  },
  {
    src: reactLogo,
    text: 'Weather application',
    label: 'Weather application',
    description:
      'A webpage done using React. A small project done for demonstrating my skills with web development. Users can select a city and view the weather there. The front-end is served using express.',
    repository: 'https://github.com/ViliRaunola/Weather-Application',
    liveBuild: 'https://weather-application-production.up.railway.app/'
  },
  {
    src: mernLogo,
    text: 'Webpage that allows users to create, comment and vote on posts',
    label: 'Forum webpage',
    description:
      'A webpage done using the MERN-stack. Users can register to the site. After registration users can vote, comment and create their own posts. The front-end uses the MUI library for the components such as the navbar. More detailed documentation can be found in the repository.',
    repository: 'https://github.com/ViliRaunola/ProjectWebApp'
  },
  {
    src: meanLogo,
    text: 'Webpage for sending private message between users',
    label: 'Message webpage',
    description:
      'A messaging website done using the MEAN-stack. Registered users can take part in a global chat or send private messages to other users. A demonstration video of the site is included in the repository.',
    repository:
      'https://bitbucket.org/ViliVilperi/exercises/src/main/myproject/',
    demoVideoLink: 'https://youtu.be/MIu8OPuEB0w'
  },
  {
    src: cLogo,
    text: 'System programming',
    label: 'Systen programming',
    description:
      'Final project assignment for operating systems and system programming course. The assignment includes multiple c-programs the main one being a UNIX shell called wish.c. It can run built-in programs or it can create a new thread to execute the command with the given arguments.',
    repository:
      'https://github.com/ViliRaunola/Kayttojarjestelmat_Harjoitustyoprojekti_Palautus'
  },
  {
    src: reactLogo,
    text: 'Home webpage',
    label: 'Home webpage',
    description:
      'The site you are looking at now. The project was created in order to play around and learn new things in React, CSS and try out alternative deployment services after Heroku cancelled the free services. This project is under constant development and new ideas are appreciated. ',
    repository: 'https://github.com/ViliRaunola/MyWebsite'
  },
  {
    src: androidLogo,
    text: 'Restaurant review application',
    label: 'Android application',
    description:
      "An android application for users to see restaurants' daily menus, review the dishes, and see other users' reviews. This application was done using Android studio for the object-oriented course as a final project.",
    repository: 'https://github.com/ViliRaunola/Finalproject',
    demoVideoLink: 'https://www.youtube.com/watch?v: I2ov3GUtUEs'
  },
  {
    src: pythonLogo,
    text: 'A simple price checking program',
    label: 'Price check',
    description:
      "A web scraping program that retrieves the price of a product from a webpage. Users can specify the product's price when they want the alarm to go off.",
    repository: 'https://github.com/ViliRaunola/Hinnan_Tarkistaja'
  }
];

export default projects;
