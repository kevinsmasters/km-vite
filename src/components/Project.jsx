import { Image } from "./Image";
import styles from "./Projects.module.css";
export const Project = ({ title, src, link, text, width }) => {
  return (
    <>
      <div className="g-col-6 g-col-md-4">
        <div className={"card shadow-sm " + styles.card}>
          <a href={link} target="_blank">
            <Image
              src={src} // Route of the image file
              height={120} // Desired size with correct aspect ratio
              width={width} // Desired size with correct aspect ratio
              alt={title}
            />
          </a>
          <div className="card-body">
            <p className="card-text" dangerouslySetInnerHTML={{ __html: text }}>

            </p>
            <div className="d-flex justify-content-between align-items-center"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </>
  )
}
