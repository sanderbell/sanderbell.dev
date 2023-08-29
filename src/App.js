//  STYLES  //
import './App.css';

//  PACKAGES  //

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//  MY MODULES  //
import Projects from './Projects';
import About from './About';
import Links from './Links';
import Stack from './Stack';

//  MY FILES  //
import myPhoto from './static/myphoto.jpg';

function App() {
  const currentPath = window.location.pathname;

  useEffect(() => {
    if (
      currentPath === '/' ||
      currentPath === '/projects' ||
      currentPath === '/projects/'
    ) {
      showProject();
    } else if (currentPath === '/about' || currentPath === '/about/') {
      showAbout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  const [projectsShown, setProjectsShown] = useState(true);
  const [aboutShown, setAboutShown] = useState(false);
  const [triggerBlur, setTriggerBlur] = useState(false);

  function showProject() {
    setProjectsShown(true);
    setAboutShown(false);
    setTriggerBlur(true);
    setTimeout(() => {
      setTriggerBlur(false);
    }, 550);
  }

  function showAbout() {
    setProjectsShown(false);
    setAboutShown(true);
    setTriggerBlur(true);
    setTimeout(() => {
      setTriggerBlur(false);
    }, 550);
  }

  return (
    <Router>
      <div className='App'>
        <div id='flex-container'>
          <section id='hi'>
            {/* <Link to={projectsShown ? '/about' : '/projects'}> */}
            <img
              alt=''
              id='my-photo'
              src={myPhoto}
              draggable='false'
              // onClick={projectsShown ? showAbout : showProject}
            />
            {/* </Link> */}
            <h1 id='hello-sander'>Sander Bell</h1>
            <p id='intro'>
              Web developer specializing in clean designs, efficient code, and
              user-centered solutions
            </p>
            <nav>
              <ul>
                <li
                  className={projectsShown ? 'selected' : ''}
                  onClick={showProject}
                >
                  <Link to='/projects'>Projects</Link>
                </li>
                <li
                  className={aboutShown ? 'selected' : ''}
                  onClick={showAbout}
                >
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
            <div id='social'></div>
          </section>
          <section className={triggerBlur ? 'current-screen' : ''} id='details'>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Projects />
                    <Stack />
                  </>
                }
              />
              <Route
                path='/projects'
                element={
                  <>
                    <Projects />
                    <Stack />
                  </>
                }
              />

              <Route
                path='/about'
                element={
                  <>
                    <About />
                    <Links />
                  </>
                }
              />
            </Routes>
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
