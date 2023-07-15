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
import crop from "./assets/crop.png";
import color from "./assets/color.png";
import elipse from "./assets/elipse.png";
import items from "./assets/items.png";
import layer from "./assets/layer.png";
import notice from "./assets/notice.png";
import skip from "./assets/skip.png";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import behance from "./assets/behance.png";
import instagram from "./assets/instagram.png";

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
                <img src={rectangle} alt="rectangle" />
              </div>
              <div className="icons">
                <img src={cross} alt="cross" />
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
              <div class="grid-container">
                <div class="grid-item">
                  <div className="image-container">
                    <div className="title-image-container">
                      <div className="text-title-image-container">
                        My_photo.jpg
                      </div>
                      <div className="icons-title-image-container">
                        <div className="icons">
                          <img src={line} alt="line" />
                        </div>
                        <div className="icons">
                          <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className="icons">
                          <img src={cross} alt="cross" />
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
                </div>
                <div class="grid-item">
                  <div className="image-container">
                    <div className="title-image-container">
                      <div className="text-title-image-container">
                        About_me.jpg
                      </div>
                      <div className="icons-title-image-container">
                        <div className="icons">
                          <img src={line} alt="line" />
                        </div>
                        <div className="icons">
                          <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className="icons">
                          <img src={cross} alt="cross" />
                        </div>
                      </div>
                    </div>
                    <div className="div-image-container">
                      <div className="div-image-container-top">
                        <div className="top-about">
                          <div className="top-about-text">
                            Hello my name is sandra- I’m a Full Stack Developer
                            and Freelancer from India.
                            <br />
                            I have experience in MERN stack,wordpress and UI
                            tools like figma and canva.
                            <br />
                            I am always open to new intersting projects. feel
                            free to contact me.
                            <br />
                          </div>
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
                </div>
                <div class="grid-item">
                  <div className="image-container">
                    <div className="title-image-container">
                      <div className="text-title-image-container">
                        About_me.jpg
                      </div>
                      <div className="icons-title-image-container">
                        <div className="icons">
                          <img src={line} alt="line" />
                        </div>
                        <div className="icons">
                          <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className="icons">
                          <img src={cross} alt="cross" />
                        </div>
                      </div>
                    </div>
                    <div className="div-image-container">
                      <div className="div-image-container-top">
                        <div className="top-contact">
                          <div className="top-about-text">
                            <div className="contact-me-icons">
                              <a
                                href="https://github.com/Sandra-Rosa"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img src={github} alt="github" />
                              </a>
                              <a
                                href="https://www.linkedin.com/in/sandra-rosa-antony-66a964220/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img src={linkedin} alt="linkedin" />
                              </a>
                              <a
                                href="https://www.behance.net/sandraantony2"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img src={behance} alt="behance" />
                              </a>
                              <a
                                href="https://instagram.com/_saan_dr?igshid=ZDc4ODBmNjlmNQ=="
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img src={instagram} alt="instagram" />
                              </a>
                            </div>
                            <div className="top-contact-button">
                              <a
                                href="https://drive.google.com/file/d/1ZVWnZSqE0Lqq2ElqA41kIstYxPJgTygO/view?usp=share_link"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <button className="resume">
                                  Download
                                  <br /> Resume
                                </button>
                              </a>
                            </div>
                          </div>
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
                </div>
                <div class="grid-item">
                  <div className="image-container">
                    <div className="title-image-container">
                      <div className="text-title-image-container">
                        Skills.png
                      </div>
                      <div className="icons-title-image-container">
                        <div className="icons">
                          <img src={line} alt="line" />
                        </div>
                        <div className="icons">
                          <img src={rectangle} alt="rectangle" />
                        </div>
                        <div className="icons">
                          <img src={cross} alt="cross" />
                        </div>
                      </div>
                    </div>
                    <div className="div-image-container">
                      <div className="div-image-container-top">
                        <div className="top-contact">
                          <div className="top-about-text">
                            <ui>
                              <li>Javascript</li>
                              <li>MERN stack</li>
                              <li>C++</li>
                              <li>Python</li>
                              <li>Front end development libraries</li>
                              <li>Responsive Web Design</li>
                              <li>Figma</li>
                              <li>Git, Github</li>
                            </ui>
                          </div>
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
                </div>
              </div>
            </div>
            <div className="main-bottom-3">
              <div className="bottom-1-icon">
                <img src={skip} alt="skip" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={notice} alt="notice" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={color} alt="color" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={gradient} alt="gradient" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={elipse} alt="elipse" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={layer} alt="layer" />
              </div>
              <div className="border-line"></div>
              <div className="bottom-1-icon">
                <img src={items} alt="itmes" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="appreciation-image-container">
          <div className="title-image-container">
            <div className="text-title-image-container">Appreciation.svg</div>
            <div className="icons-title-image-container">
              <div className="icons">
                <img src={line} alt="line" />
              </div>
              <div className="icons">
                <img src={rectangle} alt="rectangle" />
              </div>
              <div className="icons">
                <img src={cross} alt="cross" />
              </div>
            </div>
          </div>
          <div className="div-image-container">
            <div className="div-image-container-top">
              <div className="top-about">
                <div className="top-about-text">
                  Thanks for visiting my website.
                </div>
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
      </div>
    </div>
  );
}

export default App;
