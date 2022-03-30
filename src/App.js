import React from 'react'
import { AboutScreen } from './components/AboutScreen'
import { ContactScreen } from './components/ContactScreen'
import { HomeScreen } from './components/HomeScreen'
import { ProjectsScreen } from './components/ProjectsScreen'
import { NavBar } from './components/ui/NavBar'
import './Styles/index.scss'

export const App = () => {


    return (

        <div>

            <NavBar />
            <HomeScreen />
            <AboutScreen />
            <ProjectsScreen />
            <ContactScreen />

        </div>

    )

}