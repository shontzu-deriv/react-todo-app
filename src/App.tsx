import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  function handleSubmit() {
    setName(name);
    setAge(age);
    setColor(color);
  }

  function clear() {
    setName("");
    setAge("");
    setColor("red");
  }

  return (
    <div className="d-flex v-center h-center">
      <form className="w-50 pa-16 mb-16" onSubmit={(e) => e.preventDefault()}>
        <h3>Fill the form!</h3>
        <div>
          <Input name="Name" value={name} onChange={changeName} />
          <Input name="Age" value={age} onChange={changeAge} />
          <Select name="Favourite Color" value={color} onChange={changeColor} />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn-succes pa-16 mb-16"
        >
          submit
        </button>
        <button onClick={clear} className="btn-secondary pa-16 mb-16">
          clear
        </button>
      </form>

      <div className="w-50 pa-16 mb-16">
        <p>
          <b>{name}</b> is <b>{age}</b> years old and he likes the color{" "}
          <b>{color}</b>
        </p>
      </div>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};


type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="pa-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
