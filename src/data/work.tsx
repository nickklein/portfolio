import notesScreenshot1 from '../images/work/notes/notes1.png'
import notesScreenshot2 from '../images/work/notes/notes2.png'


import steamcompanionBgLarge from '../images/work/steamcompanion/steamcompanion-bg-large.jpg';
import steamcompanionThumbnail from '../images/work/steamcompanion/steamcompanion-bg-thumbnail.jpg';
import steamcompanionSmallLogo from '../images/work/steamcompanion/sc-small-logo.png';
import steamcompanionScreenshot1 from '../images/work/steamcompanion/screenshots1.jpg';
import steamcompanionScreenshot2 from '../images/work/steamcompanion/screenshots2.jpg';


export const work = [
    {
        "show": true,
        "title": "Notes App",
        "shortened_title": "Notes",
        "color": "#298dd6",
        "category": "Laravel",
        "slug": "notes",
        "text": [
            {
                "text": "This project is an open source web app, which allows you to take notes about your favourite things, and currently encrypts your notes on rest. I started working on this project after trying out a handful of other notes app and wanting something slightly different. One of the goals was to have a very minimalist editor, that immediately displays the correct styling after using markdown code (things like #, ## for the titles for example). One of my future goals for this project is to have it completely end-to-end encrypted."
            },
            {
                "title": "Challenges",
                "text": "There were some exciting challenges along the way. It was important to get the editing/WYSIWYG right. There’s a few ones that I’ve tried out, such as tinyMCE. I ended up with an interesting vuejs library called tiptap, that allows you to completely customize the editor from scratch."
            }
        ],
        "tags": ["blade", "laravel", "mysql", "php", "vue-js"],
        "links": [
            {
                "url": "https://notes.nickklein.ca/app",
                "label": "View Website"
            },
            {
                "url": "https://github.com/nickklein/notes",
                "label": "Visit Github",
            }
        ],
        "screenshots": [notesScreenshot1, notesScreenshot2]
    },
    {
        "show": true,
        "title": "SteamCompanion",
        "shortened_title": "SC",
        "background_image": steamcompanionBgLarge,
        "category": "Laravel",
        "slug": "steamcompanion",
        "logo": steamcompanionSmallLogo,
        "thumbnail" : steamcompanionThumbnail,
        "text": [
            {
                "text": "SteamCompanion is a website that provides custom apps and services to Steam users. It was primarily a giveaway website that I worked on part-time, where visitors were able to giveaway their own spare game keys to strangers. The service peaked at 150 000 unique visitors per month (5m pageviews monthly) on February 2015, and stabilized around 100 000 unique visitors per month."
            },
            {
                "text": "In 2020 the website was rebuilt in the framework Laravel.",
            },
            {
                "title": "Role in the project",
                "text": "My role in the project was to do the strategy, design, and development of the website. The website was built by me from the ground up and continued development for over 4+ years. I finished up one or two features every week and released it bi-weekly the following Friday. Another role was to manage customer support for at least an hour everyday.",
            },
            {
                "title": "Challenges",
                "text": "The website was a huge learning experience and technical challenge due to the scale of the website and amount of traffic it had. It taught me a lot about big data websites. The website used to collect and serve analytics for the Steam market through the market section of the website, which meant a lot of hour-to-hour data being fetched and stored about different virtual items. Another challenge and a learning experience was that, I learned a lot about queries and performance, because the website had to serve to 200+ concurrent users at any given time."
            }
        ],
        "links": [
            {
                "url": "https://steamcompanion.com",
                "label": "View Website"
            },
        ],
        "tags": ["css", "html5", "laravel", "linux", "mysql", "php", "vuejs"],
        "screenshots": [steamcompanionScreenshot1, steamcompanionScreenshot2]
    }
]