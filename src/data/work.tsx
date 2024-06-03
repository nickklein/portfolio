import notesScreenshot1 from '../images/work/notes/notes1.png'
import notesScreenshot2 from '../images/work/notes/notes2.png'


import steamcompanionBgLarge from '../images/work/steamcompanion/steamcompanion-bg-large.jpg';
import steamcompanionThumbnail from '../images/work/steamcompanion/steamcompanion-bg-thumbnail.jpg';
import steamcompanionSmallLogo from '../images/work/steamcompanion/sc-small-logo.png';
import steamcompanionScreenshot1 from '../images/work/steamcompanion/screenshots1.jpg';
import steamcompanionScreenshot3 from '../images/work/steamcompanion/steamcompanion-1.jpg';
import steamcompanionScreenshot4 from '../images/work/steamcompanion/steamcompanion-2.jpg';

import uhrScreenshot1 from '../images/work/uhr/reverse-clock-1.jpg';
import uhrScreenshot2 from '../images/work/uhr/reverse-clock-2.jpg';
import uhrScreenshot3 from '../images/work/uhr/reverse-clock-3.png';
import uhrScreenshot4 from '../images/work/uhr/reverse-clock-4.png';
import uhrThumbnail from '../images/work/uhr/clock-thumbnail.jpg';

import untzScreenshot1 from '../images/work/mini-untz/untz-1.jpg';
import untzScreenshot2 from '../images/work/mini-untz/untz-2.jpg';
import untzThumbnail from '../images/work/mini-untz/untz-thumbnail.jpg';

import fanThumbnail from '../images/work/fan/fan-extractor-thumbnail.jpg';
import fanScreenshot1 from '../images/work/fan/fan-extractor.jpg';
import fanScreenshot2 from '../images/work/fan/fan-extractor2.jpg';
import fanScreenshot3 from '../images/work/fan/solder-fume-cad.png';

import graduateThumbnail from '../images/work/graduate/graduate-thumbnail.jpg';
import graduateLogo from '../images/work/graduate/graduate_hotels_logowhite_trademark.png';
import graduateBanner from '../images/work/graduate/graduate-banner.jpg';
import graduateScreenshot1 from '../images/work/graduate/graduate-hotels.jpg';
import graduateScreenshot2 from '../images/work/graduate/graduate-hotels2.jpg';
import graduateScreenshot3 from '../images/work/graduate/graduate-hotels3.jpg';

import elevenExperienceThumbnail from '../images/work/eleven-experience/eleven-experience-thumbnail.jpg';
import elevenExperienceLogo from '../images/work/eleven-experience/eleven-experience-logo.png';
import elevenExperienceBanner from '../images/work/eleven-experience/eleven-experience-banner.jpg';
import elevenExperienceScreenshot1 from '../images/work/eleven-experience/eleven-experience1.jpg';
import elevenExperienceScreenshot2 from '../images/work/eleven-experience/eleven-experience2.jpg';
import elevenExperienceScreenshot3 from '../images/work/eleven-experience/eleven-experience3.1.jpg';
import elevenExperienceScreenshot4 from '../images/work/eleven-experience/eleven-experience3.2.jpg';
import elevenExperienceScreenshot5 from '../images/work/eleven-experience/eleven-experience4.jpg';

import yetiScreenshots1 from '../images/work/yeti/yeti1.jpg';
import yetiScreenshots2 from '../images/work/yeti/yeti2.jpg';
import yetiScreenshots3 from '../images/work/yeti/yeti3.jpg';
import yetiScreenshots4 from '../images/work/yeti/yeti4.jpg';

import mechanicalKeyboard from '../images/work/keyboard/keyboard-top-view.jpg';
import mechanicalKeyboard2 from '../images/work/keyboard/keyboard-in-progress.jpg';
import mechanicalKeyboard3 from '../images/work/keyboard/keyboard-side-view.jpg';
import mechanicalKeyboardThumbnail from '../images/work/keyboard/keyboard-top-view-thumbnail.jpg';

import ftpsBackupScreenshot1 from '../images/work/ftps-backup/ftps-backup.jpg';

