import React, { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

function Stack() {
  const skills = [
    'Python',
    'JavaScript',
    'CSS3',
    'Vue.js',
    'ReactJS',
    'React Native',
    'XCode',
    'Git',
    'Github',
    'Expo',
    'Sass',
    'JSON',
    'Firebase',
    'Android Studio',
    'TypeScript',
    'jQuery',
    'Node.js',
    'Bash',
    'Jest',
    'PWA',
    'Redux',
    'HTML5',
    'Netlify',
    'Font Awesome',
    'Figma',
  ];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  //eslint-disable-next-line
  const shuffledSkills = useMemo(() => shuffle([...skills]), []);

  return (
    <div id='stack' className='scrolling'>
      <Marquee direction='left' speed={45}>
        <ul>
          {shuffledSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}

export default Stack;
