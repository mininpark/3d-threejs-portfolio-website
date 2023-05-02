import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, StarsCanvas, About, Showcase } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-relative">
        <div className="container__hero">
          <Navbar />
          <Hero />
        </div>
        {/* SECTION BELOW */}
        <Showcase />
        <div className="container__about" id="about">
          <About />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
