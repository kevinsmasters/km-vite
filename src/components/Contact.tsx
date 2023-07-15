import { FormEvent } from "react";

export const Contact = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <a id="contact"></a>
      <div className="row mb-3 mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className="pb-2">Contact</h2>
          <form onSubmit={onSubmit}>
            <fieldset>
              <div className="form-group">
                <label htmlFor="inputName" className="form-label mt-4">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter name"
                  name="inputName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="form-label mt-4">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="inputEmail"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea" className="form-label mt-4">
                  Your Message
                </label>
                <textarea name="textarea" id="textarea" rows={3}></textarea>
              </div>
              <button type="submit" className="btn btn-dark-navy mt-4">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};
