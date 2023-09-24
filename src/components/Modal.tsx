const Modal = (stateChanger: boolean) => {
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
            ></button>
            <strong>Thank You!</strong> You sent me an email. {stateChanger}
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};
export default Modal;
