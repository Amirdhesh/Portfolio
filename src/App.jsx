import React from 'react';
import AboutPage from './Page/AboutPage';
import FrontPage from './Page/FrontPage';
import ProjectPage from './Page/ProjectPage';
import Footer from './Page/Footer';

function App() {
  

  return (
    <div>
      <div>
      <div className='sticky top-0'>
        <FrontPage  />
      </div>
      <div className='sticky top-0'>
        <AboutPage />
      </div>
      <div className='sticky top-0'>
          <ProjectPage />
      </div>
      <div className='sticky top-0'>
        <Footer />
      </div>
      </div>
      
    </div>
  );
}

export default App;
