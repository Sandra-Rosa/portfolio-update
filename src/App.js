import "./App.css";
import line from "./assets/line.png";
import rectangle from "./assets/rectangle.png";
import cross from "./assets/cross.png";
import me from "./assets/me.jpg";
import triangle from "./assets/triangle.png";
import photoshop from "./assets/ps.png";
import brush from "./assets/brush.png";
import copy from "./assets/copy.png";
import drop from "./assets/drop.png";
import frame from "./assets/frame.png";
import gradient from "./assets/gradient.png";
import search from "./assets/search.png";
import text from "./assets/text.png";
import crop from './assets/crop.png'
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="image-container">
          <div className="title-image-container">
            <div className="text-title-image-container">My_photo.jpg</div>
            <div className="icons-title-image-container">
              <div className="icons">
                <img src={line} alt="line" />
              </div>
              <div className="icons">
                <img src={rectangle} alt="line" />
              </div>
              <div className="icons">
                <img src={cross} alt="line" />
              </div>
            </div>
          </div>
          <div className="div-image-container">
            <div className="div-image-container-top">
              <div className="top-image">
                <img src={me} alt="me" />
              </div>
              <div className="top-scroll">
                <div className="top-scroll-top">
                  <img src={triangle} alt="scroll" />
                </div>
                <div className="top-scroll-middle"></div>
                <div className="top-scroll-bottom">
                  <img src={triangle} alt="scroll" />
                </div>
              </div>
            </div>
            <div className="div-image-container-bottom">
              <div className="bottom-scroll-left">
                <img src={triangle} alt="scroll" />
              </div>
              <div className="bottom-scroll-middle"></div>
              <div className="bottom-scroll-right">
                <img src={triangle} alt="scroll" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="title">
          <div className="title-name">SANDRA ROSA ANTONY</div>
          <div className="title-profession">FRONT END DEVELOPER</div>
        </div>
      </div>
      <div className="container-1">
        <div className="container-1-main">
          <div className="main-top">
            <div className="photoshop-icon">
              <img src={photoshop} alt="photoshop" />
            </div>
            <div className="container-1-title">SANDRA ROSA ANTONY</div>
            <div className="container-1-icons">
              <div className="container-1-icon">
                <img src={line} alt="line" />
              </div>
              <div className="container-1-icon">
                <img src={rectangle} alt="line" />
              </div>
              <div className="container-1-icon">
                <img src={cross} alt="line" />
              </div>
            </div>
          </div>
          <div className="main-bottom">
            <div className="main-bottom-1">
              <div className="bottom-1-icons">
                <div className="bottom-1-icon">
                  <img src={brush} alt="brush" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={frame} alt="frame" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={crop} alt="crop" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={drop} alt="drop" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={gradient} alt="gradient" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={search} alt="search" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={text} alt="text" />
                </div>
                <div className="border-line"></div>
                <div className="bottom-1-icon">
                  <img src={copy} alt="copy" />
                </div>
              </div>
            </div>
            <div className="main-bottom-2">

            </div>
            <div className="main-bottom-3">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
