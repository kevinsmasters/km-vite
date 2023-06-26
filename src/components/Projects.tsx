import calcThumb from "../assets/images/calc-thumb.png";
import gitMark from "../assets/images/GitHub-Mark-120px.png";
import rivJam from "../assets/images/rivertide-jamaica.png";
import tacHel from "../assets/images/taconic-health-standard-selector.png";
import peris from "../assets/images/amnh-perissodactyls.png";
import uc from "../assets/images/ulstercounty-ny.png";
import tacRes from "../assets/images/taconic-resources.png";
import crossVal from "../assets/images/cross-valley.png";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <>
      <div id="projects"></div>
      <div className="row mt-5 mb-3">
        <div className="col-md-12">
          <h2 className="pb-2">Projects</h2>
        </div>
      </div>
      <div className={styles.grid + " grid"}>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a href="https://calculatorenator.netlify.app/" target="_blank">
              <img
                src={calcThumb} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={170} // Desired size with correct aspect ratio
                alt="Calculatorenator"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Calculator App coded in React and based on a project for
                freeCodeCamp Front End Development Libraries certification.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>

        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a
              href="https://github.com/kevinsmasters/ng-financial-chart"
              target="_blank"
            >
              <img
                src={gitMark} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={120} // Desired size with correct aspect ratio
                alt="Github Project"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Using JSON data to display chart of revenue vs. cancellations.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a href="https://rivertidejamaicaretreats.org/home" target="_blank">
              <img
                src={rivJam} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={170} // Desired size with correct aspect ratio
                alt="Rivertide Retreats"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Angular app. Features customized form components connecting to
                their Paypal ecommerce widgets.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a
              href="https://github.com/kevinsmasters/asana-project-status"
              target="_blank"
            >
              <img
                src={gitMark} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={120} // Desired size with correct aspect ratio
                alt="Github Project"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Python script to query Asana projects and save to CSV.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>

        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a
              href="https://www.taconic.com/quality/animal-health/health-standards/health-standard-selector/"
              target="_blank"
            >
              <img
                src={tacHel} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={193} // Desired size with correct aspect ratio
                alt="Taconic Biosciences Health Standard Selector"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                JavaScript/CSS/HTML widget to help a researcher select the best
                animal model health standard assuming pathogen exclusion
                criteria.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a
              href="https://research.amnh.org/paleontology/perissodactyl/"
              target="_blank"
            >
              <img
                src={peris} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={193} // Desired size with correct aspect ratio
                alt="AMNH Perissodactyls"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                American Museum of Natural History Perissodactyls Research Site
                <br />
                Drupal custom template and site architecture.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a href="https://ulstercountyny.gov/" target="_blank">
              <img
                src={uc} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={192} // Desired size with correct aspect ratio
                alt="Ulster County NY"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Ulster County Government Website
                <br />
                Drupal custom template, site architecture, custom views and
                interactive features.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>

        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a href="https://www.taconic.com/resources/" target="_blank">
              <img
                src={tacRes} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={207} // Desired size with correct aspect ratio
                alt="Taconic Biosciences Resources"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Searchable library of Taconic Biosciences marketing materials.
                <br />
                Angular app utilizing Node API connected to MySQL database.
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="g-col-6 g-col-md-4">
          <div className={"card shadow-sm " + styles.card}>
            <a href="https://crossvalleyhealth.com/" target="_blank">
              <img
                src={crossVal} // Route of the image file
                height={120} // Desired size with correct aspect ratio
                width={207} // Desired size with correct aspect ratio
                alt="Cross Valley Health and Medicine"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                Custom Bootstrap based WordPress theme. Includes accessibility
                enhancements and Spanish/English language translation.{" "}
              </p>
              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        {/* 
        <div className="col">
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
      {/* <style jsx>{`
        @media (max-width: 990px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style> */}
    </>
  );
};
