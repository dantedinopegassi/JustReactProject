import { useState } from "react";

const handleClick = (props) => {
  alert(props.cosote);
}

let FooComponent = () => {
  const [cosote, setCosote] = useState(0);

  const manejalo = () => {
    setCosote(cosote + 1);
  };

  return (
    <div>
      <h1>Some title</h1>
      <button onClick={manejalo}>Click Me!{cosote}</button>
      <button onClick={handleClick} cosote={cosote}>
        Averigua el valor
      </button>
    </div>
  );
};
export default FooComponent;
