import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  // faCodepen,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import codewarsLogo from './static/codewars.png';
// import threadsLogo from './static/threads.png';
import cv from './static/cv.png';

import { Tooltip as ReactTooltip } from 'react-tooltip';

function Links() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleIconClick = () => {
    navigator.clipboard.writeText('thesanderbell@gmail.com');
    setShowTooltip(true);
  };

  useEffect(() => {
    if (showTooltip) {
      const timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showTooltip]);

  return (
    <div id='links'>
      <ul>
        <li className='icon'>
          <a rel='noreferrer' target='_blank' href='/sander-resume.pdf'>
            <img
              draggable='false'
              alt='Open CV'
              title='Open CV'
              className='svg-icon'
              src={cv}
            />
          </a>
        </li>
        <li className='icon'>
          <FontAwesomeIcon
            title='Copy email'
            data-tip='Click to copy'
            data-tooltip-id='emailTooltip'
            onClick={handleIconClick}
            icon={faEnvelope}
            style={{ color: '#000' }}
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
              draggable='false'
              alt=''
              title='CodeWars'
              className='svg-icon'
              src={codewarsLogo}
            />
          </a>
        </li>
        {/* <li className='icon'>
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
        </li> */}
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
            href='https://www.instagram.com/sndr.bll'
          >
            <FontAwesomeIcon
              title='Instagram'
              icon={faInstagram}
              style={{ color: '#000' }}
            />
          </a>
        </li>
        {/* <li className='icon' style={{ margin: '0' }}>
          <img
            draggable='false'
            alt=''
            title='Threads'
            className='svg-icon'
            src={threadsLogo}
          />
        </li> */}
      </ul>
      <ReactTooltip
        id='emailTooltip'
        place='top'
        delayHide={2000}
        effect='solid'
        className={`tooltip ${showTooltip ? 'show' : ''}`}
      >
        {showTooltip && (
          <span style={{ fontSize: '0.9rem' }}>Email copied!</span>
        )}
      </ReactTooltip>
    </div>
  );
}

export default Links;
