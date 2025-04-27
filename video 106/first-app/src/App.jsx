import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Cards from "./components/Cards.jsx"

function App() {


  return (
    <>
      <Navbar />
      <div className="cards">
        <Cards title="card 1" description="description of card 1"/>
        <Cards title="card 2" description="description of card 2"/>
        <Cards title="card 3" description="description of card 3"/>
        <Cards title="card 4" description="description of card 4"/>
        
      </div>
      <Footer />
    </>
  )
}

export default App
