import styles from "./Projects.module.css";
export const Project = () => {
  return (
    <>
      <div className="g-col-6 g-col-md-4">
        <div className={"card shadow-sm " + styles.card}>
          <a href="https://calculatorenator.netlify.app/" target="_blank">
            <Image
              src="/images/calc-thumb.png" // Route of the image file
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
