export default function Modal({ stateChanger = { setShowModal } }) {
  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="alert alert-dismissible alert-info text-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={() => stateChanger(false)}
            ></button>
            <strong>Thank You!</strong> You sent me an email.
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}
