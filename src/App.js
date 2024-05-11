import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id} // It's not a props. Used to fix "App.js:20 Warning: Each child in a list should have a unique "key" prop."
        // item={item} // It's a props
        {...item} // Equal to create props : id={item.id} title={item.title} etc
      />
    )
  })

  return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
            {cards}
        </section>
    </div>
  )
}

export default App;
