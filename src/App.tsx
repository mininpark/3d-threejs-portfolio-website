import { BrowserRouter } from 'react-router-dom';

import { Hero, Navbar, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-relative">
        <div className="container__hero">
          <Navbar />
          <Hero />
        </div>
        {/* SECTION BELOW */}
      </div>
    </BrowserRouter>
  )
}

export default App
