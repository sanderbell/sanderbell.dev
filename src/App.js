//  STYLES  //
import './App.css';

//  PACKAGES  //

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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

  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    setAnimationStyle({
      animation: 'fade-in 1s ease',
    });
  }, []);

  const [projectsShown, setProjectsShown] = useState(true);
  const [aboutShown, setAboutShown] = useState(false);

  function showProject() {
    setProjectsShown(true);
    setAboutShown(false);
  }

  function showAbout() {
    setProjectsShown(false);
    setAboutShown(true);
  }

  return (
    <Router>
      <div
        className='App'
        style={{
          animation: 'fade-in 1s ease',
        }}
      >
        <div id='flex-container'>
          <section style={animationStyle} id='hi'>
            <Link to={projectsShown ? '/about' : '/projects'}>
              <img
                style={{
                  opacity: aboutShown ? '0.9' : '0.6',
                }}
                alt=''
                id='my-photo'
                src={myPhoto}
                draggable='false'
                onClick={projectsShown ? showAbout : showProject}
              />
            </Link>
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
          <section
            style={{
              animation: currentPath ? 'fade-in 2s ease' : '',
            }}
            id='details'
          >
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
                    <CSSTransition
                      in={projectsShown}
                      timeout={500}
                      classNames='fade'
                      unmountOnExit
                    >
                      <>
                        <Projects />
                        <Stack />
                      </>
                    </CSSTransition>
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
