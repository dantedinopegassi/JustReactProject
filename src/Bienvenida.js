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
            onClick={() => props.setPrograma("UG")}
          />
          <label> Universitario</label>
        </li>
        <li>
          <input
            type="radio"
            name="programa"
            value="PG"
            onClick={() => props.setPrograma("PG")}
          ></input>
          <label> Graduado</label>
        </li>
      </ul>
    </div>
  );
};

export default Bienvenida;
