import React from 'react';
import ProfileImage from '../images/profile.jpg';
import gearMonitor from '../images/expertise/gear.png'
import monitorImage from '../images/expertise/monitor.png'
import speedometerImage from '../images/expertise/speedometer.png'
import wpImage from '../images/expertise/wp.png'
import laravelImage from '../images/expertise/laravel.png'

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
        description: "I'm a Munich-born Full Stack Developer with a passion for creating intuitive and high-performing web applications. I specialize in developing dynamic and responsive websites using modern technologies. Beyond my professional expertise, I have a keen interest in 3D printing, computer hardware, gaming, and Linux, which continually inspire my creative and technical endeavors."
    },
    Expertise: {
        title: "Expertise",
        items: [
            {
                image: gearMonitor,
                title: "Dynamic Web Applications",
                description: "Building robust and interactive web applications using modern frameworks."
            },
            {
                image: laravelImage,
                title: "Laravel",
                description: "Expert in creating scalable, maintainable, and secure applications with Laravel."
            },
            {
                image: monitorImage,
                title: "Responsive Design",
                description: "Creating websites that provide a consistent experience across all device sizes."
            },
            {
                image: speedometerImage,
                title: "Speed",
                description: "Fast performance and load times across varied applications"
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
