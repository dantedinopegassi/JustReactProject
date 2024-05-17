// import { useState } from "react";
// import "./App.css";
// function EnrolmentForm(props) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [welcomeMessage, setWelcomeMessage] = useState("");
//   const handleSubmit = (event) => {
//     setWelcomeMessage(`Welcome ${firstName} ${lastName}. Your mail is ${email} and you are ${(event.chosenProgram==="UG" ? "undergraduate": "postgraduate")}`);
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form className="enrolForm" onSubmit={handleSubmit}>
//          {/* si "chosenProgram" no existe, entonces no se muestra  */}
//         <h1>{props.chosenProgram} Student Details</h1>
//         <label>First name:</label>
//         <input
//           type="text"
//           name="fname"
//           onBlur={(event) => setFirstName(event.target.value)}
//         />
//         <br />
//         <label>Last name:</label>
//         <input
//           type="text"
//           name="lname"
//           onBlur={(event) => setLastName(event.target.value)}
//         />
//         <br />
//         <br />
//         <label>Email:</label>
//         <input type="text" name="email" onBlur={(evt) => setEmail(evt.target.value)}/>
//         <br/>
//         <br/>
//         <input type="submit" value="Submit" />
//         <br />
//         <label id="studentMsg" className="message">
//           {welcomeMessage}
//         </label>
//       </form>
//     </div>
//   );
// }
// export default EnrolmentForm;

//____________________________________________Version2.0______________________________________________________

import { useState } from "react";
import "./App.css";
import { MdEdit, MdDelete } from "react-icons/md";

const EnrolmentForm = (props) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [bienvenida, setBienvenida] = useState("");

  const manejaElClick = (evt) => {
    _resetear("", "", "");
    setBienvenida(
      `${first ? first : "tuvi"} ${
        last ? last : "eja"
      } anotado/a. más te vale venir a clase! te mande un mail a ${
        email ? email : "elne@grode.wsp"
      }`
    );
    props.setUpdatedSeats(props.asientosRestantes - 1);
    const randomKey = Math.floor(1000 + Math.random() * 9000);
    props.setPersona({
      key: randomKey,
      fname: first,
      lname: last,
      program: props.programaElegido,
      email: email,
      edit: <MdEdit />,
      delete: (
        <MdDelete
          onClick={() => props.manejarItemSeleccion("delete", randomKey)}
        />
      ),
    });
    evt.preventDefault();
  };

  const cambiaDatos = (setFuncion, evt) => {
    setFuncion(evt.target.value);
  };

  const _resetear = (fname, lname, newEmail) => {
    setFirst(fname);
    setLast(lname);
    setEmail(newEmail);
  };

  return (
    <div className="enrolForm">
      <form>
        <h1> Ingreso de estudiante</h1>
        <label>Primer nombre</label>
        <input
          type="text"
          value={first}
          placeholder="daleque"
          onChange={(evt) => cambiaDatos(setFirst, evt)}
        ></input>
        <br />
        <label>Apellido</label>
        <input
          type="text"
          value={last}
          placeholder="arranca"
          onChange={(evt) => cambiaDatos(setLast, evt)}
        ></input>
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="socotroco@cosorolo.coso"
          onChange={(evt) => cambiaDatos(setEmail, evt)}
        ></input>
        <br />
        <br />
        <input type="submit" onClick={manejaElClick}></input>
        <br />
        <br />
        <label>{bienvenida}</label>
      </form>
    </div>
  );
};

export default EnrolmentForm;
