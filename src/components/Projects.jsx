import styles from "./Projects.module.css";
import data from '../data/projects.json'

export const Projects = () => {
  return (
    <>
      <a name="projects"></a>
      <div className="row mt-5 mb-3">
        <div className="col-md-12">
          <h2 className="pb-2">Projects</h2>
        </div>
      </div>
      <div className={styles.grid + " grid"}>
        {data.map((x) => {
          <>
            flerp
          </>
        })}
      </div>
    </>
  )
}
