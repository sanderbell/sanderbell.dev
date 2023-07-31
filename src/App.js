/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
import cmairImage from './static/cmair.png';
import rewordsImage from './static/rewords.png';
import shouldImage from './static/should.png';
import codewarsLogo from './static/codewars.svg';
import threadsLogo from './static/threads.png';
import React, { useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

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
  };

  // useEffect(() => {
  //   console.log('object');
  //   if (tooltipVisible) {
  //     const timer = setTimeout(() => {
  //       setTooltipVisible(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [tooltipVisible]);

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
          <AttentionSeeker delay={500} effect='pulse' triggerOnce={false}>
            <h1 id='hello-sander'>Sander Bell</h1>
          </AttentionSeeker>
          <p id='intro'>Sleek designs, efficient code, top-notch adaptivity</p>

          <nav>
            <ul>
              <li
                className={projectsShown ? 'selected' : ''}
                onClick={showProject}
              >
                Projects
              </li>
              <li className={aboutShown ? 'selected' : ''} onClick={showAbout}>
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
                    A minimalist to-do app that allows you to set only three
                    tasks per day: the most important, a nice-to-do, and the
                    least important. After midnight, all tasks are deleted,
                    motivating you to accomplish what you've planned. This app
                    works best as a mobile Progressive Web App (PWA).
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
                    A browser extension that replaces specified words and
                    phrases up to 40 characters on web pages as you browse.
                    Various input validations ensure you won't encounter any
                    unexpected replacements on your screen.
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
                    This web app provides real-time Air Quality Index data for
                    Chiang Mai. It fetches the latest AQI data from an API and
                    presents it in a visually appealing and user-friendly
                    manner. The app implements caching to improve performance
                    and reduce API calls, ensuring a seamless UX.
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
            <div id='stack' className='scrolling'>
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
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: '#000' }}
                    onClick={handleIconClick}
                    data-tip='sdfsd'
                    data-tooltip-id='copied'
                  />
                  <ReactTooltip
                    id='copied'
                    place='bottom'
                    type='dark'
                    effect='solid'
                    visible={tooltipVisible}
                  />
                </li>
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
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
