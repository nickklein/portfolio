import React from 'react';
import ProfileImage from '../images/profile.jpg';
import gearMonitor from '../images/expertise/gear.png'
import monitorImage from '../images/expertise/monitor.png'
import speedometerImage from '../images/expertise/speedometer.png'
import wpImage from '../images/expertise/wp.png'

export const homepage = {
    Header: {
        title: ( 
            <div>
                Hi, I'm <span>Nick</span>
            </div> 
        ),
        subHeader: "I build web applications",
    },
    ImageText: {
        title: "About",
        image: {
            url: ProfileImage,
            alt: "nick klein",
        },
        description: "I'm a Munich-born, Full Stack / Web Developer, currently living in Vancouver, BC. I have a passion for creating intuitive web applications, and have a huge interest in 3D printing, computer hardware, gaming and Linux."
    },
    Expertise: {
        title: "Expertise",
        items: [
            {
                image: monitorImage,
                title: "Speed",
                description: "Fast performance and load times across varied applications"
            },
            {
                image: gearMonitor,
                title: "Dynamic",
                description: "Turning static websites into dynamic ones"
            },
            {
                image: wpImage,
                title: "Wordpress",
                description: "Flexible back-ends that allow you to add, remove and sort content"
            },
            {
                image: speedometerImage,
                title: "Responsive",
                description: "Websites will work on all device sizes"
            }
        ]
    },
    ThreeColumnGrid: {
        title: "Work",
        filterButtons: ['All', 'Hardware', 'Laravel', 'Python', 'Wordpress'],

    },
    Contact: {
        title: "Contact"
    },
}