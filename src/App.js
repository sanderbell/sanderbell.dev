/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import cmairImage from './static/cmair.png';
import rewordsImage from './static/rewords.png';
import shouldImage from './static/should.png';

function App() {
  return (
    <div className='App'>
      <div id='flex-container'>
        <section id='hi'>
          <h1>Hello, I'm Sander</h1>
          <p id='intro'>Lorem Ipsum is simply dummy text of the printing and</p>
          <nav>
            <ul>Project</ul>
            <ul>About</ul>
          </nav>
          <div id='social'></div>
        </section>
        <section id='details'>
          <div id='projects'>
            <div className='proj' id='proj-one'>
              <div className='proj-illu`str'>
                <img width='100%' height='60px' src={shouldImage} />
              </div>
              <div className='proj-descr'>
                <h2>Should — A Minimalist To-Do</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className='proj' id='proj-two'>
              <div className='proj-illustr'>
                <img width='100%' height='60px' src={rewordsImage} />
              </div>
              <div className='proj-descr'>
                <h2>Rewords — Text Replacer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className='proj' id='proj-three'>
              <div className='proj-illustr'>
                <img width='100%' height='60px' src={cmairImage} />
              </div>
              <div className='proj-descr'>
                <h2>Air Quality in Chiang Mai</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div id='about'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
          <div id='stack'>teack</div>
        </section>
      </div>
    </div>
  );
}

export default App;
