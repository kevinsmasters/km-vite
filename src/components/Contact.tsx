import { FormEvent } from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { init } from "@emailjs/browser";
export const Contact = () => {
  init("18q8DZQ5-7NPEk1KH");
  const [toSend, setToSend] = useState<{
    inputName: string;
    inputEmail: string;
    textarea: string;
  }>({
    inputName: "",
    inputEmail: "",
    textarea: "",
  });
  const [showModal, setShowModal] = useState(false);
  function clearFields(event: FormEvent<HTMLFormElement>) {
    // we have to convert event.target to array
    // we use from method to convert event.target to array
    // after that we will use forEach function to go through every input to clear it
    console.log("clear fields", event);
    // Array.from(event.target).forEach((e) => (e.value = ""));
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", toSend);
    send("service_ow82jex", "template_0jzvbzg", toSend, "18q8DZQ5-7NPEk1KH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // clear the fields
        clearFields(e);
        setToSend({
          inputName: "",
          inputEmail: "",
          textarea: "",
        });
        setShowModal(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };
  const handleChange = (e: any) => {
    console.log("value: ", e.target.value);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
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
                  value={toSend.inputName || ""} // or nothing so don't get warning when reset state
                  onChange={handleChange}
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
                  value={toSend.inputEmail || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="textarea" className="form-label mt-4">
                  Your Message
                </label>
                <textarea
                  name="textarea"
                  id="textarea"
                  className="form-control"
                  value={toSend.textarea || ""}
                  onChange={handleChange}
                  rows={3}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark-navy mt-4">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
      {showModal ? <p>show modal</p> : null}
      <style jsx>
        {`
          .btn-dark-navy {
            background-color: #121432;
            color: rgba(238, 232, 213, 0.75);
          }
          .btn-dark-navy:hover {
            background-color: #4a4a6c;
          }
        `}
      </style>
    </>
  );
};