export const work = [
    {
        "show": true,
        "id": 10,
        "title": "Mechanical Keyboard",
        "shortened_title": "Mechanical Keyboard",
        "background_image": mechanicalKeyboard, 
        "color": "#4A90E2",
        "category": "Hardware",
        "slug": "mechanical-keyboard",
        "thumbnail": mechanicalKeyboardThumbnail,
        "text": [
            {
                "text": "This project is a custom mechanical keyboard build using the DZ60 PCB. It was an exciting venture into the world of mechanical keyboards, where I learned a lot about hardware customization and soldering. The project involved selecting the right components, soldering each key switch to the PCB."
            },
            {
                "title": "Challenges",
                "text": "There were several challenges during this build. One of the major tasks was soldering every key switch to the mainboard, ensuring each connection was solid and reliable. Through this project, I gained hands-on experience with hardware assembly and a deeper understanding of keyboard customization."
            }
        ],
        "tags": ["DZ60", "soldering", "hardware", "mechanical-keyboard"],
        "screenshots": [mechanicalKeyboard, mechanicalKeyboard2, mechanicalKeyboard3],
        "related": [7,6,5]
    },
    {
        "show": true,
        "id": 9,
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
        "screenshots": [notesScreenshot1, notesScreenshot2],
        "related": [8, 4, 1]
    },
    {
        "show": true,
        "id": 8,
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
        "screenshots": [steamcompanionScreenshot1, steamcompanionScreenshot3, steamcompanionScreenshot4],
        "related": [9, 4, 1]
    },
    {
        "show": true,
        "id": 7,
        "title": "Clock",
        "shortened_title": "Uhr",
        "background_image": uhrScreenshot1,
        "category": "Hardware",
        "slug": "uhr",
        "thumbnail" : uhrThumbnail,
        "text": [
            {
                "text": "I woke up one morning with the saying/joke “In Bayern gehen die Uhren anders” stuck in my head, in which I had to immediately start measuring, 3D modeling a backwards clock, and take apart an unused clock and reverse it."
            }
        ],
        "links": [
            {
                "url": "https://www.youtube.com/watch?v=Wm4znnrQ0uA",
                "label": "View Video"
            },
        ],
        "tags": ["3D Printing", "Fusion 360"],
        "screenshots": [uhrScreenshot1, uhrScreenshot2, uhrScreenshot3, uhrScreenshot4],
        "related": [10,6,5]
    },
    {
        "show": true,
        "id": 6,
        "title": "Mini Untz",
        "shortened_title": "Mini Untz",
        "category": "Hardware",
        "background_image": untzScreenshot1,
        // "color": '#c3512c',
        "slug": "mini-untz",
        "thumbnail" : untzThumbnail,
        "text": [
            {
                "text": "The Mini Untz is a MIDI controller that I’ve created for my friend, who is interested in creating music. The unique 16 midi buttons and 4 dials make it a fun project to create and use. The project came with some exciting new challenges. The case was 3D printed, sanded, primed then spray painted red. It also required soldering together the correct connections to an Arduino board and solder the 4 potentiometers together."
            }
        ],
        "links": [
            {
                "url": "https://www.youtube.com/watch?v=qu29b1Y1CD4",
                "label": "View Video"
            },
        ],
        "tags": ["3D Printing", "Arduino"],
        "screenshots": [untzScreenshot1, untzScreenshot2],
        "related": [10,6,5]
    },
    {
        "show": true,
        "id": 5,
        "title": "Solder Fume Extractor",
        "shortened_title": "Fan",
        "category": "Hardware",
        "color": '#c3512c',
        "slug": "fan",
        "thumbnail" : fanThumbnail,
        "text": [
            {
                "text": "The solder fume extactor was a quick project that I worked on that helps remove unwanted solder fumes while soldering. It was important for me to have an on/off switch, and it using power from the outlet instead of running on batteries. I designed the case in Fusion 360, and started printing it on my Prusa i3 mk3s. It uses a spare PC fan that I had lying around, an AC power adapter, an on/off switch, and carbon filters that I bought online."
            }
        ],
        "links": [
            {
                "url": "https://www.youtube.com/watch?v=3ezL95UZjdo",
                "label": "Watch Timelapse video"
            },
            {
                "url": "https://www.youtube.com/watch?v=-74eUCFjvPc",
                "label": "Watch Video"
            }
        ],
        "tags": ["3D Printing", "Fusion 360"],
        "screenshots": [fanScreenshot1, fanScreenshot2, fanScreenshot3]
    },
    {
        "show": true,
        "id": 4,
        "title": "Graduate Hotels",
        "shortened_title": "Graduate Hotels",
        "category": "Wordpress",
        "color": '#c3512c',
        "slug": "graduate-hotels",
        "background_image": graduateBanner,
        "logo": graduateLogo,
        "thumbnail" : graduateThumbnail,
        "text": [
            {
                "text": "Graduate Hotels are hand-crafted boutique hotels, located in the heart of the most dynamic University towns in America. Relive your glory days with Graduate!"
            },
            {
                "title": "Role in Project",
                "text": " My role for this project was to create the functionality and back end for the Graduate Corporate website and all their properties, where clients can login and enter content by themselves without having to ever look at the code of the website. I implemented “modules”, where clients can go in and add, remove and reorder sections of the website, giving them full flexibility on the structure of the pages.",
            },
            {
                "title": "Technical Challenges",
                "text": " The initial scale of the website was a bit intimidating at first, since we had to build out the Corporate website and about 10 property sites within a few weeks time.",
            },
            {
                "text": "The scale, the large images, site-wide Gmaps navigation and the amount of traffic to the website caused some performance issues on the website. The first few steps were to improve any sort of caching on the server side, make sure that all the files are combined and minified."
            },
            {
                "text": "We moved the website to a ssl/http2 protocol, which helped with assets as well. The http2 protocol allows assets, such as images and JS files to be fetched at once instead of a few at a time. A design requirement was to have Google Maps in the navigation side-wide. Another one of the issues we stumbled upon is that importing the Google maps library causes the website to slow down by a few seconds depending on the geolocations datacenter. The solution was to move their library asset import to a click event."
            }
        ],
        "links": [
            {
                "url": "https://www.graduatehotels.com/",
                "label": "View Website"
            }
        ],
        "tags": ["MYSQL", "PHP", "Timber", "Twig", "Wordpress"],
        "screenshots": [graduateScreenshot1, graduateScreenshot2, graduateScreenshot3]
    },
    {
        "show": true,
        "id": 3,
        "title": "WP Yeti",
        "shortened_title": "Yeti",
        "category": "Python",
        "color": '#252934',
        "slug": "wp-yeti",
        "text": [
            {
                "text": "WP Yeti is a Python 3 script that helps with WordPress development using small automated tasks. The script speeds up development by creating WordPress PHP + Timber/Twig files, injecting pre-set functions inside the functions.php file, or creating Advanced Custom fields"
            }
        ],
        "links": [
            {
                "url": "https://github.com/nickklein/wp-yeti",
                "label": "Visit Github"
            }
        ],
        "tags": ["MYSQL", "Python"],
        "screenshots": [yetiScreenshots1, yetiScreenshots2, yetiScreenshots3, yetiScreenshots4]
    },
    {
        "show": true,
        "id": 2,
        "title": "FTPS Backups",
        "shortened_title": "Backup",
        "category": "Python",
        "color": '#fed752',
        "slug": "ftps-backup",
        "text": [
            {
                "text": "FTPS Backup is a Python3 script that allows users to compress, encrypt specified folders using 7-Zip, then back them up to your local FTPS or USB drive automatically. I decided to quickly create it after Crashplan decided to stop offering their “Home” backup solution and start charging on a per month, per device basis. I primarily use this script to backup all computers in my home to a NAS server, which then backs it up again using Crashplans Small Business plan."
            }
        ],
        "links": [
            {
                "url": "https://github.com/nickklein/ftps-usb-backup",
                "label": "Visit Github"
            }
        ],
        "tags": ["Python"],
        "screenshots": [ftpsBackupScreenshot1]
    },
    // {
    //     "show": true,
    //     "title": "Langara Fishing Resort",
    //     "shortened_title": "Backup",
    //     "category": "Wordpress",
    //     "color": '#fed752',
    //     "slug": "langara-fishing-resort",
    //     "background_image": langaraBanner,
    //     "logo": langaraLogo,
    //     "thumbnail": langaraThumbnail,
    //     "text": [
    //         {
    //             "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus ligula in neque volutpat, ac tempor nisl ultrices. Integer at mollis sapien, id interdum erat. Donec massa purus, convallis eu iaculis eu, vehicula a purus. Nullam in imperdiet enim, eget rutrum ex. Ut ac mi velit. Mauris non maximus odio. Fusce vestibulum enim auctor felis ultricies, eget dapibus turpis iaculis. Nulla pharetra pharetra quam, in pellentesque augue tempus sit amet. Pellentesque arcu tortor, tristique ac viverra ac, malesuada sit amet quam. Sed elementum felis gravida, facilisis turpis ut, tempus erat. Donec a lorem tristique, condimentum dolor ut, gravida orci."
    //         }
    //     ],
    //     "links": [
    //         {
    //             "url": "https://www.langara.com/",
    //             "label": "View Website"
    //         }
    //     ],
    //     "tags": ["MYSQL", "PHP", "Timber", "Twig", "Wordpress"],
    //     "screenshots": [langaraScreenshot1, langaraScreenshot2, langaraScreenshot3, langaraScreenshot4]
    // },
    {
        "show": true,
        "id": 1,
        "title": "Eleven Experience",
        "shortened_title": "Eleven Experience",
        "category": "Wordpress",
        "color": '#c3512c',
        "slug": "eleven-experience",
        "background_image": elevenExperienceBanner,
        "logo": elevenExperienceLogo,
        "thumbnail" : elevenExperienceThumbnail,
        "text": [
            {
                "text": "From heli-skiing in Northern Iceland to casting for bonefish on a remote island in the Bahamas, Eleven experiences are a different kind of escape."
            },
            {
                "title": "Role in Project",
                "text": "My primary role in the project was to program the back-end for Eleven Experience, where clients can login and enter content by themselves without having to dig through code.  My goal for each project is to make the WordPress user interface intuitive, and allow clients to add, remove and reorder sections of the website.",
            },
            {
                "title": "Technical Challenges",
                "text": " The Eleven Experience website is heavily image driven, and also includes modules such as custom maps, and a weather APIs. It was pretty critical getting the website to a good speed.",
            },
            {
                "text": "The first steps were to reduce the amount of asset requests made to the server, and also combine and minify the CSS / JS files. We implemented Server-side caching (Database and Page caching), lazy loading, and caching the weather API information."
            }
        ],
        "tags": ["MYSQL", "PHP", "Wordpress"],
        "screenshots": [elevenExperienceScreenshot1, elevenExperienceScreenshot2, elevenExperienceScreenshot3, elevenExperienceScreenshot4, elevenExperienceScreenshot5]
    }
]
