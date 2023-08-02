import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCodepen,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import codewarsLogo from './static/codewars.svg';
import threadsLogo from './static/threads.png';

function Links() {
  const handleIconClick = () => {
    navigator.clipboard.writeText('thesanderbell@gmail.com');
  };

  return (
    <div id='links'>
      <ul>
        <li className='icon'>
          <FontAwesomeIcon
            data-tip
            data-for='customEventTooltip'
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
              alt=''
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
          <img alt='' title='Threads' className='svg-icon' src={threadsLogo} />
        </li>
      </ul>
    </div>
  );
}

export default Links;
