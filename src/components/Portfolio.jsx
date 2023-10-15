import {
  Link,
} from 'react-router-dom';

const Portfolio = ({ image, title, info, liveLink }) => {
  return (
    <div>
      <section id="portfolio" className="portfolio">
        <div className="portfolio-details">
          <div className="section-heading text-center">
            <h2>portfolio</h2>
          </div>
          <div className="container">
            <div className="portfolio-content">
              <div className="isotope">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src={image}
                        alt={title}
                      />
                      <div className="isotope-overlay">
                        <Link to='{liveLink}' />
                        <p>{info}</p>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src={image}
                        alt={title}
                      />
                      <div className="isotope-overlay">
                        <Link to='{liveLink}'/>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src={image}
                        alt={title}
                      />
                      <div className="isotope-overlay">
                          <Link to='{liveLink}'/>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item">
                      <img
                        src={image}
                        alt={title}
                      />
                      <div className="isotope-overlay">
                         <Link to='{liveLink}'/>
                      </div>
                    </div>
                    <div className="item">
                      <img
                        src={image}
                        alt={title}
                      />
                      <div className="isotope-overlay">
                         <Link to='{liveLink}'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
