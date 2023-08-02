/* eslint-disable jsx-a11y/alt-text */

import cmairImage from './static/cmair.png';
import rewordsImage from './static/rewords.png';
import shouldImage from './static/should.png';

function Projects() {
  return (
    <div id='projects'>
      <div className='proj' id='proj-one'>
        <div className='proj-illu`str'>
          <img draggable='false' src={shouldImage} />
        </div>
        <div className='proj-descr'>
          <h2 className='project-name'>Should</h2>
          <p>
            A minimalist to-do app that allows you to set only three tasks per
            day: the most important, a nice-to-do, and the least important. At
            midnight, all tasks are deleted, motivating you to accomplish what
            you've planned. It works best as a mobile PWA.
          </p>
        </div>
      </div>
      <div className='proj' id='proj-two'>
        <div className='proj-illustr'>
          <img draggable='false' src={rewordsImage} />
        </div>
        <div className='proj-descr'>
          <h2 className='project-name'>Rewords</h2>
          <p>
            A browser extension that replaces specified words and phrases up to
            40 characters on web pages as you browse. Various input validations
            ensure you won't encounter any unexpected replacements on your
            screen.
          </p>
        </div>
      </div>

      <div className='proj' id='proj-three'>
        <div className='proj-illustr'>
          <img draggable='false' src={cmairImage} />
        </div>
        <div className='proj-descr'>
          <h2 className='project-name'>Chiang Mai AQI</h2>
          <p>
            The app provides air quality data for Thailand's second largest
            city. It fetches the latest AQI data from an API and presents it in
            a visually appealing and user-friendly manner. The app implements
            caching to improve performance, ensuring a seamless UX.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
