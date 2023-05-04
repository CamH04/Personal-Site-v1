import './Home.css';

export default function Home() {
  return (
    <div class="Foreground">
      <div class="content">
        <div class="WholeCircle">
          <span class="CircleBack"></span>
          <span class="CircleFore"></span>
        </div>
        <div class="text">
          <p id="phara">
            Hello! My name is Cameron Haynes, a Web developer who is interested in anything related to Computer Science. I love learning as much as i can with 
            <span class="magic-text"> dedication </span>
            and
            <span class="magic-text"> passion </span>
            Ive always believed in the power of computers and have love contributing to the world using them in my own way.
          </p>
          <div class="Buttons">
            <a  class="button-back" href="https://www.linkedin.com/in/cameron-haynes-778056233/">
              <button type="button" class="LinkedIn"> <span class="Button-Text LinkedIn"> LinkedIn </span></button>
            </a>
            <a  class="button-back" href=" ">
              <button type="button" class="Cv">  <span class="Button-Text Cv"> Cv </span></button>
            </a>
            <a  class="button-back" href="https://github.com/CamH04">
            <button type="button" class="Github" >  <span class="Button-Text Github"> Github </span></button>
            </a>
        </div>
        </div>
      </div>
    </div>
  );
}



