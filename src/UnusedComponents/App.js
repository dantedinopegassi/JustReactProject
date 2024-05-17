// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// function EnrolmentForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [welcomeMessage, setWelcomeMessage] = useState("");
//   const handleSubmit = (event) => {
//     setWelcomeMessage(`Welcome ${firstName} ${lastName}`);
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form className="enrolForm" onSubmit={handleSubmit}>
//         <h1>Student Details</h1>
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

//____________________________________________Version2.0________________________________________________________

// import "./App.css";
// import EnrolmentForm from "./EnrolmentForm";
// import EnrolList from "./EnrolList";
// import { useState } from "react";
// const App = () => {
//   const [program, setProgram] = useState("UG");
//   /*const [alumni, setAlumni] = useState([])*/
//   const handleChange = (event) => {
//     setProgram(event.target.value);
//   };
//   // const cambiarAlumnos = (alumni) => {
//   //   setAlumni(alumni);
//   // };
//   return (
//     <div className="App">
//       <div className="programs">
//         <label>Choose Program:</label>
//         <select
//           className="appDropDowns"
//           onChange={handleChange}
//           value={program}
//         >
//           <option value="UG">Undergraduate</option>
//           <option value="PG">Postgraduate</option>
//         </select>
//       </div>
//       <EnrolmentForm chosenProgram={program} />
//       <EnrolList /*listaAlumnos={cambiarAlumnos}*//>

//     </div>
//   );
// }
// export default App;

//____________________________________________Version3.0________________________________________________________

import "./App.css";
import EnrolmentForm from "./EnrolmentForm";
import { useState } from "react";
// import { handleClick } from "./Dumbass";
import FooComponent from "./UnusedComponents/Dumbass";
import EnrolList from "./EnrolList";

const App = () => {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  const [persona, setPersona] = useState({});
  const [action, setAction] = useState();
  const [itemId, setItemId] = useState();

  const manejarItemSeleccion = (accion, id) => {
    setAction(accion);
    setItemId(id);
  };

  const devolverAsiento = (prgoram) => {
    prgoram === "UG" ? setUgSeats(ugSeats+1) : setPgSeats(pgSeats+1);
    setAction("");
  }

  const manejaElCambio = (elemento) => {
    alert(elemento.target.value);
    setProgram(elemento.target.value);
    setUgSeats(ugSeats);
    setPgSeats(pgSeats);
  };

  const cambiaLosAsientos = (numeroDeAsiento) => {
    if (program === "UG") {
      setUgSeats(numeroDeAsiento);
    } else {
      setPgSeats(numeroDeAsiento);
    }
  };

  return (
    <div className="App">
      <div className="encabezado">
        <h1 className="title">Que Titulo Tenes?</h1>
        <ul className="menu">
          <li className="parent" onChange={manejaElCambio}>
            <input type="radio" value="UG" name="programGroup" defaultChecked />
            undergraduate
            <input type="radio" value="PG" name="programGroup" />
            postgraduate
          </li>
          <li>
            <label>
              restantes: {program} {program === "UG" ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        programaElegido={program}
        setUpdatedSeats={cambiaLosAsientos}
        asientosRestantes={program === "UG" ? ugSeats : pgSeats}
        setPersona={setPersona}
      />
      <button onClick={() => alert("props" + JSON.stringify(persona))}>
        pdersona
      </button>
      {/* <button onClick={handleClick}>Click Me!</button> */}
      {/* this is a dumbass named component... not the default component... 
      you can use this dumbass component only if there's a line of code like this:
    export { handleClick }; */}
      <FooComponent />
      <EnrolList persona={persona} setPersona={setPersona} />
    </div>
  );
};

export default App;
