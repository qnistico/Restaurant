import React from 'react'
import About from './About'
import Chefs from './Chefs'
import FoodShowcase from './FoodShowcase'
import Hero from './Hero'

function LandingPage() {
    return (
        <div className="landing-page">
            <Hero />
            <About />
            <Chefs />
        </div>
    )
}

export default LandingPage
