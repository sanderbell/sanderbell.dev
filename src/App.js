import './App.css';
import Projects from './Projects';
import About from './About';
import Links from './Links';
import Stack from './Stack';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AttentionSeeker } from 'react-awesome-reveal';

function App() {
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
      <div className='App'>
        <div id='flex-container'>
          <section id='hi'>
            <AttentionSeeker delay={500} effect='pulse'>
              <h1 id='hello-sander'>Sander Bell</h1>
            </AttentionSeeker>
            <p id='intro'>Clean designs, efficient code, user-centered focus</p>
            <nav>
              <ul>
                <li
                  className={
                    projectsShown && window.location.pathname === '/projects' // FIXME:
                      ? 'selected'
                      : ''
                  }
                  onClick={showProject}
                >
                  <Link to='/projects'>Projects</Link>
                </li>
                <li
                  className={
                    aboutShown && window.location.pathname === '/about' // FIXME:
                      ? 'selected'
                      : ''
                  }
                  onClick={showAbout}
                >
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
            <div id='social'></div>
          </section>
          <section id='details'>
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
