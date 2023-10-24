import styles from "./Projects.module.css";
import data from '../data/projects.json'
import { Project } from "./Project";

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
        {data.map((x, i) => (
          <>
            <Project
              key={i}
              title={x.title}
              src={x.src}
              link={x.link}
              text={x.text}
              width={x.width ? x.width : 170}
            />
          </>
        ))}
      </div>
    </>
  )
}
