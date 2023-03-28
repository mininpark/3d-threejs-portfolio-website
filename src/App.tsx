import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, StarsCanvas, About } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-relative">
        <div className="container__hero">
          <Navbar />
          <Hero />
        </div>
        {/* SECTION BELOW */}
        <div className="container__about" id="about">
          <About />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
