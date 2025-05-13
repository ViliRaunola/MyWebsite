import { Project } from '@/app/(withnavigation)/about/Projects'

export const projects: Project[] = [
    {
        id: 'hobby-1',
        title: 'Personal Portfolio',
        description:
            'A NextJs & TailwindCSS single-page portfolio showcasing my experience and projects. The aim of this project was to try practice NextJs and to try out Tailwind while creating something usefull. The website is designed with mobile first approach.',
        imageSrc: 'mywebsite-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/MyWebsite',
        techStack: ['nextjs', 'tailwind', 'ts', 'floatingui', 'figma']
    },
    {
        id: 'school-3',
        title: 'Summer Job Survival',
        description:
            'A 2D game made with Unity. The goal of the game is to defeat all the bugs and Typescript monsters :D The game is done to a school game development course.',
        imageSrc: 'summerjobsurvival-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Summer-Job-Survival',
        videoUrl: 'https://www.youtube.com/watch?v=02w33QYB1mc',
        projectUrl: 'https://viliraunola.github.io/Summer-Job-Survival-Live/',
        techStack: ['unity']
    },
    {
        id: 'hobby-5',
        title: 'Score Tracker',
        description:
            'A project for tracking different board game scores. The goal of this project was to create an easy way for the user to calculate points for a game of Scrabble. More games will be added in the future.',
        imageSrc: 'scoretracker-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Score-Tracker',
        techStack: ['react', 'ts', 'docker']
    },
    {
        id: 'hobby-2',
        title: 'Arduino Dreams',
        description:
            'Humidity and temperature sensor made with Arduino Uno. I had the need to get the most optimal sleeping conditions with an air humifier so I made this device to track the room temperature and humidity.',
        imageSrc: 'arduinodreams-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/ArduinoDreams',
        techStack: ['cplusplus']
    },
    {
        id: 'school-1',
        title: 'Masters Thesis',
        description:
            'Fine-tuned FinBert model to analyze Finnish social media posts to determine the sentiment of the post and named entities. Can analyze Finnish Reddit threads by just user providing link to the post.',
        imageSrc: 'masters-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Masters-thesis',
        techStack: ['python', 'pandas']
    },
    {
        id: 'school-4',
        title: 'Bachelor Thesis',
        description:
            'Uses Raspberry Pi to monitor the wireless network bandwidth to detect different devices. Sends the collected data to a web server and displays the live data on a website.',
        imageSrc: 'bachelor-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Kandi-Raspberry',
        techStack: ['react', 'mongo', 'node', 'python']
    },

    {
        id: 'hobby-3',
        title: 'Frisbee Golf Score Tracker',
        description:
            'Hobby project for learning C#, .NET6, Vue, Google authentication and MongoDb.',
        imageSrc: 'frisbeegolf-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Frisbeegolf-Tracker',
        techStack: ['csharp', 'vue', 'mongo']
    },
    {
        id: 'hobby-4',
        title: 'Weather App',
        description:
            'A interview project for Weasel Software. A simple weather appliction create in React.',
        imageSrc: 'weather-picture.png',
        sourceUrl: 'https://github.com/ViliRaunola/Weather-Application',
        techStack: ['react']
    },
    {
        id: 'school-5',
        title: 'Security Alarm',
        description:
            'A school project done using two arduinos Uno and Mega. The two boards are connected to each other and provide a configurable alarm that allows the user to set it and disarm it.',
        imageSrc: 'security-picture.png',
        sourceUrl:
            'https://github.com/ViliRaunola/Intro-To-Embedded-Systems-Exercise',
        techStack: ['c']
    }
]
