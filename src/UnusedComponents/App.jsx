import EnrolList from "./EnrolList";
import EnrolmentForm from "./EnrolForm";
import { useState } from "react";

//ESTO AUN NO ANDA A FULL, ANDA POR LA LINEA 153

const App = () => {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  const [studentDetails, setStudentDetails] = useState({});
  const [action, setAction] = useState();
  const [selItemId, setSelItemId] = useState();
  const [isUgChecked, setIsUgChecked] = useState(true);
  const [isRestoreSeats, setIsRestoreSeats] = useState(false);

  const handleChange = (event) => {
    setProgram(event.target.value);
    setIsUgChecked(!isUgChecked);
    if (isRestoreSeats) {
      event.target.value === "UG"
        ? setPgSeats(pgSeats + 1)
        : setUgSeats(ugSeats + 1);
      setIsRestoreSeats(false);
    }
  };
  const handleItemSelection = (action, id) => {
    setAction(action);
    setSelItemId(id);
  };

  const setSelectedProgram = (selProgram) => {
    selProgram === "UG" ? setIsUgChecked(true) : setIsUgChecked(false);
    setProgram(selProgram);
    setIsRestoreSeats(true);
  };

  const restoreSeats = (pgm) => {
    pgm === "UG" ? setUgSeats(ugSeats + 1) : setPgSeats(pgSeats + 1);
    setAction("");
  };
  const setUpdatedSeats = (updatedSeats) => {
    if (program === "UG") {
      setUgSeats(updatedSeats);
    } else {
      setPgSeats(updatedSeats);
    }
  };
  return (
    <div className="App">
      <div className="programs">
        <h3 className="title">Student Enrolment Form</h3>
        <ul className="ulEnrol">
          <li className="parentLabels" onChange={handleChange}>
            <input
              type="radio"
              value="UG"
              name="programGroup"
              checked={isUgChecked}
            />
            Undergraduate
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
              checked={!isUgChecked}
            />
            Postgraduate
          </li>
          <li>
            <label className="parentLabels">
              Remaining {program} Seats - {program === "UG" ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setSeats={setUpdatedSeats}
        currentSeats={program === "UG" ? ugSeats : pgSeats}
        setStudentDetails={setStudentDetails}
        handleItemSelection={handleItemSelection}
        setSelectedProgram={setSelectedProgram}
      />
      <EnrolList
        studentDetails={studentDetails}
        setStudentDetails={setStudentDetails}
        selectedItemId={selItemId}
        action={action}
        restoreSeats={restoreSeats}
      />
    </div>
  );
};
export default App;
