/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import cmairImage from './static/cmair.png';
import rewordsImage from './static/rewords.png';
import shouldImage from './static/should.png';
import codewarsLogo from './static/codewars.svg';
import threadsLogo from './static/threads.png';
import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCodepen,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [projectsShown, setProjectsShown] = useState(true);
  const [aboutShown, setAboutShown] = useState(false);

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleIconClick = () => {
    navigator.clipboard.writeText('thesanderbell@gmail.com');

    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 3000);
  };

  function showProject() {
    setProjectsShown(true);
    setAboutShown(false);
  }

  function showAbout() {
    setProjectsShown(false);
    setAboutShown(true);
  }

  return (
    <div className='App'>
      <div id='flex-container'>
        <section id='hi'>
          <h1 id='hello-sander'>Sander Bell</h1>
          <p id='intro'>Sleek designs, efficient code, top-notch adaptivity</p>
          <nav>
            <ul>
              <li className={projectsShown && 'selected'} onClick={showProject}>
                Projects
              </li>
              <li className={aboutShown && 'selected'} onClick={showAbout}>
                About
              </li>
            </ul>
          </nav>
          <div id='social'></div>
        </section>
        <section id='details'>
          {projectsShown && (
            <div id='projects'>
              <div className='proj' id='proj-one'>
                <div className='proj-illu`str'>
                  <img width='100%' height='60px' src={shouldImage} />
                </div>
                <div className='proj-descr'>
                  <h2 className='project-name'>Should</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className='proj' id='proj-two'>
                <div className='proj-illustr'>
                  <img width='100%' height='60px' src={rewordsImage} />
                </div>
                <div className='proj-descr'>
                  <h2 className='project-name'>Rewords</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className='proj' id='proj-three'>
                <div className='proj-illustr'>
                  <img width='100%' height='60px' src={cmairImage} />
                </div>
                <div className='proj-descr'>
                  <h2 className='project-name'>Chiang Mai AQI</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          )}
          {aboutShown && (
            <div id='about'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div>
          )}
          {projectsShown && (
            <div id='stack'>
              <ul>
                <li>Python</li>
                <li> JavaScript</li>
                <li> CSS</li>
                <li> React</li>
                <li> Git</li>
                <li> Sass</li>
                <li> TypeScript</li>
                <li> jQuery</li>
                <li> Flask</li>
                <li> PWA</li>
                <li> HTML</li>
                <li> Netlify</li>
                <li> Bootstrap</li>
                <li> Web API</li>
                <li> Font Awesome</li>
                <li> Figma</li>
              </ul>
            </div>
          )}
          {aboutShown && (
            <div id='links'>
              <ul>
                <li className='icon'>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/sanderbell'
                  >
                    <FontAwesomeIcon
                      title='GitHub'
                      icon={faGithub}
                      style={{ color: '#000' }}
                    />
                  </a>
                </li>
                <li className='icon'>
                  {' '}
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://codewars.com/users/sanderbell'
                  >
                    <img
                      title='CodeWars'
                      className='svg-icon'
                      src={codewarsLogo}
                    />
                  </a>
                </li>
                <li className='icon'>
                  {' '}
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://codepen.io/sanderbell'
                  >
                    <FontAwesomeIcon
                      title='CodePen'
                      icon={faCodepen}
                      style={{ color: '#000' }}
                    />
                  </a>
                </li>
                <li className='icon'>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/sanderbell'
                  >
                    <FontAwesomeIcon
                      title='LinkedIn'
                      icon={faLinkedin}
                      style={{ color: '#000' }}
                    />
                  </a>
                </li>
                <li className='icon'>
                  <a
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.instagram.com/sanderbell'
                  >
                    <FontAwesomeIcon
                      title='Instagram'
                      icon={faInstagram}
                      style={{ color: '#000' }}
                    />
                  </a>
                </li>
                <li className='icon'>
                  <img title='Threads' className='svg-icon' src={threadsLogo} />
                </li>

                <li className='icon'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: '#000' }}
                    onClick={handleIconClick}
                    data-tip='Copied!'
                  />
                  <ReactTooltip
                    place='top'
                    type='dark'
                    effect='solid'
                    visible={tooltipVisible}
                  />
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
