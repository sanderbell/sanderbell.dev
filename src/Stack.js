import Marquee from 'react-fast-marquee';

function Stack() {
  const skills = [
    'Python',
    'JavaScript',
    'CSS3',
    'React',
    'Git',
    'Sass',
    'TypeScript',
    'jQuery',
    'Flask',
    'Node.js',
    'Docker',
    'Bash',
    'PWA',
    'HTML5',
    'Netlify',
    'Bootstrap',
    'Web API',
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

  const shuffledSkills = shuffle([...skills]);

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
