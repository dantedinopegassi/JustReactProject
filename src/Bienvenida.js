const Bienvenida = (props) => {
  return (
    <div>
      <label>hola, elegi programa</label>
      <br />
      <ul>
        <li>
          <input
            type="radio"
            name="programa"
            value="UG"
            defaultChecked
            onClick={() => props.setProgram("UG")}
          />
          <label> Universitario</label>
        </li>
        <li>
          <input
            type="radio"
            name="programa"
            value="PG"
            onClick={() => props.setProgram("PG")}
          ></input>
          <label> Graduado</label>
        </li>
      </ul>
    </div>
  );
};

export default Bienvenida;
