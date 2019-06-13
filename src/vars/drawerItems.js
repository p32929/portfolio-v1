import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';
import ContactsIcon from '@material-ui/icons/Contacts';

export var upperItems = [
    {
        myName: 'Home',
        icon: <HomeIcon/>,
        to: '/'
    },
    // {
    //     myName: 'About',
    //     icon: <InfoIcon/>
    // },
    {
        myName: 'Skills',
        icon: <SettingsIcon/>,
        to: '/skills'
    },
    {
        myName: 'Projects',
        icon: <WorkIcon/>,
        to: '/projects'
    },
    {
        myName: 'Contact',
        icon: <ContactsIcon/>,
        to: '/contact'
    },
]

export const lowerItems = [
    {
        myName: 'Blog',
        URL: 'http://p32929.wordpress.com/'
    },
    {
        myName: 'Facebook',
        URL: 'http://facebook.com/p32929'
    },
    {
        myName: 'Twitter',
        URL: 'http://twitter.com/p32929'
    },
    {
        myName: 'Instagram',
        URL: 'http://instagram.com/p32929'
    },
    {
        myName: 'YouTube',
        URL: 'https://www.youtube.com/channel/UC4T4Qi_DDvLKz9o4VhUjz4Q'
    },

]