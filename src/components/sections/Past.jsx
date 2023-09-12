import "../../css/sections.css";
import Kyiv from "../../assets/images/Maidan_1.jpg";
const Past = () => (
  <section>
    <div className="section_bg--blue">
      <div className="container">
        <h2>Fortid</h2>
        <div className="content_wrapper">
          <div className="image_wrapper">
            <img
              src={Kyiv}
              alt="Kyiv"
            />
          </div>
          <div className="text_wrapper">
            <p>
              Jeg er 34 år gammel og kommer fra Ukraina. Jeg er født i Kyiv og
              bodde der helt livet mitt. Til Norge kommer jeg på grunn av
              Russland startet en fullskala invasjon av Ukraina 24. februar i
              2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Past;
