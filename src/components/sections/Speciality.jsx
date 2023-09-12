import Bridge from "../../assets/images/bridge.jpg";

const Speciality = () => (
  <section className="section">
    <div className="section_bg--grey">
      <div className="container">
        <h2>Fag</h2>
        <div className="content_wrapper">
          <div className="text_wrapper">
            <p>
              Jeg har uttdanning som bro- og tunnel ingenør og jobbet i den
              område i 6 år. Etter var jeg designer av reklame, fotografer og 4
              år jobbet som driftsdirektør i et grossistselskap som solgte
              italienske vesker. I 2021 var jeg ferdig med utdannelse som IT
              utvikler.
            </p>
          </div>
          <div className="image_wrapper">
            <img
              src={Bridge}
              alt="bridge"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Speciality;
