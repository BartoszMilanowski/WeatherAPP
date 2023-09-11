import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';

export const SidebarData = [
    {
        title: 'Pogoda',
        path: '/weather',
        icon: <TiIcons.TiWeatherSunny />,
        cName: 'nav-text'
    },
    {
        title: 'Jakość powietrza',
        path: '/air',
        icon: <FaIcons.FaSmog />,
        cName: 'nav-text'
    }
]