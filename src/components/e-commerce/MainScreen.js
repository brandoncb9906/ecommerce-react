import React from 'react'
import { Cards } from '../ui/Cards'
import { Footer } from '../ui/Footer'
import { NavBar } from '../ui/NavBar'

export const MainScreen = () => {
    return (
        <div className="grid-container">  
            <header className="row">
                <NavBar/>
            </header>
            <main>
                <Cards/>
            </main>
            <footer className="row center">
                <Footer/>
            </footer>
        </div>
    )
}
