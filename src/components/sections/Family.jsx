import "../../css/sections.css";
import FamilyPhoto from "../../assets/images/IMG_4383.jpeg";
import Me from "../../assets/images/IMG_4397.jpeg";

const Family = () => (
  <section>
    <div className="section_bg--blue">
      <div className="container">
        <h2>Familie</h2>
        <div className="content_wrapper">
          <div className="gallery_wrapper">
            <div className="image_wrapper image_wrapper--main">
              <img
                src={FamilyPhoto}
                alt="Family"
              />
            </div>
            <div
              className="image_wrapper image_wrapper--floating"
              style={{ zIndex: 5 }}>
              <img
                src={Me}
                alt="Me"
              />
            </div>
          </div>
          <div className="text_wrapper">
            <p>
              Jeg er ikke gift og har ikke barn. Jeg har fire eldre søskenbarn
              og tre eldre brødre fra foster familie.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Family;
