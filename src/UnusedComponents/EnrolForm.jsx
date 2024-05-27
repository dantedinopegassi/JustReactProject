import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const EnrolmentForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [btnValue, setBtnValue] = useState("Enrol");
  const [studentID, setStudentID] = useState(0);

  const handleSubmit = (event) => {
    firstName !== "" || lastName !== ""
      ? setWelcomeMessage(`hola ${firstName} ${lastName}`)
      : setWelcomeMessage("");
    event.preventDefault();
  };

  const handleClick = (event) => {
    // la siguiente funcion resetea los valores con setState,
    // PERO LOS VALORES NO SON CAMBIADOS HASTA EL CIGUIENT SIKLO DE RENDERIZADO
    // (porque los hooks de react son ASINCRONICOS)
    handleInputReset("", "", "");
    // Student ID generation
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    let id = randomKey;
    setStudentID(randomKey);
    // For Enrol, use the randomKey variable and for Update use the state variable
    id = btnValue === "Enrol" ? randomKey : studentID;
    props.setStudentDetails({
      key: id,
      fname: firstName,
      lname: lastName,
      program: props.chosenProgram,
      email: email,
      edit: (
        <MdEdit
          className="actionIcon"
          onClick={() => handleEdit(id, props.chosenProgram)}
        />
      ),
      delete: (
        <MdDelete
          className="actionIcon"
          onClick={() => props.handleItemSelection("delete", id)}
        />
      ),
    });
    props.setSeats(props.currentSeats - 1);
    setBtnValue("Enrol");
    event.preventDefault();
  };

  const handleClickCancel = (event) => {
    handleInputReset("", "", "");
    setBtnValue("Enrol");
    event.preventDefault();
  };

  //change of input value set method
  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };

  const handleEdit = (stId) => {
    handleInputReset(firstName, lastName, email);
    setStudentID(stId);
    setBtnValue("Update");
    props.handleItemSelection("edit", stId);
  };

  //set input fields
  const handleInputReset = (fname, lname, email) => {
    setFirstName(fname);
    setLastName(lname);
    setEmail(email);
  };

  return (
    <div>
      <div className="enrolContainer">
        <form className="enrolForm" name="enrolForm" onSubmit={handleSubmit}>
          <ul className="ulEnrol">
            <li>
              <label for="firstname"></label>
              <input
                type="text"
                className="inputFields"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => handleInputChange(setFirstName, event)}
              />
            </li>
            <li>
              <label for="lastname"></label>
              <input
                type="test"
                className="inputFields"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => handleInputChange(setLastName, event)}
              />
            </li>
            <li>
              <label for="email"></label>
              <input
                type="email"
                className="inputFields"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(event) => handleInputChange(setEmail, event)}
              />
            </li>
            <li id="center-btn">
              <input
                type="submit"
                id="btnEnrol"
                name="Enrol"
                className="btn"
                alt="Enrol"
                value={btnValue}
                onClick={handleClick}
              />
              <input
                type="submit"
                id="btnCancel"
                name="Cancel"
                className="btn"
                alt="Cancel"
                value="Cancel"
                onClick={handleClickCancel}
              />
            </li>
            <li>
              {" "}
              <label id="studentMsg" className="message">
                {welcomeMessage}
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
export default EnrolmentForm;
