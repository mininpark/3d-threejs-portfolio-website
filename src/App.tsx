import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, StarsCanvas, About, Showcase, Works } from './components';
import Experience from './components/module/Experience';
import Technology from './components/module/Technology';

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
        <div className="container__dark">
          <About />
          <Experience />
          <Technology />
          <Works />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
