import "./App.css";
import line from "./assets/line.png";
import rectangle from "./assets/rectangle.png";
import cross from "./assets/cross.png";
import me from "./assets/me.jpg";
import triangle from "./assets/triangle.png";

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
        <br/>
        <div className="title">
          <div className="title-name">SANDRA ROSA ANTONY</div>
          <div className="title-profession">FRONT END DEVELOPER</div>
        </div>
      </div>
    </div>
  );
}

export default App;
